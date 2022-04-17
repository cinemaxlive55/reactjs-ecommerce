import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';

export default function MobilesScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

    return ( 
        <div>      
             <div className="summer">
            <img src="./images/m999.jpg" alt=""/>
             </div>
            <div>
            <div className="topic1">EXPLORE TOP BRANDS</div>       
               <div className="wrapper1">
            <a href="./search/category/PANTS">
          <img src="./images/p.jpg" alt="" className="image--cover"> 
           </img></a>
           <a href="./search/category/SHORTS FOR MEN">
           <img src="./images/s.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/SHIRTS">
           <img src="./images/shirt.jpg" alt="" className="image--cover" >
           </img></a>
           <a href="./search/category/T-SHIRTS">
           <img src="./images/tshi.jpg" alt="" className="image--cover">
           </img></a>
           <a href="./search/category/PERFUMES">
           <img src="./images/pe.jpg" alt="" className="image--cover">
           </img></a>
         </div>
         </div>
         </div>

         );
}


// WEBPACK FOOTER //
// ./src/screens/MobilesScreen.js