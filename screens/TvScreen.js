  
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile } from 'react-device-detect';
export default function TvScreen() {
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
             <div className="hm3">
            <a href="/search/category/Television">
          <img src="/images/TV1.JPG" alt=""> 
           </img></a>
           <a href="/search/category/Washing Machines">
          <img src="/images/washmach.JPG" alt=""> 
           </img></a>
           <a href="/search/category/Airconditioners">
          <img src="/images/AC.JPG" alt=""> 
           </img></a>   
           <a href="/search/category/Home Appliances and Electronics">
          <img src="/images/app.JPG" alt=""> 
           </img></a>
           <a href="/search/category/Heating and Cooling Appliances">
          <img src="/images/GEY.JPG" alt=""> 
           </img></a>
           <a href="/search/category/Small decors">
          <img src="/images/mini.JPG" alt=""> 
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
        <div className="hm3A">
      <a href="/search/category/Television">
    <img src="/images/TV1.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Washing Machines">
    <img src="/images/washmach.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Airconditioners">
    <img src="/images/AC.JPG" alt=""> 
      </img></a>  
      <a href="/search/category/Home Appliances and Electronics">
    <img src="/images/app.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Heating and Cooling Appliances">
    <img src="/images/GEY.JPG" alt=""> 
      </img></a>
      <a href="/search/category/Small decors">
    <img src="/images/mini.JPG" alt=""> 
      </img></a>
      </div>
      </div>

    );
}


// WEBPACK FOOTER //
// ./src/screens/TvScreen.js