import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile } from 'react-device-detect';

export default function MenzScreen() {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

if (isMobile) {
  return ( 
    <div>  
           <div className="lady1A">
        <a href="./search/category/Sarees for Women">
      <img src="/images/sale7.jpg" alt=""> 
       </img></a>
       <a href="./search/category/Makeup and Beauty Products">
       <img src="/images/sale6.png" alt="">
       </img></a>
     </div>
     <div className="lady2A">
        <a href="./search/category/Women Organic Skin-Care Products">
      <img src="/images/sale1.png" alt=""> 
       </img></a>
       <a href="./search/category/Women Skin-Care Products">
       <img src="/images/sale5.png" alt="">
       </img>
     </a>
     </div> 
        <div>
        <div className="topic2">WOMEN'S CLOTHING</div>       
           <div className="lady3A">
        <a href="./search/category/Tops and Tees">
      <img src="./images/top.jpeg" alt=""> 
       </img></a>
       <a href="./search/category/Pants for Women">
       <img src="./images/pan.jpg" alt="">
       </img></a>
       <a href="./search/category/Sarees for Women">
       <img src="./images/sarees.jpg" alt="">
       </img></a>
       <a href="./search/category/Kurtis, Kurtas and Tunics">
       <img src="./images/bg.jpg" alt="" >
       </img></a>
       <a href="./search/category/Lingerie and Nightwear">
       <img src="./images/bra.jpg" alt="">
       </img></a>

     </div>
     <div>
        <div className="topic3">TOP FOOTWEARS FOR YOU</div>       
           <div className="lady4A">
        <a href="./search/category/Flip-Flops for Women">
      <img src="./images/fl.jpg" alt=""> 
       </img></a>
       <a href="./search/category/Loafers for Women">
       <img src="./images/ll.jpg" alt="" >
       </img></a>
       <a href="./search/category/High Heels for Women">
       <img src="./images/he.jpg" alt="">
       </img></a>
       <a href="./search/category/Ankle boots for Women">
       <img src="./images/aa.jpg" alt="">
       </img></a>
       <a href="./search/category/Gladiator Sandals for Women">
       <img src="./images/gl.jpg" alt="">
       </img></a>
       <a href="./search/category/Ballerina Flats for Women">
       <img src="./images/bb.jpg" alt="">
       </img></a>
       <a href="./search/category/Sports Shoes and Sandals for Women">
       <img src="./images/tt.jpg" alt="">
       </img></a>
       <a href="./search/category/Thigh high Boots for Women">
       <img src="./images/th.jpg" alt="">
       </img></a>
     </div>
     </div>
     <div className="topic2">WOMEN'S FASHION</div>       
           <div className="lady3A">
       <a href="./search/category/Fashion Bags for Women">
       <img src="./images/bag.jpg" alt="" >
       </img></a>
       <a href="./search/category/Perfumes for Women">
       <img src="./images/per.jpg" alt="">
       </img></a>
       <a href="./search/category/Jewellery for Women">
       <img src="./images/ee.jpg" alt="">
       </img></a>
       <a href="./search/category/Belts and Scarfs for Women">
       <img src="./images/ns.jpg" alt="" >
       </img></a>
       <a href="./search/category/Hair Accessories for Women">
       <img src="./images/brace.jpg" alt="">
       </img></a>
       <a href="./search/category/Watches for Women">
       <img src="./images/wt.jpg" alt="">
       </img></a>
       <a href="./search/category/Eyewear for Women">
       <img src="./images/eyee.jpg" alt="">
       </img></a>
       <a href="./search/category/Makeup and Beauty Products">
       <img src="./images/mk.jpg" alt="" >
       </img></a>
     </div>
     </div>
     <div>
        <div className="topic4">TRENDING SPORTSWEAR</div>       
           <div className="lady5A">
       <a href="./search/category/Activewear for Women">
       <img src="./images/jt.jpg" alt="">
       </img></a>
       <a href="./search/category/Sports Equipments">
       <img src="./images/we.jpg" alt="">
       </img></a>
       <a href="./search/category/Other Sports Reqs">
       <img src="./images/gr.jpg" alt="">
       </img></a>
       <a href="./search/category/Sports Reqs">
       <img src="./images/sr.jpg" alt="">
       </img></a>
       <a href="./search/category/All Sports Essentials">
       <img src="./images/as.jpg" alt="">
       </img></a>
       <a href="./search/category/Sports Shoes and Sandals for Women">
       <img src="./images/jjs.jpg" alt="">
       </img></a>
     </div>
     </div>
     </div>      
     );
}
    return ( 
        <div>  
               <div className="lady1">
            <a href="./search/category/Sarees for Women">
          <img src="/images/sale7.jpg" alt=""> 
           </img></a>
           <a href="./search/category/Makeup and Beauty Products">
           <img src="/images/sale6.png" alt="">
           </img></a>
         </div>
         <div className="lady2">
            <a href="./search/category/Women Organic Skin-Care Products">
          <img src="/images/sale1.png" alt=""> 
           </img></a>
           <a href="./search/category/Women Skin-Care Products">
           <img src="/images/sale5.png" alt="">
           </img>
         </a>
         </div> 
            <div>
            <div className="topic2">WOMEN'S CLOTHING</div>       
               <div className="lady3">
            <a href="./search/category/Tops and Tees">
          <img src="./images/top.jpeg" alt=""> 
           </img></a>
           <a href="./search/category/Pants for Women">
           <img src="./images/pan.jpg" alt="">
           </img></a>
           <a href="./search/category/Sarees for Women">
           <img src="./images/sarees.jpg" alt="">
           </img></a>
           <a href="./search/category/Kurtis, Kurtas and Tunics">
           <img src="./images/bg.jpg" alt="" >
           </img></a>
           <a href="./search/category/Lingerie and Nightwear">
           <img src="./images/bra.jpg" alt="">
           </img></a>

         </div>
         <div>
            <div className="topic3">TOP FOOTWEARS FOR YOU</div>       
               <div className="lady4">
            <a href="./search/category/Flip-Flops for Women">
          <img src="./images/fl.jpg" alt=""> 
           </img></a>
           <a href="./search/category/Loafers for Women">
           <img src="./images/ll.jpg" alt="" >
           </img></a>
           <a href="./search/category/High Heels for Women">
           <img src="./images/he.jpg" alt="">
           </img></a>
           <a href="./search/category/Ankle boots for Women">
           <img src="./images/aa.jpg" alt="">
           </img></a>
           <a href="./search/category/Gladiator Sandals for Women">
           <img src="./images/gl.jpg" alt="">
           </img></a>
           <a href="./search/category/Ballerina Flats for Women">
           <img src="./images/bb.jpg" alt="">
           </img></a>
           <a href="./search/category/Sports Shoes and Sandals for Women">
           <img src="./images/tt.jpg" alt="">
           </img></a>
           <a href="./search/category/Thigh high Boots for Women">
           <img src="./images/th.jpg" alt="">
           </img></a>
         </div>
         </div>
         <div className="topic2">WOMEN'S FASHION</div>       
               <div className="lady3">
           <a href="./search/category/Fashion Bags for Women">
           <img src="./images/bag.jpg" alt="" >
           </img></a>
           <a href="./search/category/Perfumes for Women">
           <img src="./images/per.jpg" alt="">
           </img></a>
           <a href="./search/category/Jewellery for Women">
           <img src="./images/ee.jpg" alt="">
           </img></a>
           <a href="./search/category/Belts and Scarfs for Women">
           <img src="./images/ns.jpg" alt="" >
           </img></a>
           <a href="./search/category/Hair Accessories for Women">
           <img src="./images/brace.jpg" alt="">
           </img></a>
           <a href="./search/category/Watches for Women">
           <img src="./images/wt.jpg" alt="">
           </img></a>
           <a href="./search/category/Eyewear for Women">
           <img src="./images/eyee.jpg" alt="">
           </img></a>
           <a href="./search/category/Makeup and Beauty Products">
           <img src="./images/mk.jpg" alt="" >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic4">TRENDING SPORTSWEAR</div>       
               <div className="lady5">
           <a href="./search/category/Activewear for Women">
           <img src="./images/jt.jpg" alt="">
           </img></a>
           <a href="./search/category/Sports Equipments">
           <img src="./images/we.jpg" alt="">
           </img></a>
           <a href="./search/category/Other Sports Reqs">
           <img src="./images/gr.jpg" alt="">
           </img></a>
           <a href="./search/category/Sports Reqs">
           <img src="./images/sr.jpg" alt="">
           </img></a>
           <a href="./search/category/All Sports Essentials">
           <img src="./images/as.jpg" alt="">
           </img></a>
           <a href="./search/category/Sports Shoes and Sandals for Women">
           <img src="./images/jjs.jpg" alt="">
           </img></a>
         </div>
         </div>
         </div>      
         );
} 


// WEBPACK FOOTER //
// ./src/screens/LadiezScreen.js