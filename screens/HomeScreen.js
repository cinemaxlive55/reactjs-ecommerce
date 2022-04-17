import React, { useEffect } from 'react';
import Product from '../components/Product';
import Product2 from '../components/Product2';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile } from 'react-device-detect';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(signout());
  };
var pos = 0;
var totalSlides = $('#slider-wrap ul li').length;
var sliderWidth = $('#slider-wrap').width();
$(document).ready(function(){
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);	
	$('#next1').click(function(){
		slideRight();
	});
	$('#prev1').click(function(){
		slideLeft();
	});
	var autoSlider = setInterval(slideRight, 5000);
	$.each($('#slider-wrap ul li'), function() { 
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	countSlides();
	pagination();
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 5000); }
	);
});
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	countSlides();
	pagination();
}
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	countSlides();
	pagination();
}
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}
function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
		
if (isMobile) {
  return ( 
    <div>
<div class="slide">
  <a href="/Groceries"><img src="/slider/gro1.JPG" alt=""></img></a>
  <a href="/Menz"><img src="/slider/men1.JPG" alt=""></img></a>
  <a href="/Ladiez"><img src="/slider/lady1.JPG" alt=""></img></a>
  <a href="/Kidz"><img src="/slider/kid.JPG" alt=""></img></a>
  <a href="/Home"><img src="/slider/home.JPG" alt=""></img></a>
  <a href="/Tv"><img src="/slider/electronics.JPG" alt=""></img></a>
</div>
<div>
  <img className="banner" src="/OFFERS/banner.jpeg"></img>
</div> 
<div className="car2B-img"><img src="/slider/Watch.png"></img></div>
<div className="card2_Mobile-homebig">
    <div className="text5">STATIONERY ITEMS FOR YOU | CLICK HERE TO KNOW THE</div>
  <a href="/search/category/Sarees for Women"><img src="/OFFERS/stationery.JPG" alt="" /></a>
</div>
    <div className="car2B-img"><img src="/slider/Groceries.png"></img></div>
    <div className="row-card-mobile-home">
<div className="card2_Mobile-homebig">
    <div className="text5">ELECTONICS, GADGETS, COMPUTER ACCESSORIES,ETC.. | UPTO 75% OFF</div>
  <a href="/search/category/Sarees for Women"><img src="/OFFERS/garden.JPG" alt="" /></a>
</div>
</div>
    <h50>All your Cosmetics @50% Off</h50>
  <div className="car2A-img"><img src="/slider/Cosmetics.jpg"></img></div>
  <div className="row-card-mobile-home">
  <div className="card-mobile-home">
  <div className="text5">Oximeters, Masks &amp; others from Rs.99</div>
  <a href="/search/category/Oximeters"><img src="/files/oximeter.JPG" alt="" /></a>
  <div className="card1-mobile-home">
  <a href="/search/category/Masks"><img src="/files/masks.JPG" alt="" /></a>
  <a href="/search/category/Sanitizers"><img src="/files/sanitizers.JPG" alt="" /></a>
</div>
</div>

<div>  
  <img className="banner2" src="/OFFERS/grocery_banner1.jpg"></img>
</div>
<div className="banner1">
  <img src="/OFFERS/aashirvadh_banner.jpeg"></img>
  <img src="/OFFERS/proteinpowder.jpeg"></img>
</div>
<div class="slide1">
<img src="/slider/GROCERIES.jpg" alt=""></img>
<img src="/slider/GROCERIES1.jpg" alt=""></img>
<img src="/slider/GROCERIES2.jpg" alt=""></img>
</div>
<div className="slide">
<img src="/slider/GROCERIES3.jpg" alt=""></img>
<img src="/slider/GROCERIES4.jpg" alt=""></img>
<img src="/slider/GROCERIES5.jpg" alt=""></img>
  </div>
<div className="car2B-img"><img src="/slider/footwear_w.png"></img></div>
<div className="card-mobile-home">
    <div className="text5">Yoga Mats, Foods &amp; etc @Rs.29</div>
  <a href="/search/category/Yoga Essentials"><img src="/files/yoga1.JPG" alt="" /></a>
  <div className="card1-mobile-home">
  <a href="/search/category/Breakfast Essentials"><img src="/files/yoga3.JPG" alt="" /></a>
  <a href="/search/category/Bottles and Containers"><img src="/files/yoga2.JPG" alt="" /></a>
</div>
</div>
<a href="/Groceries"><img src="/files/groceries.png" className="banner"></img></a>
<div className="card-mobile-home">
    <div className="text5">Beverages, snacks & more.. @ your doorstep</div>
  <div className="card1-mobile-home">
  <a href="/search/category/Beverages"><img src="/files/beverages.JPG" alt="" /></a>
  <a href="/search/category/Namkeen and Chips"><img src="/files/SNACKS.JPG" alt="" /></a>
  <a href="/search/category/Chocolates and Sweets"><img src="/files/chocolates.JPG" alt="" /></a>
  <a href="/search/category/Jams and Spreads"><img src="/files/jam.JPG" alt="" /></a>
</div>
<a href="/Groceries"><div className="text6">See More..</div></a>
</div>
</div>
      <div className="combo-card-mobile-home">
    <div className="text5">Combo Offers | Save more on top products / Your Groceries</div>
  <a href="https://amimon.in/product/60c6d2a096ef9518500310af"><img src="/imagees/bingo1.jpg" alt="" /></a>
  <a href="https://amimon.in/product/609d03c36b9cfe2dd876d482"><img src="/imagees/devaaya1.jpg" alt="" /></a>
  <a href="https://amimon.in/product/6094240d9eba6e21ac45e5cd"><img src="/imagees/aas1.jpg" alt="" /></a>
  <a href="https://amimon.in/product/6092b40ef88f4629447fe9b3"><img src="/imagees/2A.jpeg" alt="" /></a>
  <a href="https://amimon.in/product/6092c27c5e575c215cf0b06f"><img src="/imagees/2h.jpeg" alt="" /></a>
</div>
<div className="card-mobile-home">
    <div className="text5">Bathroom Cleaning &amp; household</div>
  <div className="card1-mobile-home">
  <a href="/search/category/Bathroom and Toilet Cleaners"><img src="/files/jam1.JPG" alt="" /></a>
  <a href="/search/category/Detergents and Washing"><img src="/files/detergent.JPG" alt="" /></a>
  <a href="/search/category/Oral Care Products"><img src="/files/oral.JPG" alt="" /></a>
  <a href="/search/category/Air Freshners"><img src="/files/air.JPG" alt="" /></a>
</div>
<a href="/Groceries"><div className="text6">See More..</div></a>
</div>
<div className="car2B-img"><img src="/slider//stationery1.png"></img></div>
<div className="combo1-card-mobile-home">
    <div className="text5">safety first | best deals on safety masks, santizers, etc..</div>
  <a href="/search/category/Oximeters"><img src="/files/oximeter1.png" alt="" /></a>
  <a href="/search/category/Handwashes"><img src="/files/handwash.png" alt="" /></a>
  <a href="/search/category/Masks"><img src="/files/masks1.png" alt="" /></a>
  <a href="/search/category/Steamers"><img src="/files/steamer.png" alt="" /></a>
  <a href="/search/category/Sanitizers"><img src="/files/dettol.png" alt="" /></a>
</div>
<div className="row-card-mobile-home">
  <div className="card2_Mobile-home">
    <div className="text5">Personal Care Zone | Upto 70% off</div>
  <a href="/search/category/Women Organic Skin-Care Products"><img src="/files/women1.JPG" alt="" /></a>
  <a href="/search/category/Women Self-Care Products"><img src="/files/women.JPG" alt="" /></a>
  <a href="/search/category/Men Organics Skin-Care Products"><img src="/files/men.JPG" alt="" /></a>
  <a href="/search/category/Men Self-Care Products"><img src="/files/men1.JPG" alt="" /></a>
</div>
<div className="card2_Mobile-home">
    <div className="text5">Baby &amp; Pet Products | Upto 35% Off</div>
  <a href="/search/category/Baby Care Products"><img src="/files/baby2.JPG" alt="" /></a>
  <a href="/search/category/Baby Diapers and Wipes"><img src="/files/baby1.JPG" alt="" /></a>
  <a href="/search/category/Baby Foods"><img src="/files/baby3.JPG" alt="" /></a>
  <a href="/search/category/Pet Foods"><img src="/files/pets.JPG" alt="" /></a>
</div>
</div>
<div className="row-card-mobile-home">
  <div className="card2_Mobile-home">
    <div className="text5">ELECTONICS, GADGETS, COMPUTER ACCESSORIES,ETC.. | UPTO 75% OFF</div>
  <a href="/search/category/Sarees for Women"><img src="/OFFERS/smartwatch.JPG" alt="" /></a>
  <a href="/search/category/Watches for Women"><img src="/OFFERS/laptop.JPG" alt="" /></a>
  <a href="/search/category/Jewellery for Women"><img src="/OFFERS/bluetooth.JPG" alt="" /></a>
  <a href="/search/category/Kurtis, Kurtas and Tunics"><img src="/OFFERS/mouse.JPG" alt="" /></a>
</div>
  </div>
<div class="slide1">
<div className="text5">WOMENZ' ZONE</div>
<a href="/search/category/Sarees for Women"><img src="/files/saree1.JPG" alt="" /></a>
  <a href="/search/category/Watches for Women"><img src="/files/watches.JPG" alt="" /></a>
  <a href="/search/category/Jewellery for Women"><img src="/files/jewellery.JPG" alt="" /></a>
</div>
<div className="slide">
<div className="text5">MEN'S FASHION & TRAVEL BAGS</div>
<a href="/search/category/Watches for Men"><img src="/files/men_watch.JPG" alt="" /></a>
  <a href="/search/category/Footwear and Socks Men"><img src="/files/men_footwear.JPG" alt="" /></a>
  <a href="/search/category/Fashion Bags for Men"><img src="/files/men_travel_bags_001.JPG" alt="" /></a>
  </div>
  <div className="settings">  
{userInfo && userInfo.isSeller && (
        <div>
          <Link to="#admin">
          <h8>Seller</h8><i className="fa fa-caret-down" style={{color: "#000"}}></i>
          </Link>
              <Link to="/productlist/seller" style={{color: "rgb(110, 110, 110)", marginLeft: "2rem"}}>Products</Link>
              <Link to="/orderlist/seller" style={{color: "rgb(110, 110, 110)", marginLeft: "2rem"}}>Orders</Link>
        </div>
      )}
      {userInfo && userInfo.isAdmin && (
        <div>
          <Link to="#admin"></Link>
              <Link to="/productlist" style={{color: "rgb(110, 110, 110)", marginLeft: "5rem"}}>Products</Link>
              <Link to="/orderlist" style={{color: "rgb(110, 110, 110)", marginLeft: "3rem"}}>Orders</Link>
              <Link to="/userlist" style={{color: "rgb(110, 110, 110)", marginLeft: "3rem"}}>Users</Link>
        </div>
      )}
<Link to="/orderhistory" style={{color: "rgb(110, 110, 110)", marginLeft: "5rem"}}>Your Orders</Link>
<Link to="#signout" style={{color: "rgb(110, 110, 110)", marginLeft: "4rem"}} onClick={signoutHandler}>Sign Out</Link>
    </div>  
  <h17o>Featured Products</h17o>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product2 key={product._id} product={product}></Product2>
            ))}
          </div>
        </div>
      )}
  </div>
   
    );
  }

  /**************DESKTOP VIEW**************/
 return ( 
<div>
<div className="wrapperr">    
<img src="/slider/Groceries.png"></img>
</div>
    <div>
      <img className="banner" src="/OFFERS/banner.jpeg"></img>
    </div>   
    <div className="delivery">
<img src="/OFFERS/delivery2.jpeg"></img>
</div>

      <div className="background2">
    <div className="row1-card-home">
  <div className="card2-home">
    <div className="text5">WOMEN'S FASHION ZONE | UPTO 75% OFF</div>
  <a href="/search/category/Sarees for Women"><img src="/files/saree1.JPG" alt="" /></a>
  <a href="/search/category/Watches for Women"><img src="/files/watches.JPG" alt="" /></a>
  <a href="/search/category/Jewellery for Women"><img src="/files/jewellery.JPG" alt="" /></a>
  <a href="/search/category/Kurtis, Kurtas and Tunics"><img src="/files/kurti.JPG" alt="" /></a>
</div>
<div className="card2-home">
    <div className="text5">MEN'S FASHION ZONE | SHOP THE BEST  | UPTO 75% OFF</div>
  <a href="/search/category/Watches for Men"><img src="/files/men_watch.JPG" alt="" /></a>
  <a href="/search/category/Footwear and Socks Men"><img src="/files/men_footwear.JPG" alt="" /></a>
  <a href="/search/category/Fashion Bags for Men"><img src="/files/men_travel_bags_001.JPG" alt="" /></a>
  <a href="/search/category/Shirts for Men"><img src="/files/men_casual_shirts_&_t-shirts_001.JPG" alt="" /></a>
</div>
<div className="card2-home">
    <div className="text5">KIDS STATION | Upto 35% Off</div>
  <a href="/search/category/Girls Casual and Western Wear"><img src="/files/girls_kids_casual_western_dress_GKCSWD0001.JPG" alt="" /></a>
  <a href="/search/category/Boys Casual and Western Wear"><img src="/files/boys_kids_casual_western_dress_GKCSWD0001.JPG" alt="" /></a>
  <a href="/search/category/Kids Watches"><img src="/files/kids_watches_KW001.JPG" alt="" /></a>
  <a href="/search/category/Kids Stationery Items"><img src="/files/kids_stationery_items_KSI001.JPG" alt="" /></a>
</div>
</div>
  <div className="car2-img">
  <a href="/search/category/Covid-19 Combo Packs"><img src="/files/covid.png"></img></a>
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
  <div className="text5">Household and Cleaning Essentials...</div>
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

    <div className="row-card-home">
    <div className="card-home">
    <div className="text5">Oximeters, Masks &amp; others from Rs.99</div>
  <a href="/search/category/Oximeters"><img src="/files/oximeter.JPG" alt="" /></a>
  <div className="card1-home">
  <a href="/search/category/Masks and Faceshields"><img src="/files/masks.JPG" alt="" /></a>
  <a href="/search/category/Sanitizers and Handwashes"><img src="/files/sanitizers.JPG" alt="" /></a>
</div>
</div>
<div className="card-home">
    <div className="text5">Yoga Mats, Foods &amp; etc @Rs.29</div>
  <a href="/search/category/Yoga Essentials"><img src="/files/yoga1.JPG" alt="" /></a>
  <div className="card1-home">
  <a href="/search/category/Breakfast Essentials"><img src="/files/yoga3.JPG" alt="" /></a>
  <a href="/search/category/Bolltes and Containers"><img src="/files/yoga2.JPG" alt="" /></a>
</div>
</div>
<div className="card-home">
    <div className="text5">Beverages, snacks & more.. @ your doorstep</div>
  <div className="card1-home">
  <a href="/search/category/Beverages"><img src="/files/beverages.JPG" alt="" /></a>
  <a href="/search/category/Namkeen and Chips"><img src="/files/SNACKS.JPG" alt="" /></a>
  <a href="/search/category/Chocolates and Sweets"><img src="/files/chocolates.JPG" alt="" /></a>
  <a href="/search/category/Jams and Spreads"><img src="/files/jam.JPG" alt="" /></a>
</div>
</div>
</div>
<div className="car3-img">
<a href="/Groceries"><img src="/files/groceries.png"></img></a>
</div>
<div className="row-card-home">
<div className="card2-homebig">
    <div className="text5">GARDEN DECOR | BEAUTIFY YOUR GARDEN @ ONLY Rs.9</div>
  <a href="/search/category/Decorative Toys and Figurines"><img src="/OFFERS/garden.JPG" alt="" /></a>
  <div className="text5">A beautiful Garden is the work of Heart..</div>
</div>
<div className="card2-home">
    <div className="text5">ELECTONICS, GADGETS, COMPUTER ACCESSORIES,ETC.. | UPTO 75% OFF</div>
  <a href="/search/category/Smart Watches and Bands"><img src="/OFFERS/smartwatch.JPG" alt="" /></a>
  <a href="/search/category/Laptops and Computers"><img src="/OFFERS/laptop.JPG" alt="" /></a>
  <a href="/search/category/Headphones and Bluetooths"><img src="/OFFERS/bluetooth.JPG" alt="" /></a>
  <a href="/search/category/Laptops and Computer Accessories"><img src="/OFFERS/mouse.JPG" alt="" /></a>
</div>
<div className="card2-homebig">
    <div className="text5">STATIONERY ITEMS FOR YOU | CLICK HERE TO KNOW THE</div>
  <a href="/search/category/Kids Stationery Items"><img src="/OFFERS/stationery.JPG" alt="" /></a>
</div>
</div>
      <div className="container3">
	<input type="radio" id="b5" name="images3" checked hidden/>
	<input type="radio" id="b2" name="images3" checked hidden/>
	<input type="radio" id="b3" name="images3" checked hidden/>
	<input type="radio" id="b4" name="images3" checked hidden/>
	<input type="radio" id="b1" name="images3" checked hidden/>	
  <div className="text5">Kids Toys and games from Rs.9</div>
	<div className="slide3_img" id="onee">			
      <a href="http://amimon.in/product/60ba7c4f2d63961148097851"><img src="/toys/0106_w_17.jpg"></img></a>
      <a href="http://amimon.in/product/60ba78262d63961148097850"><img src="/toys/0106_w_15.jpg"></img></a>
      <a href="http://amimon.in/product/60ba6b8d2d6396114809784d"><img src="/toys/0106_w_9.jpg"></img></a>
      <a href="http://amimon.in/product/60ba6f262d6396114809784e"><img src="/toys/0106_w_11.jpg"></img></a>
      <a href="http://amimon.in/product/60ba68452d6396114809784b"><img src="/toys/0106_w_5.jpg"></img></a>
				<label className="next1" for="b2"><span>&#x203a;</span></label>	
				<label className="prev1" for="b2"><span>&#x2039;</span></label>	
	</div>
	<div className="slide3_img" id="twoo">
      <a href="http://amimon.in/product/60ba2a99a1b2a00838593694"><img src="/toys/0106_w_1.jpg"></img></a>
      <a href="http://amimon.in/product/60ba64872d6396114809784a"><img src="/toys/0106_w_3.jpg"></img></a>
      <a href="http://amimon.in/product/60ba7e482d63961148097852"><img src="/toys/0106_w_19.jpg"></img></a>
      <a href="http://amimon.in/product/60bb1cc8baeda62850c5c484"><img src="/kids/mapp1.jpg"></img></a>
      <a href="http://amimon.in/product/60ba82122d63961148097854"><img src="/toys/0106_w_23.jpg"></img></a>
				<label className="prev1" for="b1"><span>&#x2039;</span></label>
				<label className="next1" for="b1"><span>&#x203a;</span></label>
	</div>
</div>
      <div class="containerr">
	<input type="radio" id="i5" name="images" checked hidden/>
	<input type="radio" id="i2" name="images" checked hidden/>
	<input type="radio" id="i3" name="images" checked hidden/>
	<input type="radio" id="i4" name="images" checked hidden/>
	<input type="radio" id="i1" name="images" checked hidden/>	
  <div className="text5">Covid-19 Protections and Packs</div>
	<div class="slide_img" id="one">			
      <a href="http://amimon.in/product/609c0b50e2ef50279496e0c2"><img src="/slider/mask1.jpg"></img></a>
      <a href="http://amimon.in/product/60c60de4ab909534f4afa5b1"><img src="/slider/shiel.jpg"></img></a>
      <a href="http://amimon.in/product/60c63ded033fc53bf8384966"><img src="/kitchen/sa_li_01.jpg"></img></a>
      <a href="http://amimon.in/product/60c61381ab909534f4afa5b2"><img src="/imagees/bil.jpg"></img></a>
      <a href="http://amimon.in/product/60c61e03ab909534f4afa5b3"><img src="/imagees/oximeter1.jpg"></img></a>
				<label class="next1" for="i2"><span>&#x203a;</span></label>	
				<label class="prev1" for="i2"><span>&#x2039;</span></label>	
	</div>
	<div class="slide_img" id="two">
      <a href="http://amimon.in/product/60c621d0033fc53bf838495e"><img src="/imagees/faceshield1.jpg"></img></a>
      <a href="http://amimon.in/product/60c61381ab909534f4afa5b2"><img src="/covid/maskA1.jpg"></img></a>
      <a href="http://amimon.in/product/60c63dc0033fc53bf8384963"><img src="/kitchen/sa_de_p_01.jpg"></img></a>
      <a href="http://amimon.in/product/60c63dcb033fc53bf8384964"><img src="/kitchen/sa_de_b_01.jpg"></img></a>
      <a href="http://amimon.in/product/60c63dd8033fc53bf8384965"><img src="/kitchen/sa_de_01.jpg"></img></a>
				<label class="prev1" for="i1"><span>&#x2039;</span></label>
				<label class="next1" for="i1"><span>&#x203a;</span></label>
	</div>
</div>

<div className="row1-card-home">
  <div className="card2-home">
    <div className="text5">Personal Care Zone | Upto 70% off</div>
  <a href="/search/category/Women Organic Skin-Care Products"><img src="/files/women1.JPG" alt="" /></a>
  <a href="/search/category/Women Self-Care Products"><img src="/files/women.JPG" alt="" /></a>
  <a href="/search/category/Men Organics Skin-Care Products"><img src="/files/men.JPG" alt="" /></a>
  <a href="/search/category/Men Self-Care Products"><img src="/files/men1.JPG" alt="" /></a>
</div>
<div className="card2-home">
    <div className="text5">Bathroom Cleaning &amp; household</div>
  <a href="/search/category/Bathroom and Toilet Cleaners"><img src="/files/jam1.JPG" alt="" /></a>
  <a href="/search/category/Detergents and Washing"><img src="/files/detergent.JPG" alt="" /></a>
  <a href="/search/category/Oral Care Products"><img src="/files/oral.JPG" alt="" /></a>
  <a href="/search/category/Air Freshners"><img src="/files/air.JPG" alt="" /></a>
</div>
<div className="card2-home">
    <div className="text5">Baby &amp; Pet Products | Upto 35% Off</div>
  <a href="/search/category/Baby Care Products"><img src="/files/baby2.JPG" alt="" /></a>
  <a href="/search/category/Baby Diapers and Wipes"><img src="/files/baby1.JPG" alt="" /></a>
  <a href="/search/category/Baby Foods"><img src="/files/baby3.JPG" alt="" /></a>
  <a href="/search/category/Pet Foods"><img src="/files/pets.JPG" alt="" /></a>
</div>
</div>
</div>
<div className="wrapperr1">
<img src="/slider/footwear_w.png"></img>
</div>
<div className="car1-img">
        <a href="/search/category/Makeup and Beauty Products"><img src="/slider/Cosmetics.jpg"></img></a>
      </div>
      <div>
      <img className="banner2" src="/OFFERS/grocery_banner1.jpg"></img>
    </div>
    <div className="wrapperr1">
<img src="/slider/stationery1.png"></img>
</div>
<div className="banner1">
  <img src="/OFFERS/aashirvadh_banner.jpeg"></img>
  <img src="/OFFERS/proteinpowder.jpeg"></img>
</div>
<div className="wrapperr1">
<img src="/slider/Watch.png"></img>
</div>
      <h17>Featured Products</h17>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
           {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      )}
      <footer class="new_footer_area bg_color">
<h10>WHY SHOP WITH US?</h10>
         <p><h11>Wanna shop Products with High Quality, Low price and quick Delivery? 
           We, the team of Amimon are dedicated in providing World-Class Best Quality Services to our Customers. 
           We deeply concern every feedback and work accordingly that would make our dear Customers satisfied and happy.
           In order to maintain your privacy, we have enabled highest level of security and thus FEEL FREE! Our Costumer support is always under your service and are awaiting to help you out. 
           We also provide door-delivery service ANY WHERE, ANY PLACE, ANY CONDITON. World-class payment options are available so you can feel free to choose your beloved products. 
           Our Easy Return Policies and Exchange Offers are one of the best experiences you could receive from us. 
           Any product purchased will we delivered within 5 Business Days. 
           Our User-Friendly Website can be accessed from ANY PLACE, by ANY AGE and at ANY TIME.
            We are indeed responsible for providing Maximum Offers that are never found anywhere else.</h11></p>
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft">
                                <h13 className="f-title f_600 t_color f__18">TAKE A LOOK AT THIS</h13>
                                <ul className="list-unstyled f_list">
                                    <li><a href="/SellerInfo">SELL ON AMIMON</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft">
                                <h13 className="f-title f_600 t_color f__18">Reach Us at</h13>
                                <div className="f_social_icon">
                                    <a href="https://www.facebook.com/amimonshop" className="fa fa-facebook"></a>
                                    <a href="https://www.linkedin.com/in/lucky-cart-9264a820b/" className="fa fa-linkedin"></a>
                                    <a href="https://www.instagram.com/amimon_shopping/" className="fa fa-instagram"></a>
                                    <a href="https://api.whatsapp.com/send?phone=+919962314578" className="fa fa-whatsapp"></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hii">
                        POPULAR SEARCHES FOR CLOTHING:   
                        <a href="/search/category/Women Shorts and Skirts">Women Shorts and Skirts /</a> 
                        <a href="/search/category/Shawls and Dupattas">Shawls and Dupattas /</a>
                        <a href="/search/category/Shirts for Men"> Shirts for Men /</a>
                        <a href="/search/category/Tops and Tees">Tops and Tees /</a>
                        <a href="/search/category/Belts and Wallets"> Belts and Wallets /</a> 
                        <a href="/search/category/Sleepwear for Men">Sleepwear for Men /</a> 
                        <a href="/search/category/Bracelets and Rings for Men">Bracelets and Rings for Men /</a> 
                        <a href="/search/category/Women Formal wear">Women Formal wear /</a> 
                        <a href="/search/category/T-Shirts for Men">T-Shirts for Men /</a>
                        <a href="/search/category/Women Pants">Women Pants /</a> 
                        <a href="/search/category/Fashion Bags for Men">Fashion Bags for Men /</a> 
                        <a href="/search/category/Fashion Jewellery for Women">Fashion Jewellery for Women /</a> 
                        <a href="/search/category/Shorts for Men">Shorts for Men /</a>
                        <a href="/search/category/Sarees">Sarees /</a> 
                        <a href="/seacrh/category/Sweatsuits and Jackets for Women">Sweatsuits and Jackets for Women  /</a> 
                        <a href="/search/category/Formal Shirts and T-Shirts for Men">Formal Shirts and T-Shirts for Men  /</a>
                        <a href="/search/category/Jumpsuits">Jumpsuits /</a> 
                        <a href="search/category/Fashion Bags for Women">Fashion Bags for Women  /</a> 
                        <a href="/search/category/Pants for Men">Pants for Men  /</a>
                        <a href="/search/category/Coat and Suits for Men">Coat and Suits for Men</a>
                        </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
      </div>
         );
}



// WEBPACK FOOTER //
// ./src/screens/HomeScreen.js