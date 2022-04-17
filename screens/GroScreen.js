import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile } from "react-device-detect";

export default function GroScreen() {
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    if (isMobile) {
      return ( 
        <div>
           <div className="topicA21">GOOD MORNING STORE</div>  
           <div className="groA3">
            <a href="/search/category/Breakfast Essentials">
          <img src="/images/morning.jpg" alt=""> 
           </img></a>
         </div>
         <div className="topicA20">READY TO COOK & EAT FOODS</div>       
               <div className="groA2">
               <a href="/search/category/Ready to Eat Foods">
           <img src="/images/sale12.jpg" alt="">
           </img></a>
           <a href="/search/category/Rice and Rice Products">
           <img src="/images/rice.jpg" alt="">
           </img></a>
         </div>
      <div className="text1">Cooking Essentials</div>
      <div className="carouselAA" data-flickity='{ "groupCells": true, "freeScroll": true, "wrapAround": true }'>
<a href="/search/category/Atta and Flour">
<div className="text3">Atta &amp; Flour</div>
<div className="car-img">
<img src="/imgs/1.JPG" alt="" />
</div>
</a>
<a href="/search/category/Masalas and Spices">
<div className="text3">Masalas &amp; Spices</div>
<div className="car-img">
<img src="/imgs/5.JPG" alt="" /></div>
</a>
<a href="/search/category/Rice and Rice Products">
<div className="text3">Rice &amp; Rice Products</div>
<div className="car-img">
<img src="/imgs/2.JPG" alt="" /></div>
</a>
<a href="/search/category/Dals and Pulses">
<div className="text3">Dals &amp; Pulses</div>
<div className="car-img">
<img src="/imgs/3.JPG" alt="" /></div>
</a>
<a href="/search/category/Oil and Ghee">
<div className="text3">Oil &amp; Ghee</div>
<div className="car-img">
<img src="/imgs/4.JPG" alt="" /></div>
</a>
<a href="/search/category/Sugar,Jaggery and Salt">
<div className="text3">Salt &amp; Sugar</div>
<div className="car-img">
<img src="/imgs/6.JPG" alt="" /></div>
</a>
<a href="/search/category/Masalas and Spices">
<div className="text3">Papads &amp; Cooking Pastes</div>
<div className="car-img">
<img src="/imgs/8.JPG" alt="" /></div>
</a>
<a href="/search/category/Noodles and Soojis">
<div className="text3">Noodles &amp; Soojis</div>
<div className="car-img">
<img src="/imgs/9.JPG" alt="" /></div>
</a>
</div>

<div className="text1">Covid-19 Health Care Products</div>
      <div className="carouselAA" data-flickity='{ "groupCells": true, "freeScroll": true, "wrapAround": true }'>
      <a href="/search/category/Masks">
<div className="text3">Masks</div>
<div className="car-img">
<img src="/files/masks.JPG" alt="" /></div>
</a>
<a href="/search/category/Oximeters">
<div className="text3">Oximeters</div>
<div className="car-img">
<img src="/files/oximeter.JPG" alt="" /></div>
</a>
<a href="/search/category/Sanitizers">
<div className="text3">Sanitizers</div>
<div className="car-img">
<img src="/files/sanitizers.JPG" alt="" /></div>
</a>
<a href="/search/category/Thermometers">
<div className="text3">Thermometers</div>
<div className="car-img">
<img src="/files/thermometer.JPG" alt="" /></div>
</a>
</div>

 <div className="text1">Packaged Foods</div>
      <div className="carouselAA" data-flickity='{ "groupCells": true, "freeScroll": true, "wrapAround": true }'>
<a href="/search/category/Biscuits">
<div className="text3">Biscuits</div>
<div className="car-img">
<img src="/imgs/10.JPG" alt="" /></div>
</a>
<a href="/search/category/Chocolates and Sweets">
<div className="text3">Chocolates &amp; Sweets</div>
<div className="car-img">
<img src="/imgs/18.JPG" alt="" /></div>
</a>
<a href="/search/category/Breakfast Essentials">
<div className="text3">Breakfast Essentials</div>
<div className="car-img">
<img src="/imgs/11.JPG" alt="" /></div>
</a>
<a href="/search/category/Noodles and Soojis">
<div className="text3">Noodles, Pasta &amp; Soojis</div>
<div className="car-img">
<img src="/imgs/12.JPG" alt="" /></div>
</a>
<a href="/search/category/Namkeen and Chips">
<div className="text3">Namkeen &amp; Chips</div>
<div className="car-img">
<img src="/imgs/13.JPG" alt="" /></div>
</a>
<a href="/search/category/Jams and Spreads">
<div className="text3">Jams &amp; Spreads</div>
<div className="car-img">
<img src="/imgs/14.JPG" alt="" /></div>
</a>
<a href="/search/category/Ketchups and Sauces">
<div className="text3">Ketchups &amp; Sauces</div>
<div className="car-img">
<img src="/imgs/15.JPG" alt="" /></div>
</a>
<a href="/search/category/Beverages">
<div className="text3">Beverages</div>
<div className="car-img">
<img src="/imgs/20.JPG" alt="" /></div>
</a>
<a href="/search/category/Ready to Eat Foods">
<div className="text3">Ready to Eat Foods</div>
<div className="car-img">
<img src="/imgs/16.JPG" alt="" /></div>
</a>
<a href="/search/category/Cooking and Baking Products">
<div className="text3">Cooking &amp; Baking Products</div>
<div className="car-img">
<img src="/imgs/17.JPG" alt="" /></div>
</a>
<a href="/search/category/Milk and Milk Products">
<div className="text3">Milk &amp; Milk Produdcts</div>
<div className="car-img">
<img src="/imgs/19.JPG" alt="" /></div>
</a>
</div>

<div className="text1">Household and Cleaning</div>
      <div className="carouselAA" data-flickity='{"groupCells": true, "freeScroll": true, "wrapAround": true }'>
<a href="/search/category/Bathroom and Toilet Cleaners">
<div className="text3">Bathroom &amp; Toilet Cleaners</div>
<div className="car-img">
<img src="/imgs/21.JPG" alt="" /></div>
</a>
<a href="/search/category/Air Freshners">
<div className="text3">Air Freshners</div>
<div className="car-img">
<img src="/imgs/26.JPG" alt="" /></div>
</a>
<a href="/search/category/Bathing Soaps and Brushes">
<div className="text3">Bathing Soaps and Brushes</div>
<div className="car-img">
<img src="/imgs/25.JPG" alt="" /></div>
</a>
<a href="/search/category/Detergents and Washing">
<div className="text3">Detergents and Washing</div>
<div className="car-img">
<img src="/imgs/24.JPG" alt="" /></div>
</a>
</div>

<div className="text1">Self-Care Products</div>
      <div className="carouselAA" data-flickity='{"groupCells": true, "freeScroll": true, "wrapAround": true }'>
<a href="/search/category/Oral Care Products">
<div className="text3">Oral Care Products</div>
<div className="car-img">
<img src="/imgs/23.JPG" alt="" /></div>
</a>
<a href="/search/category/Women Self-Care Products">
<div className="text3">Women Self-Care Products</div>
<div className="car-img">
<img src="/files/women.JPG" alt="" /></div>
</a>
<a href="/search/category/Men Organic Skin-Care Products">
<div className="text3">Men Organic Skin-Care Products</div>
<div className="car-img">
<img src="/files/men.JPG" alt="" /></div>
</a>
<a href="/search/category/Women Organics Skin-Care Products">
<div className="text3">Women Organics Skin-Care Products</div>
<div className="car-img">
<img src="/files/women1.JPG" alt="" /></div>
</a>
</div>
        <div className="groA4">
          <img src="/images/shop.JPG" alt=""> 
           </img>
         </div>
         <div className="groA7">  
           <a href="/search/category/Buy 1 Get 1 Free Packs">
           <img src="/images/combo1.JPG" alt="">
           </img></a>
           <a href="/search/category/Dals and Pulses">
           <img src="/images/52.JPG" alt="">
           </img></a>
           </div>
           <div className="gro10">
           <a href="/search/category/Women Self-Care Products">
           <img src="/images/her.jpg" alt="">
           </img></a>
            <a href="/search/category/Men Self-Care Products">
           <img src="/images/him.jpg" alt="">
           </img></a>
           <a href="/search/category/Baby Care Products">
           <img src="/images/baby1.JPG" alt="">
           </img></a>
           </div> 
           <div className="text1">Baby Care Products</div>
      <div className="carouselAA" data-flickity='{ "groupCells": true, "freeScroll": true, "wrapAround": true }'>
<a href="/search/category/Baby Care Products">
<div className="text3">Baby Care Products</div>
<div className="car-img">
<img src="/imgs/28.JPG" alt="" /></div>
</a>
<a href="/search/category/Baby Foods">
<div className="text3">Baby Foods</div>
<div className="car-img">
<img src="/imgs/29.JPG" alt="" /></div>
</a>
<a href="/search/category/Baby Diapers and Wipes">
<div className="text3">Baby Diapers &amp; Wipes</div>
<div className="car-img">
<img src="/imgs/27.JPG" alt="" /></div>
</a>
<a href="/search/category/Pet Foods">
<div className="text3">Pet Foods</div>
<div className="car-img">
<img src="/imgs/30.JPG" alt="" /></div>
</a>
<a href="/search/category/Pet Care Products">
<div className="text3">Pet Care Products</div>
<div className="car-img">
<img src="/imgs/31.JPG" alt="" /></div>
</a>
</div>
</div>
      )
  }

  /************DESKTOP VIEW***********/
    return ( 
        <div>  
           <div className="gro3">
           <div className="topic21">GOOD MORNING STORE</div>       
            <a href="/search/category/Breakfast Essentials">
          <img src="/images/morning.jpg" alt=""> 
           </img></a>
         </div>

            <div>
           <div className="topic20">READY TO COOK & EAT FOODS</div>       
               <div className="gro2">
               <a href="/search/category/Ready to Eat Foods">
           <img src="/images/sale12.jpg" alt="">
           </img></a>
           <a href="/search/category/Rice and Rice Products">
           <img src="/images/rice.jpg" alt="">
           </img></a>
         </div>
        
         <div className="gro4">
          <img src="/images/shop.JPG" alt=""> 
           </img>
         </div>
         <div className="gro7">  
           <a href="/search/category/Buy 1 Get 1 Free Packs">
           <img src="/images/combo1.JPG" alt="">
           </img></a>
           <a href="/search/category/Dals and Pulses">
           <img src="/images/52.JPG" alt="">
           </img></a>
           </div>
         <div className="gro6">
           <div className="topic20">COOKING NEEDS</div>       
           <a href="/search/category/Dals and Pulses">
           <img src="/images/dals.JPG" alt="">
           </img></a>
           <a href="/search/category/Oil and Ghee">
           <img src="/images/ghee.JPG" alt="">
           </img></a>
           <a href="/search/category/Masalas and Spices">
           <img src="/images/masala.JPG" alt="">
           </img></a>
           <a href="/search/category/Rice and Rice Products">
           <img src="/images/rice2.JPG" alt="">
           </img></a>
           <a href="/search/category/Atta and Flour">
           <img src="/images/atta.JPG" alt="">
           </img></a>
           <a href="/search/category/Sugar, Jaggery and Salt">
           <img src="/images/jag.JPG" alt="">
           </img></a>
           </div>

           <div className="gro7">  
           <a href="/search/category/Health Mixes">
           <img src="/images/MIX.JPG" alt="">
           </img></a>
           <a href="/search/category/Dry Fruits and Snacks">
           <img src="/images/snack.JPG" alt="">
           </img></a>
           <a href="/search/category/Chocolates and Sweets">
           <img src="/images/choco.JPG" alt="">
           </img></a>
           <a href="/search/category/Beverages">
           <img src="/images/tea.JPG" alt="">
           </img></a>
          </div>
         </div>

         <div className="gro8">
          <img src="/images/care.JPG" alt=""> 
           </img>
         </div>
         <div className="gro10A">
           <a href="/search/category/Women Self-Care Products">
           <img src="/images/her.jpg" alt="">
           </img></a>
            <a href="/search/category/Men Self-Care Products">
           <img src="/images/him.jpg" alt="">
           </img></a>
           <a href="/search/category/Baby Care Products">
           <img src="/images/baby1.JPG" alt="">
           </img></a>
           </div>

         <div className="gro9">
            <a href="/search/category/Shampoos">
           <img src="/images/shampoo.jpg" alt="">
           </img></a>
           <a href="/search/category/Oral Care Products">
           <img src="/images/oral.jpg" alt="">
           </img></a>
           <a href="/search/category/Men Organic Skin-Care Products">
           <img src="/images/organicmen.jpg" alt="">
           </img></a>
           <a href="/search/category/Women Organic Skin-Care Products">
           <img src="/images/organicwomen.jpg" alt="">
           </img></a>
           </div>
         <div>
         </div>
         
         </div>

         );
}

/* <div className="gro5">
           <div className="topic20">GROCERY STORE</div>       
           <img src="/images/gro1.jpg" alt="">
           </img>
           </div>*/


// WEBPACK FOOTER //
// ./src/screens/GroScreen.js