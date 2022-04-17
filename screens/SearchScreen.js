import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Product2 from '../components/Product2';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils';
import {
  isMobile
} from "react-device-detect";
import Checkbox from '@material-ui/core/Checkbox';

export default function SearchScreen(props) {
  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
    pageNumber = 1,
  } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  if (isMobile) {
    return (
      <div>
      <div className="row-3">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div 
          style={{marginTop: '1%',fontSize:'12px'}}
          >{products.length} Results</div>
        )}
       <div>
          <select
            style={{marginTop: '1%', width: '50%',fontSize:'13px'}}
            value={order}
            onChange={(e) => {
              props.history.push(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </div>
      </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row centerA">
                {products.map((product) => (
                  <Product2 key={product._id} product={product}></Product2>
                ))}
              </div>
              <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /*****************DESKTOP VIEW*******************/
  if (window.location.href.indexOf("http://localhost:3000/search/category/Masalas%20and%20Spices") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Sanitizers%20and%20Handwashes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Atta%20and%20Flour") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Rice%20and%20Rice%20Products") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Dals%20and%20Pulses") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Oil%20and%20Ghee") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Sugar,Jaggery%20and%20Salt") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Papads%20and%20Cooking%20Pastes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Noodles%20and%20Soojis") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Cooking%20and%20Baking%20Products") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Milk%20and%20Milk%20Products") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Beverages") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Dry%20Fruits%20and%20Snacks") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Breakfast%20Essentials") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Ketchups%20and%20Sauces") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Health%20Mixes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Oral%20Care%20Products") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Bathroom%20and%20Toilet%20Cleaners") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Air%20Freshners") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Detergents%20and%20Washing") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Bathing%20Soaps%20and%20Brushes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Oral%20Care%20Products") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Biscuits%20and%20Cakes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Namkeen%20and%20Chips") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Chocolates%20and%20Sweets") > -1 
  )
  {
    return (
      <div className="back">
      <Link to="/"><h46>Home</h46></Link> 
      <div>
        <div className="row-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>{products.length} Results</div>
          )}
         <div>
            Sort by{' '}
            <select
              value={order}
              onChange={(e) => {
                props.history.push(getFilterUrl({ order: e.target.value }));
              }}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
              <option value="toprated">Avg. Customer Reviews</option>
            </select>
          </div>
        </div>
        <div className="row top">
          <div className="row-5">
          <div>
              <h14>Avg. Customer Review</h14>
              <ul>
                {ratings.map((r) => (
                  <li key={r.name}>
                    <Link
                      to={getFilterUrl({ rating: r.rating })}
                      className={`${r.rating}` === `${rating}` ? 'active' : ''}
                    >
                      <Rating caption={' & Up'} rating={r.rating}></Rating>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="b_brand">
              <div className="bb_brand">GROCERIES</div>
            <p><a href="http://localhost:3000/search/name/everest">Everest</a></p>
            <p><a href="http://localhost:3000/search/name/kohinoor">Kohinoor</a></p>
            <p><a href="http://localhost:3000/search/name/Aashirvaad">Aashirvaad</a></p>
            <p><a href="http://localhost:3000/search/name/naga">Naga</a></p>
            <p><a href="http://localhost:3000/search/name/Pillsbury">Pillsbury</a></p>
            <p><a href="http://localhost:3000/search/name/mtr">MTR</a></p>
            <p><a href="http://localhost:3000/search/name/24%20mantra">24 Mantra</a></p>
            <p><a href="http://localhost:3000/search/name/india%20gate">India Gate</a></p>
            <p><a href="http://localhost:3000/search/name/tata">Tata</a></p>
            <p><a href="http://localhost:3000/search/name/milky%20mist">Milky Mist</a></p>
            <p><a href="http://localhost:3000/search/name/Bru">Bru</a></p>
            <p><a href="http://localhost:3000/search/name/Maggi">Maggi</a></p>
            </div>
            <div>
              <h3>Price</h3>
              <ul>
                {prices.map((p) => (
                  <li key={p.name}>
                    <Link
                      to={getFilterUrl({ min: p.min, max: p.max })}
                      className={
                        `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                      }
                    >
                    <h45>{p.name}</h45>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="b_brand">
              <div className="bb_brand">TOP BRANDS ON HOUSEHOLD & CLEANING</div>
              <p><a href="http://localhost:3000/search/name/Lizol">Lizol</a></p>
          <p><a href="http://localhost:3000/search/name/Dettol">Dettol</a></p>
          <p><a href="http://localhost:3000/search/name/Odonil">Odonil</a></p>
          <p><a href="http://localhost:3000/search/name/Harpic">Harpic</a></p>
          <p><a href="http://localhost:3000/search/name/Dabur">Dabur</a></p>
              </div>

              <div className="b_brand">
              <div className="bb_brand">SNACKS AND SWEETS</div>
              <p><a href="http://localhost:3000/search/name/dairy%20milk">Dairy Milk</a></p>
          <p><a href="http://localhost:3000/search/name/Ferrero%20Rocher">Ferroro Rocher</a></p>
              </div>
          </div>
       
          <div className="col-3">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div>
                {products.length === 0 && (
                  <MessageBox>No Product Found</MessageBox>
                )}
                <div className="row center">
                  {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </div>
                <div className="row center pagination">
                  {[...Array(pages).keys()].map((x) => (
                    <Link
                      className={x + 1 === page ? 'active' : ''}
                      key={x + 1}
                      to={getFilterUrl({ page: x + 1 })}
                    >
                      {x + 1}
                    </Link>
                  ))}
                </div>
              </div>
            )}
        </div>
          </div>
        </div>
        </div>
    );
  }


  if (window.location.href.indexOf("http://localhost:3000/search/category/Lunch%20Boxes,%20Bottles%20and%20Flasks") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Kitchen%20Cookware%20and%20Utensils") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Tableware%20and%20Dinnerware") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Kitchen%20Storages%20and%20Boxes") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Kitchen%20Appliances%20(Large%20and%20Small)") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Knives,%20Choppers%20and%20Cutters") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Cooking%20Tools") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Kitchen%20Drainers,%20Cleaning%20and%20Storages") > -1 ||
  window.location.href.indexOf("http://localhost:3000/search/category/Kids%20Study%20Chairs%20and%20Tables") > -1
  )
  {
    return (
      <div className="back">
      <Link to="/"><h46>Home</h46></Link> 
      <div>
        <div className="row-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>{products.length} Results</div>
          )}
         <div>
            Sort by{' '}
            <select
              value={order}
              onChange={(e) => {
                props.history.push(getFilterUrl({ order: e.target.value }));
              }}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
              <option value="toprated">Avg. Customer Reviews</option>
            </select>
          </div>
        </div>
        <div className="row top">
          <div className="row-5">
          <div>
              <h3>Avg. Customer Review</h3>
              <ul>
                {ratings.map((r) => (
                  <li key={r.name}>
                    <Link
                      to={getFilterUrl({ rating: r.rating })}
                      className={`${r.rating}` === `${rating}` ? 'active' : ''}
                    >
                      <Rating caption={' & Up'} rating={r.rating}></Rating>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Price</h3>
              <ul>
                {prices.map((p) => (
                  <li key={p.name}>
                    <Link
                      to={getFilterUrl({ min: p.min, max: p.max })}
                      className={
                        `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                      }
                    >
                    <h45>{p.name}</h45>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
            <input type="checkbox" className="check"/>Include Pay On Delivery
            </div>
            <div>
            <input type="checkbox" className="check"/>Assured by Amimon
            </div>
          <div className="b_brand">
          <h14>Top Brands in Kitchen</h14>
            <p><a href="http://localhost:3000/search/name/milton">Milton</a></p>
            <p><a href="http://localhost:3000/search/name/pigeon">Pigeon</a></p>
            <p><a href="http://localhost:3000/search/name/ganesh">Ganesh</a></p>
            <p><a href="http://localhost:3000/search/name/butterfly">Butterfly</a></p>
          </div>
          
          </div>
       
          <div className="col-3">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div>
                {products.length === 0 && (
                  <MessageBox>No Product Found</MessageBox>
                )}
                <div className="row center">
                  {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </div>
                <div className="row center pagination">
                  {[...Array(pages).keys()].map((x) => (
                    <Link
                      className={x + 1 === page ? 'active' : ''}
                      key={x + 1}
                      to={getFilterUrl({ page: x + 1 })}
                    >
                      {x + 1}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
    );
  }


  return (
    <div className="back">
    <Link to="/"><h46>Home</h46></Link> 
    <div>
      <div className="row-3">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products.length} Results</div>
        )}
       <div>
          Sort by{' '}
          <select
            value={order}
            onChange={(e) => {
              props.history.push(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </div>
      </div>
      <div className="row top">
        <div className="row-5">
         
          <div>
            <h3>Price</h3>
            <ul>
              {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    to={getFilterUrl({ min: p.min, max: p.max })}
                    className={
                      `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                    }
                  >
                  <h45>{p.name}</h45>
                </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
          <input type="checkbox" className="check"/>Include Pay On Delivery
          </div>
          <div>
          <input type="checkbox" className="check"/>Amimon Assured
          </div>
          <div>
            <h3>Avg. Customer Review</h3>
            <ul>
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? 'active' : ''}
                  >
                    <Rating caption={' & Up'} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
     
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      </div>
  );
}




// WEBPACK FOOTER //
// ./src/screens/SearchScreen.js