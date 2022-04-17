import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile
 } from 'react-device-detect';
export default function HomeDecorScreen() {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

 if (isMobile) {
  return ( 
    <div>      
    <div className="hm1">
  <img src="./images/bd.jpg" alt=""/>
  <img src="./images/2.jpg" alt=""/>
    </div>
<h31>KITCHEN &amp; DINING</h31>
    <div className="hm3">
  <a href="/search/category/Lunch Boxes, Bottles and Flasks">
<img src="/images/box.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kitchen Cookware and Utensils">
<img src="/images/ut.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Tableware and Dinnerware">
<img src="/images/dinner.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kitchen Storages and Boxes">
<img src="/images/kit.JPG" alt=""> 
  </img></a>    
  <a href="/search/category/Kitchen Appliances (Large and Small)">
<img src="/images/app.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Knives, Choppers and Cutters">
<img src="/images/cutter.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kitchen Drainers and Storages">
<img src="/images/store.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kitchen Mininatures and Figurines">
<img src="/images/mini.JPG" alt=""> 
  </img></a>
  </div>
  <h31>BEDROOM DECORS</h31>
    <div className="hm3">
  <a href="/search/category/Pillows and Covers">
<img src="/images/PILLOW.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Rugs and Carpets">
<img src="/images/rug.jpg" alt=""> 
  </img></a>
  <a href="/search/category/Cupboards and Shelves">
<img src="/images/cupboard.jpg" alt=""> 
  </img></a>
  <a href="/search/category/Side Tables and Lamps">
<img src="/images/table.JPG" alt=""> 
  </img></a>    
  <a href="/search/category/Beds and Comforters">
<img src="/images/bed.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Lighings and Hangings">
<img src="/images/wall.JPG" alt=""> 
  </img></a>
  </div>
  <h31>LIVINGROOM DECORS</h31>
    <div className="hm3">
  <a href="/search/category/Sofas and Furnitures">
<img src="/images/sofa.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Tv Units">
<img src="/images/tv.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Chairs and Tables">
<img src="/images/chair.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Wallpapers and Paints">
<img src="/images/paper.JPG" alt=""> 
  </img></a>    
  <a href="/search/category/Recliners and Rockchairs">
<img src="/images/chair2.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Decorative Toys and Figurines">
<img src="/images/live.JPG" alt=""> 
  </img></a>
  </div>
  <h31>KIDZ' SHOP ZONE</h31>
    <div className="hm3">
  <a href="/search/category/Kids Study Chairs and Tables">
<img src="/images/chair3.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kids Shoe Racks">
<img src="/images/rack.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kids Book Racks">
<img src="/images/rack2.JPG" alt=""> 
  </img></a>
  <a href="/search/category/Kids Beds and Pillows">
<img src="/images/bed2.JPG" alt=""> 
  </img></a>    
  <a href="/search/category/Kids toys">
<img src="/images/TOYS2.JPG" alt=""> 
  </img></a>
  </div>
</div>
     );
 }

    return ( 
        <div>      
        <div className="hm1A">
      <img src="./images/bd.jpg" alt=""/>
      <img src="./images/2.jpg" alt=""/>
        </div>
    <h31>KITCHEN &amp; DINING</h31>
        <div className="hm3A">
      <a href="/search/category/Lunch Boxes, Bottles and Flasks">
    <img src="/images/box.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kitchen Cookware and Utensils">
    <img src="/images/ut.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Tableware and Dinnerware">
    <img src="/images/dinner.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kitchen Storages and Boxes">
    <img src="/images/kit.JPG" alt=""> 
      </img></a>    
      <a href="/search/category/Kitchen Appliances (Large and Small)">
    <img src="/images/app.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Knives, Choppers and Cutters">
    <img src="/images/cutter.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kitchen Drainers and Storages">
    <img src="/images/store.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kitchen Mininatures and Figurines">
    <img src="/images/mini.JPG" alt=""> 
      </img></a>
      </div>
      <h31>BEDROOM DECORS</h31>
        <div className="hm3A">
      <a href="/search/category/Pillows and Covers">
    <img src="/images/PILLOW.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Rugs and Carpets">
    <img src="/images/rug.jpg" alt=""> 
      </img></a>
      <a href="/search/category/Cupboards and Shelves">
    <img src="/images/cupboard.jpg" alt=""> 
      </img></a>
      <a href="/search/category/Side Tables and Lamps">
    <img src="/images/table.JPG" alt=""> 
      </img></a>    
      <a href="/search/category/Beds and Comforters">
    <img src="/images/bed.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Lighings and Hangings">
    <img src="/images/wall.JPG" alt=""> 
      </img></a>
      </div>
      <h31>LIVINGROOM DECORS</h31>
        <div className="hm3A">
      <a href="/search/category/Sofas and Furnitures">
    <img src="/images/sofa.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Tv Units">
    <img src="/images/tv.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Chairs and Tables">
    <img src="/images/chair.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Wallpapers and Paints">
    <img src="/images/paper.JPG" alt=""> 
      </img></a>    
      <a href="/search/category/Recliners and Rockchairs">
    <img src="/images/chair2.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Decorative Toys and Figurines">
    <img src="/images/live.JPG" alt=""> 
      </img></a>
      </div>
      <h31>KIDZ' SHOP ZONE</h31>
        <div className="hm3A">
      <a href="/search/category/Kids Study Chairs and Tables">
    <img src="/images/chair3.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kids Shoe Racks">
    <img src="/images/rack.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kids Book Racks">
    <img src="/images/rack2.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Kids Beds and Pillows">
    <img src="/images/bed2.JPG" alt=""> 
      </img></a>    
      <a href="/search/category/Kids toys">
    <img src="/images/TOYS2.JPG" alt=""> 
      </img></a>
      </div>
    </div>
         );
}


// WEBPACK FOOTER //
// ./src/screens/HomeDecorScreen.js