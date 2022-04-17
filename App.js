import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderListScreen1 from './screens/OrderListScreen1';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchBox1 from './components/SearchBox1';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import MapScreen from './screens/MapScreen';
import MenzScreen from './screens/MenzScreen';
import LadiezScreen from './screens/LadiezScreen';
import KidzScreen from './screens/KidzScreen';
import MobilesScreen from './screens/MobilesScreen';
import GroScreen from './screens/GroScreen';
import HomeDecorScreen from './screens/HomeDecorScreen';
import TvScreen from './screens/TvScreen';
import {isMobile} from "react-device-detect";
import SellerInfo from './screens/SellerInfo';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

/************Mobile View  ************/

  if (isMobile) {
    return(
      <div> 
       <BrowserRouter>
          <div className="grid-container1">
          <header className="row_MM">
          <div>
          <Link className="brand1" to="/">
          <img src="/OFFERS/Amimon_logo1.jpg"></img>
            </Link>   
          </div>  
          <Link to="/cart" style={{color: "#fff"}}>
<Link to="/profile" style={{color: "#000"}}><i class="fa fa-user-circle fa-2x" style={{color: "#fff"}}></i></Link>

<i className="fa fa-shopping-cart fa-2x"></i>
{cartItems.length > 0 && (
  <span className="badge1">{cartItems.length}</span>
)}
</Link> 
{userInfo ? (
          <div style={{fontSize: "12px"}}>
            <Link to="#">
           Hi {userInfo.name}{' '}!
          </Link>
          </div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
<Route
render={({ history }) => (
  <SearchBox1 history={history}></SearchBox1>
)}
></Route>

      </header>  
         
        <main>
          <Route path="/Groceries" component={GroScreen}></Route>
          <Route path="/SellerInfo" component={SellerInfo}></Route>
          <Route path="/Mobiles" component={MobilesScreen}></Route>
          <Route path="/Tv" component={TvScreen}></Route>
          <Route path="/Home" component={HomeDecorScreen}></Route>
          <Route path="/Kidz" component={KidzScreen}></Route>
          <Route path="/Ladiez" component={LadiezScreen}></Route>
          <Route path="/Menz" component={MenzScreen}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit"component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>  
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
           
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen1}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        </div>
    </BrowserRouter>
</div>
    )
}

/************Desktop View ************/
  return (
   
    <BrowserRouter>
          <div className="grid-container">
          <header className="row">
            <Link className="brand" to="/">
            <img src="/OFFERS/Amimon_logo.jpg"></img>
            </Link>              
           <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div className="row">
          <div>
          <Link to="/orderhistory">Your Orders</Link>
          </div>
          <div>
          <Link to="/profile">Profile</Link>
          </div>
          <div className="cart">
          <Link to="/cart">
          <i class="fa fa-shopping-cart fa-2x"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

            </div>
            {userInfo ? (
              <div className="dropdown">
                 
                 <p>
                 <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                 </p>
                <ul className="dropdown-content">
                
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
             </div>
             <div className="mp-box mp-box-white notop mp-cat-list-curated js-cat-list-curated">
  <div className="box-row"><ul className="main-cat-list js-main-cat-list cf active">
  <li className="">
        <a href="/Groceries">GROCERIES</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
             <div className="text4">Cooking Essentials</div>
             <li><a href="/search/category/Atta and Flour">Atta &amp; Flour</a></li>
             <li><a href="/search/category/Masalas and Spices">Masalas &amp; Spices</a></li>
             <li><a href="/search/category/Rice and Rice Products">Rice &amp; Rice Products</a></li>
             <li><a href="/search/category/Dals and Pulses">Dals &amp; Pulses</a></li>
             <li><a href="/search/category/Oil and Ghee">Oil &amp; Ghee</a></li>
             <li><a href="/search/category/Sugar,Jaggery and Salt">Sugar, Jaggery &amp; Salt</a></li>
             <li><a href="/search/category/Papads and Cooking Pastes">Papads &amp; Cooking Pastes</a></li>
             <li><a href="/search/category/Noodles and Soojis">Noodles &amp; Soojis</a></li>
             <li><a href="/search/category/Cooking and Baking Products">Cooking &amp; Baking Products</a></li>
             <li><a href="/search/category/Milk and Milk Products">Milk &amp; Milk Products</a></li>
            </ul>
            <ul>
             <div className="text4">Packaged Foods</div>
             <li><a href="/search/category/Beverages">Beverages</a></li>
             <li><a href="/search/category/Ready to Eat Foods">Ready to Eat Foods</a></li>
             <li><a href="/search/category/Jams and Spreads">Jams &amp; Spreads</a></li>
             <li><a href="/search/category/Dry Fruits and Snacks">Dry Fruits &amp; Snacks</a></li>
              <li><a href="/search/category/Breakfast Essentials">Breakfast Essentials</a></li>
              <li><a href="/search/category/Ketchups and Sauces">Ketchups &amp; Sauces</a></li>
              <li><a href="/search/category/Health Mixes">Health Mixes</a></li>
              <a href="/search/category/Puja Articles"><div className="text4">Puja Articles</div></a>
              <a href="/search/category/Oral Care Products"><div className="text4">Oral Care</div></a>
            </ul>
            <ul>
             <div className="text4">Household and Cleaning</div>
             <li><a href="/search/category/Bathroom and Toilet Cleaners">Bathroom &amp; Toilet Cleaners</a></li>
            <li><a href="/search/category/Sanitizers and Handwashes">Sanitizers &amp; Handwashes</a></li>
            <li><a href="/search/category/Air Freshners">Air Freshners</a></li>
            <li><a href="/search/category/Detergents and Washing">Detergents &amp; Washing</a></li>
            <li><a href="/search/category/Bathing Soaps and Brushes">Bathing Soaps &amp; Brushes</a></li>
            <li><a href="/search/category/Oral Care Products">Oral Care Products</a></li>
            <div className="text4">Snacks &amp; Namkeens</div>
            <li><a href="/search/category/Biscuits and Cakes">Biscuits &amp; Cakes</a></li>
            <li><a href="/search/category/Namkeen and Chips">Namkeen &amp; Chips</a></li>
            <li><a href="/search/category/Chocolates and Sweets">Chocolates &amp; Sweets</a></li>            
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Menz" data-gtm-action="homepage-dropdown-click"  data-gtm-label="graphics-design" data-title="Graphics &amp; Design">MENZ' ZONE</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
            <div className="text5A">Men's Clothing</div>
              <li><a href="/search/category/Shirts for Men">Shirts</a></li>
              <li><a href="/search/category/T-Shirts for Men">T-Shirts</a></li>
              <li><a href="/search/category/Shorts for Men" >Shorts</a></li>
              <li><a href="/search/category/Pants for Men">Pants</a></li>
              <li><a href="/search/category/Formal Shirts and T-Shirts for Men">Formal Shirts &amp; T-Shirts for Men</a></li>
              <li><a href="/search/category/Sweaters and Sweashirts for Men">Sweaters and Sweashirts</a></li>
              <div className="text5A">SleepWear, ActiveWear & InnerWear</div>
              <li><a href="/search/category/Innerwears for Men">Innerwears for Men</a></li>
              <li><a href="/search/category/Activewear for Men">Activewear for Men</a></li>
            <li><a href="/search/category/Sleepwear for Men">Sleepwear</a></li>
            </ul>
            <ul>
           <div className="text5A">Fashion Accessories</div>
              <li><a href="/search/category/Perfumes for Men">Perfumes</a></li>
              <li><a href="/search/category/Watches for Men">Watches</a></li>
              <li><a href="/search/category/Belts and Wallets">Belts and Wallets</a></li>
              <li><a href="/search/category/Umbrellas">Wallets and Purses</a></li>
              <li><a href="/search/category/Fashion Bags for Men">Fashion Bags</a></li>
              <li><a href="/search/category/Bracelets and Rings for Men">Bracelets and Rings</a></li>
           <div className="text5A">Occassional Wears</div>
           <li><a href="/search/category/Sherwanis and Nehru Jackets for Men">Sherwanis and Nehru Jackets</a></li>
           <li><a href="/search/category/Kurtas and Kurta sets for Men">Kurtas and Kurta sets</a></li>
           <li><a href="/search/category/Jackets and Blazers for Men">Jackets and Blazers</a></li>
           <li><a href="/search/category/Coat and Suits for Men">Coat and Suits for Men</a></li>
           <li><a href="/search/category/Dhotis for Men">Dhotis</a></li>
           </ul>
           <ul>
           <div className="text5A">RideWears</div>
              <li><a href="/search/category/Gaiters, Scarfs and Gloves">Gaiters, Scarfs and Gloves</a></li>
              <li><a href="/search/category/Ties and Chuffclinks for Men">Ties and Chuffclinks</a></li>
              <li><a href="/search/category/Footwear and Socks Men">Footwear and Socks Men</a></li>
              <li><a href="/search/category/Personal Care products for Men">Personal Care products</a></li>
              <li><a href="/search/category/Eyewear for Men">Umbrellas</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Ladiez" data-gtm-action="homepage-dropdown-click"  data-gtm-label="online-marketing" data-title="Digital Marketing">LADIEZ' ZONE</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
           <div className="text5B">Casual Dresses</div>
              <li><a href="/search/category/Jumpsuits for Women">Jumpsuits</a></li>
              <li><a href="/search/category/Tops and Tees">Tops &amp; Tees</a></li>
              <li><a href="/search/category/Women Casual Wear">Casual Wear</a></li>
            <li><a href="/search/category/Salwars and Churidars for Women">Salwars &amp; Chudidhars</a></li>
              <li><a href="/search/category/Kurtis, Kurtas and Tunics">Kurta, Kurti &amp; Tunics</a></li>
              <li><a href="/search/category/Sweatsuits and Jackets for Women">Sweatsuits &amp; Jackets</a></li>
              <li><a href="/search/category/Sarees for Women">Sarees</a></li>
            <div className="text5B">Bottoms</div>
              <li><a href="/search/category/Skirts,Palazzo and Patialas">Skirts, Palazzos &amp; Patialas</a></li>
              <li><a href="/search/category/Pants for Women">Pants</a></li>
              <li><a href="/search/category/Jeans and Jeggings">Jeans &amp; Jeggings</a></li>
            </ul>
            <ul>
              <div className="text5B">Fashion Accessories</div>
              <li><a href="/search/category/Shawls and Dupattas">Shawls &amp; Dupattas</a></li>
              <li><a href="/search/category/Scarfs,Belts and Shrugs for Women">Scarfs, Belts and Shrugs</a></li>
              <li><a href="/search/category/Jewellery for Women">Jewellery</a></li>
              <li><a href="/search/category/Fashion Bags for Women">Fashion Bags</a></li>
              <li><a href="/search/category/Purses and Wallets for Women">Purses &amp; Wallets</a></li>
              <li><a href="/search/category/Hair Accessories for Women">Hair Accessories</a></li>
              <li><a href="/search/category/Eyewear for Women">Eyewear</a></li>
              <li><a href="/search/category/Watches for Women">Watches</a></li>
             <li><a href="/search/category/Makeup and Beauty Products">Makeup &amp; Beauty Products</a></li>          
              <li><a href="/search/category/Umbrellas">Umbrellas</a></li>
              <li><a href="/search/category/Shoes for Women">Shoes</a></li>
              <li><a href="/search/category/Perfumes for Women">Perfumes</a></li>
              </ul>
              <ul>
              <div className="text5B">Activewear & Nightwear</div>
              <li><a href="/search/category/Activewear for Women">Activewear</a></li>
              <li><a href="/search/category/Lingerie &amp; Nightwear">Lingerie &amp; Nightwear</a></li>
              <li><a href="/search/category/Shapewear for Women">Shapewear for Women</a></li>
              <div className="text5B">Occassional & Partywears</div>
              <li><a href="/search/category/Women Formal wear">Formal Wear</a></li>
              <li><a href="/search/category/Lehengas and Cholis">Lehengas &amp; Cholis</a></li>
              </ul>
          </div>
        </div>
      </li>
      <li className=" ">
        <a href="/Kidz" data-gtm-action="homepage-dropdown-click"  data-gtm-label="writing-translation" data-title="Writing &amp; Translation">KIDZ' ZONE</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
              <li><a href="/search/category/Kids Stationery Items" className="text5C">
                <div className="text5C">Stationery Items</div></a></li>
                <li><a href="/search/category/Toys and Games" className="text5C">
                <div className="text5C">Toys &amp; Games</div></a></li>
                <div className="text5C">Kids Clothing</div>
              <li><a href="/search/category/Girls Pants">Girls Pants</a></li>
              <li><a href="/search/category/Boys Pants">Boys Pants</a></li>
              <li><a href="/search/category/Girls Ethnic Wear">Girls Ethnic Wear</a></li>
              <li><a href="/search/category/Boys Ethnic Wear">Boys Ethnic Wear</a></li>
              <li><a href="/search/category/Girls Casual and Western Wear">Girls Casual & Western Wear</a></li>
              <li><a href="/search/category/Boys Casual and Western Wear">Boys Casual & Western Wear</a></li>           
            </ul>
            <ul>
            <div className="text5C">Kids Fashion Accessories</div>
              <li><a href="/search/category/Kids Essentials">Kids Essentials</a></li>
              <li><a href="/search/category/Fashion Bags for Girls">Fashion Bags for Girls</a></li>
              <li><a href="/search/category/Fashion Bags for Boys">Fashion Bags for Boys</a></li>
              <li><a href="/search/category/Gifts for Kids">Gifts for Kids</a></li>
              <li><a href="/search/category/Girls Footwear">Footwear for Girls</a></li>
              <li><a href="/search/category/Kids Watches">Watches for Kids</a></li>
              <li><a href="/search/category/Kids Jewellery">Jewellery for Kids</a></li>
              <li><a href="/search/category/Footwear for Girls">Footwear for Girls</a></li>
              <li><a href="/search/category/Boys Footwear">Footwear for Boys</a></li>
              <div className="text5C">Kids Innerwears & Activewears</div>
            <li><a href="/search/category/Boys Innerwear and Sleepwear">Innerwears & Sleepwears for Boys</a></li>
            <li><a href="/search/category/Boys Activewear">Activewears for Boys</a></li>
            <li><a href="/search/category/Girls Innerwear and Sleepwear">Innerwears & Sleepwears for Girls</a></li>
            <li><a href="/search/category/Girls Activewear">Activewears for Girls</a></li>
            </ul>
          </div>
        </div>
      </li>

      <li className=" ">
        <a href="/Home" data-gtm-action="homepage-dropdown-click"  data-gtm-label="video-animation" data-title="Video &amp; Animation">HOME DECOR</a>
        <div className="unnecessary-firefox-wrapper">
          <div className="menu-cont">
            <ul>
             <div className="text5D">Kitchen &amp; Dining</div>
              <li><a href="/search/category/Lunch Boxes, Bottles and Flasks">Lunch Boxes, Bottles and Flasks</a></li>
              <li><a href="/search/category/Kitchen Cookware and Utensils">Kitchen Cookware and Utensils</a></li>
              <li><a href="/search/category/Tableware and Dinnerware">Tableware and Dinnerware</a></li>
              <li><a href="/search/category/Kitchen Storages and Boxes">Kitchen Storages and Boxes</a></li>
              <li><a href="/search/category/Kitchen Appliances (Large and Small)">Kitchen Appliances (Large and Small)</a></li>
              <li><a href="/search/category/Knives, Choppers and Cutters">Knives, Choppers and Cutters</a></li>
              <li><a href="/search/category/Cooking Tools">Cooking Tools</a></li>
              <li><a href="/search/category/Kitchen Drainers, Cleaning and Storages">Kitchen Drainers, Cleaning and Storages</a></li>
              <div className="text5D">Kidz' Shop Zone</div>
              <li><a href="/search/category/Kids Study Chairs and Tables">Kids Study Chairs and Tables</a></li>
              <li><a href="/search/category/Kids Shoe Racks">Kids Shoe Racks</a></li>
              <li><a href="/search/category/Kids Book Racks">Kids Book Racks</a></li>
              <li><a href="/search/category/Kids Beds and Pillows">Kids Beds and Pillows</a></li>
              <li><a href="/search/category/Kids toys">Kids toys</a></li>
            </ul>
            <ul>
             <div className="text5D">Bedroom Decors</div>
              <li><a href="/search/category/Pillows and Covers">Pillows and Covers</a></li>
              <li><a href="/search/category/Rugs and Carpets">Rugs and Carpets</a></li>
              <li><a href="/search/category/Cupboards and Shelves">Cupboards and Shelves</a></li>
              <li><a href="/search/category/Side Tables and Lamps">Side Tables and Lamps</a></li>
              <li><a href="/search/category/Beds and Comforters">Beds and Comforters</a></li>
              <li><a href="/search/category/Lighings and Hangings">Lighings and Hangings</a></li>
              <li><a href="/search/category/Bathroom Stands and Holders"   >Bathroom Stands &amp; Holders</a></li> 
              <div className="text5D">Living room Decors</div>
              <li><a href="/search/category/Sofas and Furnitures">Sofas and Furnitures</a></li>
              <li><a href="/search/category/Tv Units">Tv Units</a></li>
              <li><a href="/search/category/Chairs and Tables">Chairs and Tables</a></li>
              <li><a href="/search/category/Wallpapers and Paints">Wallpapers and Paints</a></li>
              <li><a href="/search/category/Recliners and Rockchairs">Recliners and Rockchairs</a></li>
              <li><a href="/search/category/Small decors">Small decors</a></li>
              </ul>
          </div>
        </div>
      </li>
    <li className=" ">
      <a href="/Tv" data-gtm-action="homepage-dropdown-click"  data-gtm-label="music-audio" data-title="Music &amp; Audio">MOBILES &amp; ELECTRONICS</a>
      <div className="unnecessary-firefox-wrapper">
        <div className="menu-cont">
          <ul>
            <div className="text5E">Home Appliances and Electronics</div>
            <li><a href="/search/category/Television">Televisions</a></li>
            <li><a href="/search/category/Home Entertainment Systems">Home Entertainment Systems</a></li>
            <li><a href="/search/category/Airconditioners">Air Conditioners</a></li>
            <li><a href="/search/category/Mixer Grinders">Mixer Grinders</a></li>
            <li><a href="/search/category/Refrigerators">Refrigerators</a></li>
            <li><a href="/search/category/Heating and Cooling Appliances">Heating and Cooling Appliances</a></li>
            <li><a href="/search/category/Washing Machines">Washing Machines</a></li>
            <div className="text5E">Mobiles, Camera Accessories</div>
            <li><a href="/search/category/CAMERA ACCESSORIES">Camera Accessories</a></li>     
            <li><a href="/search/category/Laptops and Computer Accessories">Laptop &amp; Computer Accessories</a></li>
            <li><a href="/search/category/Mobile Accessories">Mobiles Accessories</a></li>
            <div className="text5E">Mobiles, Laptops, etc..</div>
            <li><a href="/search/category/Mobiles">Mobiles</a></li>
            <li><a href="/search/category/Storage Devices">Storage Devices</a></li>  
            <li><a href="/search/category/Camera">Cameras</a></li>
            <li><a href="/search/category/Smart Watches and Bands">Smart Watches &amp; Bands</a></li>
            <li><a href="/search/category/Tablets">Tablets</a></li>
            <li><a href="/search/category/Laptops and Computers">Laptops &amp; Computers</a></li>
            <a href="/search/category/Headphones and Bluetooths"><div className="text5E">Headphones & Bluetooths</div></a>
          </ul>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>
      </header>  
        <main>
          <Route path="/Groceries" component={GroScreen}></Route>
          <Route path="/SellerInfo" component={SellerInfo}></Route>
          <Route path="/Mobiles" component={MobilesScreen}></Route>
          <Route path="/Tv" component={TvScreen}></Route>
          <Route path="/Home" component={HomeDecorScreen}></Route>
          <Route path="/Kidz" component={KidzScreen}></Route>
          <Route path="/Ladiez" component={LadiezScreen}></Route>
          <Route path="/Menz" component={MenzScreen}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit"component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>  
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
            
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen1}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        </div>
    </BrowserRouter>
  );
}
export default App; 


// WEBPACK FOOTER //
// ./src/App.js