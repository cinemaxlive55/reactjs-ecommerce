import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { isMobile } from "react-device-detect";

export default function MenzScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts({}));
      dispatch(listTopSellers());
    }, [dispatch]);

if (isMobile) {
 return (
  <div>
  <div className="men1A">
  <a href="./search/category/Kurta and Kurta sets for Men">
<img src="/images/kurtamen.jpg" alt=""> 
  </img></a>
  <a href="./search/category/Formal Shirts and T-Shirts for Men">
<img src="/images/formalmen.jpg" alt=""> 
  </img></a>
          </div>

<div className="men2A">
<a href="./search/category/Sweaters amd Sweatshirts for Men">
<img src="/images/sweats.jpg" alt=""> 
  </img></a>
  <a href="./search/category/Men Combo Packs">
  <img src="/images/m999.JPG" alt="">
  </img></a>    
</div>
      
  <div>
  <h20>Trending Men's Fashion</h20>
      <div className="men3A">
  <a href="./search/category/T-Shirts for Men">
<img src="./images/tshi.jpg" alt=""> 
  </img></a>
  <a href="./search/category/SHIRTS">
  <img src="./images/shirt.jpg" alt="">
  </img></a>
  <a href="./search/category/Shorts for Men">
  <img src="./images/s.jpg" alt="">
  </img></a>
  <a href="./search/category/Pants for Men">
  <img src="./images/p.jpg" alt="">
  </img></a>
  
  <div className="men6A">
  <a href="./search/category/Men Skin-Care Products">
  <img src="./images/sale10.jpg" alt="">
  </img></a>
  <a href="./search/category/Jackets and Blazers for Men">
  <img src="./images/jacketblazers.JPG" alt="">
  </img></a>
  </div>

  <h22>Men's Footwear</h22>
  <div className="men4A">
  <a href="./search/category/Casual Footwear for Men">
  <img src="./images/msandal.JPG" alt=""> 
    </img></a>
    <a href="./search/category/Boots and Shoes for Men">
  <img src="./images/mboot.JPG" alt=""> 
    </img></a>
    <a href="./search/category/Sports Shoes and Sandals for Men">
    <img src="./images/msshoe.JPG" alt="">
    </img></a>
    
    <div className="men7A">
    <a href="./search/category/Coat and Suits for Men">
    <img src="./images/suit.jpg" alt="">
    </img></a>
    <a href="./search/category/Denim World">
    <img src="./images/sale9.jpg" alt="">
    </img></a>     
    </div>
    <h22>Men's Fashion Accessories</h22>
  <div className="men5A">
  <a href="./search/category/Belts and Wallets">
  <img src="./images/mbelt.jpg" alt=""> 
    </img></a>
    <a href="./search/category/Watches for Men">
  <img src="./images/menwatch.jpg" alt=""> 
    </img></a>
    </div>
</div>
</div>
</div>
<div>
</div>  
</div>  
 )
}

    return ( 
        <div>
        <div className="men1">
        <a href="./search/category/Kurta and Kurta sets for Men">
      <img src="/images/kurtamen.jpg" alt=""> 
        </img></a>
        <a href="./search/category/Formal Shirts and T-Shirts for Men">
      <img src="/images/formalmen.jpg" alt=""> 
        </img></a>
                </div>
      
      <div className="men2">
      <a href="./search/category/Sweaters amd Sweatshirts for Men">
      <img src="/images/sweats.jpg" alt=""> 
        </img></a>
        <a href="./search/category/Men Combo Packs">
        <img src="/images/m999.JPG" alt="">
        </img></a>    
      </div>
        
        <div>
        <h20a>Trending Men's Fashion</h20a>
            <div className="men3">
        <a href="./search/category/T-Shirts for Men">
      <img src="./images/tshi.jpg" alt=""> 
        </img></a>
        <a href="./search/category/SHIRTS">
        <img src="./images/shirt.jpg" alt="">
        </img></a>
        <a href="./search/category/Shorts for Men">
        <img src="./images/s.jpg" alt="">
        </img></a>
        <a href="./search/category/Pants for Men">
        <img src="./images/p.jpg" alt="">
        </img></a>
        
        <div className="men6">
        <a href="./search/category/Men Skin-Care Products">
        <img src="./images/sale10.jpg" alt="">
        </img></a>
        <a href="./search/category/Jackets and Blazers for Men">
        <img src="./images/jacketblazers.JPG" alt="">
        </img></a>
        </div>

      <h22a>Men's Footwear</h22a>
      <div className="men4">
      <a href="./search/category/Casual Footwear for Men">
      <img src="./images/msandal.JPG" alt=""> 
        </img></a>
        <a href="./search/category/Boots and Shoes for Men">
      <img src="./images/mboot.JPG" alt=""> 
        </img></a>
        <a href="./search/category/Sports Shoes and Sandals for Men">
        <img src="./images/msshoe.JPG" alt="">
        </img></a>
        
        <div className="men7">
        <a href="./search/category/Coat and Suits for Men">
        <img src="./images/suit.jpg" alt="">
        </img></a>
        <a href="./search/category/Denim World">
        <img src="./images/sale9.jpg" alt="">
        </img></a>     
        </div>
        <h22a>Men's Fashion Accessories</h22a>
      <div className="men5">
      <a href="./search/category/Belts and Wallets">
      <img src="./images/mbelt.jpg" alt=""> 
        </img></a>
        <a href="./search/category/Watches for Men">
      <img src="./images/menwatch.jpg" alt=""> 
        </img></a>
        </div>

      </div>
      </div>
      </div>
      <div>
      </div>  
      </div>  

         );
}


// WEBPACK FOOTER //
// ./src/screens/MenzScreen.js