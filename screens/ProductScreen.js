import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
import {isMobile} from 'react-device-detect';
import {Tabs,Tab, Select, MenuItem} from '@material-ui/core';
import $  from 'jquery';

export default function ProductScreen(props) {
  const [value, setValue] = React.useState(0)
  const handleValue=(e,val)=>{
    console.warn(val)
    setValue(val)
  }

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };

  
  $(document).ready(function() {
    $('.slideshow-thumbnails').hover(function() { changeSlide($(this)); });
    $(document).mousemove(function(e) {
      var x = e.clientX - e.clientY;
      var y = e.clientY - e.clientX;
      var imgx2 = $('.slideshow-items.active').outerWidth();
      var imgy2 = $('.slideshow-items.active').outerHeight();
      if ( x < imgy2 && y < imgx2) {
        $('#lens').show(); $('#result').show();
        imageZoom( $('.slideshow-items.active'), $('#result'), $('#lens') );
      } else {
        $('#lens').hide(); $('#result').hide();
      }
    });
  });
  function imageZoom( img, result, lens ) {
    lens.width( img.innerWidth() / 2 ); lens.height( img.innerHeight() / 2 );
    var cx = img.innerWidth() / lens.innerWidth(); var cy = img.innerHeight() / lens.innerHeight();
    result.css('backgroundImage', 'url(' + img.attr('src') + ')');
    result.css('backgroundSize', img.width() * cx + 'px ' + img.height() * cy + 'px');
    lens.mousemove(function(e) { moveLens(e); });
    img.mousemove(function(e) { moveLens(e); });
    lens.on('touchmove', function() { moveLens(); })
    img.on('touchmove', function() { moveLens(); })
    function moveLens(e) {
      var x = e.clientX - lens.outerWidth() / 1;
      var y = e.clientY - lens.outerHeight() / 1;
      if ( x > img.outerWidth() + img.offset().left - lens.outerWidth() ) { x = img.outerWidth() + img.offset().left - lens.outerWidth(); }
      if ( x < img.offset().left ) { x = img.offset().left; }
      if ( y > img.outerHeight() + img.offset().top - lens.outerHeight() ) { y = img.outerHeight() + img.offset().top - lens.outerHeight(); }
      if ( y < img.offset().top ) { y = img.offset().top; }
      lens.offset({ top: y, left: x });
      result.css('backgroundPosition', '-' + ( x - img.offset().left ) * cx  + 'px -' + ( y - img.offset().top ) * cy + 'px');
    }
  }

  function changeSlide(elm) {
    $('.slideshow-items').removeClass('active');
    $('.slideshow-items').eq( elm.index() ).addClass('active');
    $('.slideshow-thumbnails').removeClass('active');
    $('.slideshow-thumbnails').eq( elm.index() ).addClass('active');
  }

  /*******************************************************************************************************
                                  /// MOBILE VIEW ///
  ********************************************************************************************************/
  if (isMobile) {
    return (
      <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top">
            <div className="colA-2">
            <div className="outer-wrapper">
  <div className="s-wrap s-type-1" role="slider">
    <input type="radio" id="s-5" name="slider-control" checked="checked" swipe></input>
    <input type="radio" id="s-4" name="slider-control" checked="checked"></input>
    <input type="radio" id="s-3" name="slider-control" checked="checked"></input>
    <input type="radio" id="s-2" name="slider-control" checked="checked"></input>
    <input type="radio" id="s-1" name="slider-control" checked="checked"></input>
    <ul className="s-content">
      <li className="s-item s-item-1"><img src={product.image} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}></img></li>
      <li className="s-item s-item-2"><img src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}></img></li>
      <li className="s-item s-item-3"><img src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}></img></li>
      <li className="s-item s-item-4"><img src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}></img></li>
      <li className="s-item s-item-5"><img src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}></img></li>
    </ul>
  </div>
  </div>
  </div>
            <div className="col-11">
              <ul>
                <li>
             <h82>Visit Amimon Offer Store</h82>
                <p>
                  <h93>{product.name}</h93>
                  </p>
                  <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <div className="mrp1">Price:<del1>Rs.{product.mrp}</del1></div>
                <ul>
                    <div className = "mrp1">Offer Price: <ins1>Rs.{product.price}</ins1>
                    <div className="mrp1">You Save: <ins1>Rs.{product.mrp-product.price} </ins1>({product.discount}%)</div>
                  <h82>(Inclusive of all taxes)</h82>                    
                     </div>
                </ul>
                <h5>FREE DELIVERY ON ALL ORDERS ABOVE Rs.499!!</h5>
                </li>
                <div className="col-7A">
              <div className="card-mobile2 card-mobile2-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div style={{marginRight: '100px'}}>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <div>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <Select
                              style={{width: '5rem', fontSize: '2rem', marginRight: '100px'}}
                              inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <MenuItem key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </div>
                        </div>
                      </li>                       
                    </div>
                  )}
                </ul>
                
              </div>
            </div>
            <div className="desc21">Product Details</div>
                 <p> <h21> Brand:  {product.brand}</h21></p>
                <p> <h21>Country of Origin: {product.countr}</h21></p>
                <p><h21>Manufacturer: {product.manufacturer}</h21></p>
                <div className="desc21">About this Item</div>
                &nbsp;   
                <div className="desc2A1">
                  <p>{product.description}</p>
               </div>
                  <div className="desc21">Specifications</div>
                     <ul class="asterisk">
                <div className="desc2A1">
                     <li>COLOUR: {product.colour}</li>
                     <li>ITEM WEIGHT: {product.itemweight}</li>
                     <li>MANUFACTURER: {product.manufacturer}</li>
                     <li>PRODUCT DIMENSIONS : {product.productdimensions}</li>
                     <li>DEPARTMENT: {product.category}</li>
                     <li>CONTENT: {product.inbox}</li>
                     <li>ADDITIONAL INFO: {product.additionalfeatures}</li>
                    </div>
                   </ul>
                    </ul>
                    </div>
                    </div>
          <div>
            <h2 id="reviews">Reviews</h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="forma" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <Select
                        style={{width: 200,fontSize: '15px'}}
                        inputProps={{ style: { height: 19, width: 10, fontSize: '15px', border: 'none' } }}
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <MenuItem value="">Select...</MenuItem>
                        <MenuItem value="1">1- Poor</MenuItem>
                        <MenuItem value="2">2- Fair</MenuItem>
                        <MenuItem value="3">3- Good</MenuItem>
                        <MenuItem value="4">4- Very good</MenuItem>
                        <MenuItem value="5">5- Excelent</MenuItem>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="submit" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
              <button
                onClick={addToCartHandler}
                className="cart2"
              >
                ADD TO CART
              </button>
              <button
                onClick={addToCartHandler}
                className="buy"
              >
                BUY NOW
              </button>
          </div>
        </div>
      )}
    </div>
    )
  }
  
 if (!product || product.category == 'Atta and Flour' ||
     !product || product.category == 'Sanitizers and Handwashes' ||
     !product || product.category == 'Masalas and Spices' ||
     !product || product.category == 'Rice and Rice Products' ||
     !product || product.category == 'Dals and Pulses' ||
     !product || product.category == 'Oil and Ghee' ||
     !product || product.category == 'Sugar,Jaggery and Salt' ||
     !product || product.category == 'Papads and Cooking Pastes' ||
     !product || product.category == 'Noodles and Soojis' ||
     !product || product.category == 'Cooking and Baking Products' ||
     !product || product.category == 'Milk and Milk Products' ||
     !product || product.category == 'Beverages' ||
     !product || product.category == 'Ready to Eat Foods' ||
     !product || product.category == 'Jams and Spreads' ||
     !product || product.category == 'Dry Fruits and Snacks' ||
     !product || product.category == 'Breakfast Essentials' ||
     !product || product.category == 'Ketchups and Sauces' ||
     !product || product.category == 'Health Mixes' ||
     !product || product.category == 'Puja Articles' ||
     !product || product.category == 'Oral Care Products' ||
     !product || product.category == 'Bathroom and Toilet Cleaners' ||
     !product || product.category == 'Air Freshners' ||
     !product || product.category == 'Detergents and Washing' ||
     !product || product.category == 'Bathing Soaps and Brushes' ||
     !product || product.category == 'Oral Care Products' ||
     !product || product.category == 'Biscuits and Cakes' ||
     !product || product.category == 'Namkeen and Chips' ||
     !product || product.category == 'Chocolates and Sweets'
     ) {
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/"><h44>Home</h44></Link>
        <h44>&nbsp; &gt; &nbsp;{product.category}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.brand}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.name}</h44>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image2)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image2)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image1)}}/>
</div>
          </div>
          <a className="float" href='https://api.whatsapp.com/send?text=Aloha!'>
           <i class="fa fa-whatsapp my-float"></i></a>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="mrp">You Save: <ins>Rs.{product.mrp-product.price}
                   </ins>({(product.mrp-product.price)/product.mrp *100}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
               <div>
                  <div>
                    <ul>
                      <li>
                        <div className="row">
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success">In Stock</span>
                            ) : (
                              <span className="danger">Out of Stock</span>
                            )}
                          </div>
                        </div>
                      </li>
                  
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            style={{fontSize: '15px'}}
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="carter"
                      >
                      <i class="fa fa-shopping-cart fa-1.5x"></i>&nbsp;&nbsp;&nbsp;Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Tabs value={value} onChange={handleValue}>
          <Tab style={{fontSize:"15px"}} label="Description" />
          <Tab style={{fontSize:"15px"}} label="Details" />
          <Tab style={{fontSize:"15px"}} label="Legal Disclaimer" />
        </Tabs>
        <TabPanel value={value} index={0}><h7>{product.description}</h7></TabPanel>
        <TabPanel value={value} index={1}> 
                     <ul class="asterisk">
                <div className="desc2W">
                <div className="item_desc">BRAND: <div className="item_desc1">{product.brand}</div></div>
                <div className="item_desc">COUNTRY OF ORIGIN: <div className="item_desc1">{product.countr}</div></div>
                <div className="item_desc">MANUFACTURER: <div className="item_desc1">{product.manufacturer}</div></div>
                    </div>
                   </ul>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h7>While we work to ensure that product information is correct, on occasion manufacturers may alter their ingredient lists. Actual product packaging and materials may contain more and/or different information than that shown on our web site. We recommend that you do not solely rely on the information presented and that you always read labels, warnings, and directions before using or consuming a product. For additional information about a product, please contact the manufacturer.</h7>
          </TabPanel>
                  </ul>
                  </ul>
                  <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      inputProps={{ style: { height: 19, width: 10, fontSize: '15px', border: 'none' } }}
                      style={{width: 300,fontSize: '15px'}}
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem style={{fontSize: '15px'}} value="">Select...</MenuItem>
                      <MenuItem style={{fontSize: '15px'}} value="1">1- Poor</MenuItem>
                      <MenuItem style={{fontSize: '15px'}} value="2">2- Fair</MenuItem>
                      <MenuItem style={{fontSize: '15px'}} value="3">3- Good</MenuItem>
                      <MenuItem style={{fontSize: '15px'}} value="4">4- Very good</MenuItem>
                      <MenuItem style={{fontSize: '15px'}} value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
        </div>
        </div>
      </div>
      <div className="container1">
	<input type="radio" id="m5" name="images1" checked hidden/>
	<input type="radio" id="m2" name="images1" checked hidden/>
	<input type="radio" id="m3" name="images1" checked hidden/>
	<input type="radio" id="m4" name="images1" checked hidden/>
	<input type="radio" id="m1" name="images1" checked hidden/>	
  <div className="text5">Snacks, Chocolates and Sweets </div>
	<div className="slide1_img" id="oone">			
      <a href="http://amimon.in/product/6093f5839eba6e21ac45e5b7"><img src="/imagees/cri1.jpg"></img></a>
      <a href="http://amimon.in/product/6093f7649eba6e21ac45e5b9"><img src="/imagees/he1.jpg"></img></a>
      <a href="http://amimon.in/product/609d61596b9cfe2dd876d4a1"><img src="/imagees/hon2.jpg"></img></a>
      <a href="http://amimon.in/product/60c6d2a096ef9518500310af"><img src="/imagees/bingo1.jpg"></img></a>
      <a href="http://amimon.in/product/60a9399d95f46027d4fbf5e5"><img src="/imagees/0102_df2.jpg"></img></a>
				<label className="next1" for="m2"><span>&#x203a;</span></label>	
				<label className="prev1" for="m2"><span>&#x2039;</span></label>	
	</div>
	<div className="slide1_img" id="ttwo">
      <a href="http://amimon.in/product/6093d3789eba6e21ac45e5aa"><img src="/imagees/c1.jpg"></img></a>
      <a href="http://amimon.in/product/6093f9f09eba6e21ac45e5bc"><img src="/imagees/go1.jpg"></img></a>
      <a href="http://amimon.in/product/609401869eba6e21ac45e5c1"><img src="/imagees/p1.jpg"></img></a>
      <a href="http://amimon.in/product/60c6cae996ef9518500310ae"><img src="/imagees/namkeen1.jpg"></img></a>
      <a href="http://amimon.in/product/60a9342795f46027d4fbf5e2"><img src="/imagees/0102_or1.jpg"></img></a>
				<label className="prev1" for="m1"><span>&#x2039;</span></label>
				<label className="next1" for="m1"><span>&#x203a;</span></label>
	</div>
</div>
<div className="container2">
	<input type="radio" id="a5" name="images2" checked hidden/>
	<input type="radio" id="a2" name="images2" checked hidden/>
	<input type="radio" id="a3" name="images2" checked hidden/>
	<input type="radio" id="a4" name="images2" checked hidden/>
	<input type="radio" id="a1" name="images2" checked hidden/>	
  <div className="text5">Customer who viewed this product also viewed..</div>
	<div className="slide2_img" id="onne">			
      <a href="http://amimon.in/product/609e56812fb0801a04bba34b"><img src="/imagees/nimyle1.jpg"></img></a>
      <a href="http://amimon.in/product/609c162ee2ef50279496e0c6"><img src="/imagees/mama.jpg"></img></a>
      <a href="http://amimon.in/product/60c63db5033fc53bf8384962"><img src="/kitchen/so_de_01.jpg"></img></a>
      <a href="http://amimon.in/product/60c6d2a096ef9518500310af"><img src="/imagees/tid1.jpg"></img></a>
      <a href="http://amimon.in/product/609e48c02fb0801a04bba342"><img src="/imagees/vim1.jpg"></img></a>
				<label className="next1" for="a2"><span>&#x203a;</span></label>	
				<label className="prev1" for="a2"><span>&#x2039;</span></label>	
	</div>
	<div className="slide2_img" id="twwo">
      <a href="http://amimon.in/product/609e547d2fb0801a04bba349"><img src="/imagees/harpic1.jpg"></img></a>
      <a href="http://amimon.in/product/609c0d68e2ef50279496e0c3"><img src="/imagees/odo.jpg"></img></a>
      <a href="http://amimon.in/product/609e52662fb0801a04bba347"><img src="/imagees/domex.jpg"></img></a>
      <a href="http://amimon.in/product/609c149be2ef50279496e0c5"><img src="/imagees/dap.jpg"></img></a>
      <a href="http://amimon.in/product/609bd676c59fab1be4a2b339"><img src="/imagees/harp.jpg"></img></a>
				<label className="prev1" for="a1"><span>&#x2039;</span></label>
				<label className="next1" for="a1"><span>&#x203a;</span></label>
	</div>
</div>
  </div>
    )}
  </div>
  );
}
 function TabPanel(props)
 {
 const {children,value,index} = props;

   return(
     <div>
        {
          value===index && (
            <p>{children}</p>
          )
        }
     </div>
   )
 }

if (!product || product.category == 'Lunch Boxes, Bottles and Flasks' ||
    !product || product.category == 'Kitchen Cookware and Utensils' ||
    !product || product.category == 'Tableware and Dinnerware' ||
    !product || product.category == 'Kitchen Storages and Boxes' ||
    !product || product.category == 'Kitchen Appliances (Large and Small)' ||
    !product || product.category == 'Knives, Choppers and Cutters' ||
    !product || product.category == 'Kitchen Decors' ||
    !product || product.category == 'Cooking Tools' ||
    !product || product.category == 'Kitchen Drainers, Cleaning and Storages' ||
    !product || product.category == 'Kids Study Chairs and Tables' ||
    !product || product.category == 'Kids Shoe Racks' ||
    !product || product.category == 'Kids Beds and Pillows' ||
    !product || product.category == 'Kids toys' ||
    !product || product.category == 'Pillows and Covers' ||
    !product || product.category == 'Rugs and Carpets' ||
    !product || product.category == 'Cupboards and Shelves' ||
    !product || product.category == 'Side Tables and Lamps' ||
    !product || product.category == 'Beds and Comforters' ||
    !product || product.category == 'Lighings and Hangings' ||
    !product || product.category == 'Bathroom Stands and Holders' ||
    !product || product.category == 'Sofas and Furnitures' ||
    !product || product.category == 'Tv Units' ||
    !product || product.category == 'Chairs and Tables' ||
    !product || product.category == 'Wallpapers and Paints' ||
    !product || product.category == 'Recliners and Rockchairs' ||
    !product || product.category == 'Home Decors' ||
    !product || product.category == 'Toys and Games' 

  ) {
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/"><h44>Home</h44></Link>
        <h44>&nbsp; &gt; &nbsp;{product.category}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.brand}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.name}</h44>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
          </div>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="mrp">You Save: <ins>Rs.{product.mrp-product.price} </ins>({product.discount}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
                
                   <div>
            <div>
              <ul>
                <li>
                  <div className="row">
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
            
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="carter"
                      >
                      <i class="fa fa-shopping-cart fa-1.5x"></i>&nbsp;&nbsp;&nbsp;Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Tabs value={value} onChange={handleValue}>
          <Tab style={{fontSize:"15px"}} label="Description" />
          <Tab style={{fontSize:"15px"}} label="Details" />
        </Tabs>
        <TabPanel value={value} index={0}><h7>{product.description}</h7></TabPanel>
        <TabPanel value={value} index={1}> 
                <div className="desc2W">
                <div className="item_desc">BRAND: <div className="item_desc1">{product.brand}</div></div>
                <div className="item_desc">COUNTRY OF ORIGIN: <div className="item_desc1">{product.countr}</div></div>
                <div className="item_desc">MANUFACTURER: <div className="item_desc1">{product.manufacturer}</div></div>
                <div className="item_desc">PRODUCT DIMENSIONS: <div className="item_desc1">{product.productdimensions}</div></div>
                <div className="item_desc">ITEM WEIGHT: <div className="item_desc1">{product.itemweight}</div></div>
                <div className="item_desc">ADDITIONAL INFO: <div className="item_desc1">{product.additionalfeatures}</div></div>
                <div className="item_desc">IN THE BOX: <div className="item_desc1">{product.inbox}</div></div>
                <div className="item_desc">DEPARTMENT: <div className="item_desc1">{product.category}</div></div>
                    </div>
          </TabPanel>
                  </ul>
                  </ul>
                  </div>
        </div>
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      style={{width: 300,fontSize: '15px'}}
                      inputProps={{ style: { height: 19, width: 10, fontSize: '15px', border: 'none' } }}
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1">1- Poor</MenuItem>
                      <MenuItem value="2">2- Fair</MenuItem>
                      <MenuItem value="3">3- Good</MenuItem>
                      <MenuItem value="4">4- Very good</MenuItem>
                      <MenuItem value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
  </div>
    )}
  </div>
  );
}
 function TabPanel(props)
 {
 const {children,value,index} = props;

   return(
     <div>
        {
          value===index && (
            <p>{children}</p>
          )
        }
     </div>
   )
}


if (!product || product.category == 'Camera' ||
    !product || product.category == 'Smart Watches and Bands' ||
    !product || product.category == 'Mobiles' ||
    !product || product.category == 'Tablets' ||
    !product || product.category == 'Laptops and Computers') {
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/"><h44>Home</h44></Link>
        <h44>&nbsp; &gt; &nbsp;{product.category}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.brand}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.name}</h44>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
          </div>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="mrp">You Save: <ins>Rs.{product.mrp-product.price} </ins>({product.discount}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
                
                   <div>
            <div>
              <ul>
                <li>
                  <div className="row">
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
            
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="carter"
                      >
                      <i class="fa fa-shopping-cart fa-1.5x"></i>&nbsp;&nbsp;&nbsp;Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Tabs value={value} onChange={handleValue}>
          <Tab style={{fontSize:"15px"}} label="Description" />
          <Tab style={{fontSize:"15px"}} label="Details" />
          <Tab style={{fontSize:"15px"}} label="Technical Details" />
        </Tabs>
        <TabPanel value={value} index={0}><h7>{product.description}</h7></TabPanel>
        <TabPanel value={value} index={1}> 
                <div className="desc2W">
                <div className="item_desc">BRAND: <div className="item_desc1">{product.brand}</div></div>
                <div className="item_desc">COUNTRY OF ORIGIN: <div className="item_desc1">{product.countr}</div></div>
                <div className="item_desc">MANUFACTURER: <div className="item_desc1">{product.manufacturer}</div></div>
                <div className="item_desc">PRODUCT DIMENSIONS: <div className="item_desc1">{product.productdimensions}</div></div>
                <div className="item_desc">ITEM WEIGHT: <div className="item_desc1">{product.itemweight}</div></div>
                <div className="item_desc">ADDITIONAL INFO: <div className="item_desc1">{product.additionalfeatures}</div></div>
                <div className="item_desc">IN THE BOX: <div className="item_desc1">{product.inbox}</div></div>
                <div className="item_desc">DEPARTMENT: <div className="item_desc1">{product.category}</div></div>
                <div className="item_desc">ITEM NUMBER: <div className="item_desc1">{product.itemnumber}</div></div>
                <div className="item_desc">ADDITIONAL FEATURES: <div className="item_desc1">{product.additionalfeatures}</div></div>
                    </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="desc2W">
          <div className="item_desc">COLOUR: <div className="item_desc1">{product.colour}</div></div>
          <div className="item_desc">RESOLUTION: <div className="item_desc1">{product.resolution}</div></div>
          <div className="item_desc">MEMORY: <div className="item_desc1">{product.memory}</div></div>
          <div className="item_desc">OS: <div className="item_desc1">{product.os}</div></div>
          <div className="item_desc">CAMERA: <div className="item_desc1">{product.camera}</div></div>
          <div className="item_desc">BATTERY AND POWER: <div className="item_desc1">{product.battery}</div></div>
          <div className="item_desc">WARRANTY: <div className="item_desc1">{product.warranty}</div></div>
          </div>
          </TabPanel>
                  </ul>
                  </ul>
                  </div>
        </div>
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      style={{width: 300,fontSize: '15px'}}
                      inputProps={{ style: { height: 19, width: 10, fontSize: '15px', border: 'none' } }}
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1">1- Poor</MenuItem>
                      <MenuItem value="2">2- Fair</MenuItem>
                      <MenuItem value="3">3- Good</MenuItem>
                      <MenuItem value="4">4- Very good</MenuItem>
                      <MenuItem value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
  </div>
    )}
  </div>
  );
}

if (!product || product.category == 'Storage Devices' ||
!product || product.category == 'Television' ||
!product || product.category == 'Home Entertainment Systems' ||
!product || product.category == 'Airconditioners' ||
!product || product.category == 'Mixer Grinders' || 
!product || product.category == 'Washing Machines' ||
!product || product.category == 'Heating and Cooling Appliances' ||
!product || product.category == 'Laptops and Computer Accessories' ||
!product || product.category == 'Mobile Accessories') {
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/"><h44>Home</h44></Link>
        <h44>&nbsp; &gt; &nbsp;{product.category}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.brand}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.name}</h44>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
          </div>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="mrp">You Save: <ins>Rs.{product.mrp-product.price} </ins>({product.discount}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
                
                   <div>
            <div>
              <ul>
                <li>
                  <div className="row">
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
            
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="carter"
                      >
                      <i class="fa fa-shopping-cart fa-1.5x"></i>&nbsp;&nbsp;&nbsp;Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Tabs value={value} onChange={handleValue}>
          <Tab style={{fontSize:"15px"}} label="Description" />
          <Tab style={{fontSize:"15px"}} label="General Details" />
          <Tab style={{fontSize:"15px"}} label="Additional Details" />
        </Tabs>
        <TabPanel value={value} index={0}><h7>{product.description}</h7></TabPanel>
        <TabPanel value={value} index={1}> 
            <div className="desc2W">
           <div className="item_desc">BRAND: <div className="item_desc1">{product.brand}</div></div>
           <div className="item_desc">COUNTRY OF ORIGIN: <div className="item_desc1">{product.countr}</div></div>
           <div className="item_desc">MANUFACTURER: <div className="item_desc1">{product.manufacturer}</div></div>
           <div className="item_desc">IN THE BOX: <div className="item_desc1">{product.inbox}</div></div>
           <div className="item_desc">DEPARTMENT: <div className="item_desc1">{product.category}</div></div>
          <div className="item_desc">ADDITIONAL FEATURES: <div className="item_desc1">{product.additionalfeatures}</div></div>
                    </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="desc2W">
          <div className="item_desc">ITEM NUMBER: <div className="item_desc1">{product.itemnumber}</div></div>
          <div className="item_desc">ITEM WEIGHT: <div className="item_desc1">{product.itemweight}</div></div>
          <div className="item_desc">PRODUCT DIMENSIONS: <div className="item_desc1">{product.productdimensions}</div></div>
          <div className="item_desc">COLOUR: <div className="item_desc1">{product.colour}</div></div>
          <div className="item_desc">BATTERY AND POWER: <div className="item_desc1">{product.battery}</div></div>
          <div className="item_desc">WARRANTY: <div className="item_desc1">{product.warranty}</div></div>
          <div className="item_desc">ADDITIONAL INFO: <div className="item_desc1">{product.additionalfeatures}</div></div>
          </div>
          </TabPanel>
                  </ul>
                  </ul>
                  </div>
        </div>
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1">1- Poor</MenuItem>
                      <MenuItem value="2">2- Fair</MenuItem>
                      <MenuItem value="3">3- Good</MenuItem>
                      <MenuItem value="4">4- Very good</MenuItem>
                      <MenuItem value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
  </div>
    )}
  </div>
  );
}

if (!product || product.category == 'Headphones and Bluetooths') {
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/"><h44>Home</h44></Link>
        <h44>&nbsp; &gt; &nbsp;{product.category}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.brand}</h44>
        <h44>&nbsp; &gt; &nbsp;{product.name}</h44>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
          </div>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="mrp">You Save: <ins>Rs.{product.mrp-product.price} </ins>({product.discount}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
                
                   <div>
            <div>
              <ul>
                <li>
                  <div className="row">
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </li>
            
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="carter"
                      >
                      <i class="fa fa-shopping-cart fa-1.5x"></i>&nbsp;&nbsp;&nbsp;Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Tabs value={value} onChange={handleValue}>
          <Tab style={{fontSize:"15px"}} label="Description" />
          <Tab style={{fontSize:"15px"}} label="General Details" />
          <Tab style={{fontSize:"15px"}} label="Additional Details" />
        </Tabs>
        <TabPanel value={value} index={0}><h7>{product.description}</h7></TabPanel>
        <TabPanel value={value} index={1}> 
            <div className="desc2W">
           <div className="item_desc">BRAND: <div className="item_desc1">{product.brand}</div></div>
           <div className="item_desc">COUNTRY OF ORIGIN: <div className="item_desc1">{product.countr}</div></div>
           <div className="item_desc">MANUFACTURER: <div className="item_desc1">{product.manufacturer}</div></div>
           <div className="item_desc">ADDITIONAL INFO: <div className="item_desc1">{product.additionalfeatures}</div></div>
           <div className="item_desc">IN THE BOX: <div className="item_desc1">{product.inbox}</div></div>
           <div className="item_desc">DEPARTMENT: <div className="item_desc1">{product.category}</div></div>
          <div className="item_desc">ADDITIONAL FEATURES: <div className="item_desc1">{product.additionalfeatures}</div></div>
                    </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="desc2W">
          <div className="item_desc">ITEM NUMBER: <div className="item_desc1">{product.itemnumber}</div></div>
          <div className="item_desc">ITEM WEIGHT: <div className="item_desc1">{product.itemweight}</div></div>
          <div className="item_desc">PRODUCT DIMENSIONS: <div className="item_desc1">{product.productdimensions}</div></div>
          <div className="item_desc">COLOUR: <div className="item_desc1">{product.colour}</div></div>
          <div className="item_desc">BATTERY AND POWER: <div className="item_desc1">{product.battery}</div></div>
          <div className="item_desc">WARRANTY: <div className="item_desc1">{product.warranty}</div></div>
          </div>
          </TabPanel>
                  </ul>
                  </ul>
                  </div>
        </div>
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1">1- Poor</MenuItem>
                      <MenuItem value="2">2- Fair</MenuItem>
                      <MenuItem value="3">3- Good</MenuItem>
                      <MenuItem value="4">4- Very good</MenuItem>
                      <MenuItem value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
  </div>
    )}
  </div>
  );
}


  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <div className="back">
        <Link to="/">Home</Link>
        <div className="row top">
          <div className="col-2">
          <div id='lens'></div>
          <div id='slideshow-items-container'>
  <img className='slideshow-items active' src={product.image} alt=""/>
  <img className='slideshow-items' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image2} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-items' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div>
<div id='result'></div>
<div className='column'>
  <img className='slideshow-thumbnails active' src={product.image} alt=""/>
  <img className='slideshow-thumbnails' src={product.image1} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image2}  alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image3} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image4} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image5} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
  <img className='slideshow-thumbnails' src={product.image6} alt="" onError={(e)=>{e.target.onerror = null; e.target.src= (product.image)}}/>
</div> </div>
          <div className="col-10">
            <ul>
              <li>
           <h82>Visit Amimon Offer Store</h82>
              <p>
                <h92>{product.name}</h92>
                </p>
                <h2> Brand:  {product.brand}</h2>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </li>
              <div className = "mrp">M.R.P.:<del>Rs.{product.mrp}</del>  </div>
                  <ul>
                  <div className = "mrp">Offer Price: <ins>Rs.{product.price}</ins>
                  <div className="price">You Save: <ins>Rs.{product.mrp-product.price} </ins>({product.discount}%)</div>
                <h82>(Inclusive of all taxes)</h82>                    
                   </div>
                                     
          <div className="col-7">
            <div className="card2 card2-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
            
                <h5>FREE DELIVERY ON ALL ORDERS ABOVE Rs.499!!</h5>
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </div>
                      </div>
                    </li>
            
                       <li>
                      <button
                        onClick={addToCartHandler}
                        className="cart"
                      >
                        Add to Cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
              
            </div>
          </div>

              &nbsp; <h2>Country of Origin: {product.countr}</h2>
              <h2>Manufacturer: {product.manufacturer}</h2>        
                <div className="desc3">Specifications</div>
                   <ul class="asterisk">
                   <li>{product.description1}</li>
                 </ul>
                  </ul>
                  </ul>
                  </div>
        </div>
        <div className="desc2">About this Item</div>
              &nbsp;   
              <div className="desc2A">
                <p>{product.description}</p>
             </div>
          
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
          <ul>
            {product.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Write a customer review</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <Select
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="1">1- Poor</MenuItem>
                      <MenuItem value="2">2- Fair</MenuItem>
                      <MenuItem value="3">3- Good</MenuItem>
                      <MenuItem value="4">4- Very good</MenuItem>
                      <MenuItem value="5">5- Excelent</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Please <Link to="/signin">Sign In</Link> to write a review
                </MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
  </div>
    )}
  </div>
  )}


// WEBPACK FOOTER //
// ./src/screens/ProductScreen.js