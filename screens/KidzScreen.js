import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import {
  isMobile
} from "react-device-detect";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product1 from '../components/Product1';

export default function KidzScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    if (isMobile) {
      return ( 
        <div>
    <div className="sale4">
      <a href="./search/category/Boys Summer Casual Dress"><img src="./images/deals2.JPG" alt=""></img></a> 
    </div>
    <div className="sale5">
      <a href="./search/category/Summer Casual Dress"><img src="./images/deals.JPG" alt=""></img></a>
      </div> 
            <div>
           <div className="topic5">GIRLS TRENDS </div>       
           <div className="kidzA1">
               <a href="./search/category/Western Wear for Girls">    
           <img src="./images/girl.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Ethnic Wear for Girls">
           <img src="./images/ge.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Shorts and Skirts">
           <img src="./images/gs.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Dungarees and Jumpsuits">
           <img src="./images/dg.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Tights and Leggings">
           <img src="./images/jjj.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Jeans, Jeggings and Capris">
           <img src="./images/jc.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Sweaters and Sweatsuits">
           <img src="./images/swe.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Innerwear and Sleepwear">
           <img src="./images/inw.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         <div>
         <div className="topic7">BOYZ TRENDS</div>       
         <div className="kidzA1">
               
               <a href="./search/category/Ethnic wear for Boys">
           <img src="./images/BE.jpg" alt="" >
           </img></a>
           <a href="./search/category/Shirts for Boys">
           <img src="./images/boyshirt.jpg" alt="" >
           </img></a>
           <a href="./search/category/T-Shirts for Boys">
           <img src="./images/tshib.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Jeans for Boys">
           <img src="./images/jean.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Shorts and Trousers">
           <img src="./images/trs.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Jackets and Shrugs">
           <img src="./images/jack.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Innerwear and Sleepwear">
           <img src="./images/py.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Casual Dress">
           <img src="./images/off.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic5AA">TRENDY CUTE FOOTWEARS FOR KIDS</div>       
            <div className="kidzA1">
               
            <a href="./search/category/Girls Sandals">
          <img src="./images/san.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Boys Shoes and Socks">
           <img src="./images/sho.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Flip-Flops">
           <img src="./images/flfl.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Sandals">
           <img src="./images/sandb.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Booties">
           <img src="./images/boot.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Booties">
           <img src="./images/boysbooties.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Ballerinas and Cutshoes">
           <img src="./images/bsh.jpg" alt="" >
           </img></a>
           <a href="./search/category/Kids Casual Footwear">
           <img src="./images/casual.jpg" alt="" >
           </img></a> 
         </div>
         </div>

         <div>
            <div className="topic5">BATHROOM ESSENTIALS</div>       
               <div className="kidzA1">
            <a href="./search/category/Boys Character Based Towels">
          <img src="./images/btowel.JPG" alt="" > 
          </img>
          </a>
           <a href="./search/category/Girls Character Based Towels">
           <img src="./images/gtowel.JPG" alt="Boys Character Based Towels"  >
           </img></a>
           <a href="./search/category/Kids Bathrobe">
           <img src="./images/bath.JPG" alt=""  >
           </img></a>
           <a href="./search/category/Kids Soaps, Bath brushes and Tubs">
           <img src="./images/soap.JPG" alt="" >
           </img></a>
           <a href="./search/category/Kids Toothbrushes">
           <img src="./images/tooth.JPG" alt="" >
           </img></a>
           <a href="./search/category/Baby Bathroom Toys">
           <img src="./images/toysbath.JPG" alt="" >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic5">STATIONERY ITEMS</div>       
            <div className="kidz7A">
            <a href="./search/category/School Supplies">
          <img src="./images/sch.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Stationery Items for Kids">
          <img src="./images/sta.PNG" alt="" > 
           </img></a>
         </div>
         </div>

         <div>
            <div className="topic5">TOYS FOR AGE 0-5</div>       
            <div className="kidzA1">
               
            <a href="./search/category/Baby Toys and Games for Age 0-5">
          <img src="/OFFERS/baby_toys.png" alt="" > 
           </img></a>
           <a href="/search/category/Baby Walkers">
           <img src="/OFFERS/baby_walker.PNG" alt=""  >
           </img></a>
           <a href="/search/category/BABY RIDING TOYS">
           <img src="/OFFERS/vh.PNG" alt=""  >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic5">TOYS FOR AGE 5+</div>       
            <div className="kidzA1">
               
            <a href="./search/category/Toys and Games for Age 5+">
          <img src="./images/toys.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Girls Toys and Teddies">
           <img src="./images/gga.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Kids Eductional toys">
           <img src="./images/edt.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         </div>
      )
    }
    return ( 
        <div>
    <div className="sale3">
      <a href="./search/category/Boys Summer Casual Dress"><img src="./images/deals2.JPG" alt=""></img></a> 
      <a href="./search/category/Summer Casual Dress"><img src="./images/deals.JPG" alt=""></img></a> 
    </div>
   
            <div>
           <div className="topic5">GIRLS TRENDS </div>       
           <div className="kidz1">
               <a href="./search/category/Western Wear for Girls">    
           <img src="./images/girl.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Ethnic Wear for Girls">
           <img src="./images/ge.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Shorts and Skirts">
           <img src="./images/gs.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Dungarees and Jumpsuits">
           <img src="./images/dg.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Tights and Leggings">
           <img src="./images/jjj.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Jeans, Jeggings and Capris">
           <img src="./images/jc.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Sweaters and Sweatsuits">
           <img src="./images/swe.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Girls Innerwear and Sleepwear">
           <img src="./images/inw.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         <div>
         <div className="topic7">BOYZ TRENDS</div>       
         <div className="kidz1">
               
               <a href="./search/category/Ethnic wear for Boys">
           <img src="./images/BE.jpg" alt="" >
           </img></a>
           <a href="./search/category/Shirts for Boys">
           <img src="./images/boyshirt.jpg" alt="" >
           </img></a>
           <a href="./search/category/T-Shirts for Boys">
           <img src="./images/tshib.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Jeans for Boys">
           <img src="./images/jean.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Shorts and Trousers">
           <img src="./images/trs.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Jackets and Shrugs">
           <img src="./images/jack.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Innerwear and Sleepwear">
           <img src="./images/py.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Casual Dress">
           <img src="./images/off.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic5">TRENDY CUTE FOOTWEARS FOR KIDS</div>       
            <div className="kidz1">
               
            <a href="./search/category/Girls Sandals">
          <img src="./images/san.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Boys Shoes and Socks">
           <img src="./images/sho.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Flip-Flops">
           <img src="./images/flfl.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Sandals">
           <img src="./images/sandb.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Booties">
           <img src="./images/boot.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Boys Booties">
           <img src="./images/boysbooties.jpg" alt="" >
           </img></a>
           <a href="./search/category/Girls Ballerinas and Cutshoes">
           <img src="./images/bsh.jpg" alt="" >
           </img></a>
           <a href="./search/category/Kids Casual Footwear">
           <img src="./images/casual.jpg" alt="" >
           </img></a> 
         </div>
         </div>

         <div>
            <div className="topic5">BATHROOM ESSENTIALS</div>       
               <div className="kidz2">
            <a href="./search/category/Boys Character Based Towels">
          <img src="./images/btowel.JPG" alt="" > 
          </img>
          </a>
           <a href="./search/category/Girls Character Based Towels">
           <img src="./images/gtowel.JPG" alt=""  >
           </img></a>

           <a href="./search/category/Kids Bathrobe">
           <img src="./images/bath.JPG" alt=""  >
           </img></a>
           <a href="./search/category/Kids Soaps, Bath brushes and Tubs">
           <img src="./images/soap.JPG" alt="" >
           </img></a>
           <a href="./search/category/Kids Toothbrushes">
           <img src="./images/tooth.JPG" alt="" >
           </img></a>
           <a href="./search/category/Baby Bathroom Toys">
           <img src="./images/toysbath.JPG" alt="" >
           </img></a>
         </div>
         </div>
         <div>
            <div className="topic5">STATIONERY ITEMS</div>       
            <div className="kidz7">
               
            <a href="./search/category/School Supplies">
          <img src="./images/sch.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Stationery Items for Kids">
          <img src="./images/sta.PNG" alt="" > 
           </img></a>
         </div>
         </div>

         <div>
            <div className="topic5">TOYS FOR AGE 0-5</div>       
            <div className="kidz1">
               
            <a href="./search/category/Baby Toys and Games for Age 0-5">
          <img src="/OFFERS/baby_toys.png" alt="" > 
           </img></a>
           <a href="/search/category/Baby Walkers">
           <img src="/OFFERS/baby_walker.PNG" alt=""  >
           </img></a>
           <a href="/search/category/BABY RIDING TOYS">
           <img src="/OFFERS/vh.PNG" alt=""  >
           </img></a>
         </div>
         </div>
     
         <div>
            <div className="topic5">TOYS FOR AGE 5+</div>       
            <div className="kidz1">
               
            <a href="./search/category/Toys and Games for Age 5+">
          <img src="./images/toys.jpg" alt="" > 
           </img></a>
           <a href="./search/category/Girls Toys and Teddies">
           <img src="./images/gga.jpg" alt=""  >
           </img></a>
           <a href="./search/category/Kids Eductional toys">
           <img src="./images/edt.jpg" alt=""  >
           </img></a>
         </div>
         </div>
         </div>

         );
}


// WEBPACK FOOTER //
// ./src/screens/KidzScreen.js