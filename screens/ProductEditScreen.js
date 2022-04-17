import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import TextField from '@material-ui/core/TextField';
import { isMobile } from 'react-device-detect';
export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [batterypower, setbatterypower] = useState('');
  const [camera, setcamera] = useState('');
  const [memory, setmemory] = useState('');
  const [os, setos] = useState('');
  const [warranty, setwarranty] = useState('');
  const [additionalfeatures, setadditionalfeatures] = useState('');
  const [colour, setcolour] = useState('');
  const [inbox, setInbox] = useState('');
  const [resolution, setResolution] = useState('');
  const [itemnumber, setitemnumber] = useState('');
  const [itemweight, setitemweight] = useState('');
  const [productdimensions, setproductdimensions] = useState('');
  const [price, setPrice] = useState('');
  const [mrp, setMrp] = useState('');
  const [disc, setDisc] = useState('');
  const [discount, setDiscount] = useState('');
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');
  const [image6, setImage6] = useState('');
  const [technicaldetails, setTechnicaldetails] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [countr, setCountr] = useState('');
  const [description, setDescription] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setbatterypower(product.batterypower);
      setcamera(product.camera);
      setmemory(product.memory);
      setos(product.os);
      setwarranty(product.warranty);
      setcolour(product.colour);
      setadditionalfeatures(product.additionalfeatures);
      setInbox(product.inbox);
      setResolution(product.resolution);
      setitemnumber(product.itemnumber);
      setitemweight(product.itemweight);
      setproductdimensions(product.productdimensions);
      setPrice(product.price);
      setMrp(product.mrp);
      setDisc(product.disc);
      setDiscount(product.discount);
      setImage(product.image);
      setImage1(product.image1);
      setImage2(product.image2);
      setImage3(product.image3);
      setImage4(product.image4);
      setImage5(product.image5);
      setImage6(product.image6);
      setTechnicaldetails(product.technicaldetails);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setManufacturer(product.manufacturer);
      setCountr(product.countr);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        batterypower,
        camera,
        inbox,
        os,
        warranty,
        memory,
        resolution,
        itemnumber,
        itemweight,
        productdimensions,
        additionalfeatures,
        colour,
        price,
        mrp,
        disc,
        discount,
        image,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        technicaldetails,
        category,
        manufacturer,
        countr,
        brand,
        countInStock,
        description,
      })
    );
  };
  
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

if (isMobile) {
  return(
  <div>
  <form className="form_Mobile" onSubmit={submitHandler}>
    {loadingUpdate && <LoadingBox></LoadingBox>}
    {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}

       <div className="column_Mobile">
    <h12>Product Info</h12>
    <div>
          <label htmlFor="name">PRODUCT NAME *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField >
        </div>
          <div>
          <label htmlFor="itemnumber">ITEM NUMBER *</label>
          <TextField       
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="itemnumber"
            type="text"
            placeholder="Enter Item Number"
            value={itemnumber}
            onChange={(e) => setitemnumber(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="countr">COUNTRY OF ORIGIN *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="countr"
            type="text"
            placeholder="Enter Country of Origin"
            value={countr}
            onChange={(e) => setCountr(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="manufacturer">MANUFACTURER *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="manufacturer"
            type="text"
            placeholder="XYZ pvt.ltd"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="inbox">IN THE BOX *</label>
          <TextField            
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="inbox"
            type="text"
            placeholder="Enter In the Box content"
            value={inbox}
            onChange={(e) => setInbox(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="product dimensions">PRODUCT DIMENSIONS *</label>
          <TextField       
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none', border: 'none' } }}
            id="product dimensions"
            type="text"
            placeholder="Enter Product Dimensions"
            value={productdimensions}
            onChange={(e) => setproductdimensions(e.target.value)}
          ></TextField >
        </div>
        </div>

        <div className="column2_Mobile">
        <div>
          <label htmlFor="countInStock">COUNT IN STOCK *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="countInStock"
            type="text"
            placeholder="Enter countInStock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="itemweight">ITEM WEIGHT *</label>
          <TextField   
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="itemnweight"
            type="text"
            placeholder="Enter Item Weight"
            value={itemweight}
            onChange={(e) => setitemweight(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="mrp">M.R.P *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="mrp"
            type="number"
            pattern="\d*"
            placeholder="Enter mrp (in Rs. Only)"
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
          ></TextField >
        </div>  
        <div>
          <label htmlFor="price">YOUR PRICE *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="price"
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="disc">DISCOUNT PRICE *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="disc"
            type="text"
            placeholder="Final price"
            value={mrp-price}
            onChange={(e) => setDisc(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="discount">DISCOUNT % *</label>
          <TextField   
            oninput={((mrp-price)/mrp * 100).toFixed(2)}     
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="discount"
            type="text"
            placeholder="Enter discount"
            value={(mrp-price)/mrp * 100}
            maxLength={3}
            onChange={(e) => setDiscount(e.target.value)}
          ></TextField >
        </div>
        </div>

        <div className="column2_Mobile">
        <div>
          <label htmlFor="additionalfeatures">ADDITONAL FEATURES *</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="additionalfeatures"
            type="text"
            placeholder="Enter additionalfeatures"
            value={additionalfeatures}
            onChange={(e) => setadditionalfeatures(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="warranty">WARRANTY</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="warranty"
            type="text"
            placeholder="Enter warranty"
            value={warranty}
            onChange={(e) => setwarranty(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="brand"
            type="text"
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="colour">Colour</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="colour"
            type="text"
            placeholder="Enter colour"
            value={colour}
            onChange={(e) => setcolour(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
          style={{resize: 'none'}}
            id="description"
            rows="6"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        </div>

        <div className="column1_Mobile">
        <h12>Technical Details</h12>
        <div>
          <label htmlFor="resolution">Resolution</label>
          <TextField        
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="resolution"
            type="text"
            placeholder="Enter Resolution"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="memory">memory</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="memory"
            type="text "
            placeholder="Enter memory RAM and ROM"
            value={memory}
            onChange={(e) => setmemory(e.target.value)}
          ></TextField >
        </div> 
         <div>
          <label htmlFor="os">OS</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="os"
            type="text"
            placeholder="Enter os"
            value={os}
            onChange={(e) => setos(e.target.value)}
          ></TextField >
        </div> 
         <div>
          <label htmlFor="camera">Camera</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="camera"
            type="text"
            placeholder="Enter camera details"
            value={camera}
            onChange={(e) => setcamera(e.target.value)}
          ></TextField >
        </div> 
         <div>
          <label htmlFor="batterypower">battery and power</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="batterypower"
            type="text"
            placeholder="Enter battery and power"
            value={batterypower}
            onChange={(e) => setbatterypower(e.target.value)}
          ></TextField >
        </div> 
      </div>


     <div className="column1_Mobile">
       <h12>Image</h12>
     <div>
          <label htmlFor="image">Main Image</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image"
            type="text"
            placeholder="Enter image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="image1">Image #1</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image1"
            type="text"
            placeholder="Enter image1"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="image2">Image #2</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image2"
            type="text"
            placeholder="Enter image2"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="image3">Image #3</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image3"
            type="text"
            placeholder="Enter image3"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
          ></TextField >
        </div>  
        <div>
          <label htmlFor="image4">Image #4</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image4"
            type="text"
            placeholder="Enter image4"
            value={image4}
            onChange={(e) => setImage4(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="image5">Image #5</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image5"
            type="text"
            placeholder="Enter image5"
            value={image5}
            onChange={(e) => setImage5(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="image6">Image #6</label>
          <TextField 
            inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            id="image6"
            type="text"
            placeholder="Enter image6"
            value={image6}
            onChange={(e) => setImage6(e.target.value)}
          ></TextField >
        </div>
     </div>    

     <div className="row2_Mobile">
          <div>
          <label htmlFor="category">CATEGORY FOR KIDS*</label>
          <select
            id="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
          <option style={{fontWeight: 'bold'}}>KIDS</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Stationery Items</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Toys and Games</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Pants</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Pants</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Essentials</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags for Girls</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags for Boys</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Gifts for Kids</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Footwear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Ethnic Wear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Ethnic Wear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Casual and Western Wear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Casual and Western Wear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Watchess</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Jewellery</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Footwear for Girls</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Footwear</option>

          <option style={{fontWeight: 'bold'}}>MEN</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Shirts</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>T-Shirts</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Shorts</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Pants</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Formal Shirts &amp; T-Shirts for Men</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Coat and Suits for Men</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dhotis </option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Perfumes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Watches</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Activewear for Men</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Innerwears for Men</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sweaters and Sweashirts</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Jackets and Blazers</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kurtas and Kurta sets</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bracelets and Rings</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sherwanis and Nehru Jackets</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sleepwear</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Gaiters, Scarfs and Gloves</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ties and Chuffclinks</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Footwear and Socks Men</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Personal Care products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Umbrellas</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Wallets and Purses</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Belts and Wallets</option>

          <option style={{fontWeight: 'bold'}}>GROCERIES</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Atta and Flour</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Masalas and Spices</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Rice and Rice Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dals and Pulses</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oil and Ghee</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sugar,Jaggery and Salt</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Papads and Cooking Pastes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Noodles and Soojis</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Cooking and Baking Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Milk and Milk Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Beverages</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ready to Eat Foods</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Jams and Spreads</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dry Fruits and Snacks</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Breakfast Essentials</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ketchups and Sauces</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Health Mixes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Puja Articles</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oral Care Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bathroom and Toilet Cleaners</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sanitizers and Handwashes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Air Freshnerss</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Detergents and Washing</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bathing Soaps and Brushes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oral Care Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Biscuits and Cakes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Namkeen and Chips</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Chocolates and Sweets</option>

          <option style={{fontWeight: 'bold'}}>ELECTRONICS</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Televisions</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Home Entertainmetn systems</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Rice and Rice Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dals and Pulses</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oil and Ghee</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sugar,Jaggery and Salt</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Papads and Cooking Pastes</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Noodles and Soojis</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Cooking and Baking Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Milk and Milk Products</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Beverages</option>
          <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ready to Eat Foods</option>
          </select>
        </div>
        </div>
          
        <div>
          <button className="productedit_Mobile" type="submit">
            Update
          </button>
        </div>
     
  </form>
</div>
);
}

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
    
           <div className="column">
        <h12>Product Info</h12>
        <div>
              <label htmlFor="name">PRODUCT NAME *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField >
            </div>
              <div>
              <label htmlFor="itemnumber">ITEM NUMBER *</label>
              <TextField       
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="itemnumber"
                type="text"
                placeholder="Enter Item Number"
                value={itemnumber}
                onChange={(e) => setitemnumber(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="countr">COUNTRY OF ORIGIN *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="countr"
                type="text"
                placeholder="Enter Country of Origin"
                value={countr}
                onChange={(e) => setCountr(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="manufacturer">MANUFACTURER *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="manufacturer"
                type="text"
                placeholder="XYZ pvt.ltd"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="inbox">IN THE BOX *</label>
              <TextField            
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="inbox"
                type="text"
                placeholder="Enter In the Box content"
                value={inbox}
                onChange={(e) => setInbox(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="product dimensions">PRODUCT DIMENSIONS *</label>
              <TextField       
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none', border: 'none' } }}
                id="product dimensions"
                type="text"
                placeholder="Enter Product Dimensions"
                value={productdimensions}
                onChange={(e) => setproductdimensions(e.target.value)}
              ></TextField >
            </div>
            </div>

            <div className="column2">
            <div>
              <label htmlFor="countInStock">COUNT IN STOCK *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="itemweight">ITEM WEIGHT *</label>
              <TextField   
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="itemnweight"
                type="text"
                placeholder="Enter Item Weight"
                value={itemweight}
                onChange={(e) => setitemweight(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="mrp">M.R.P *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="mrp"
                type="number"
                pattern="\d*"
                placeholder="Enter mrp (in Rs. Only)"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              ></TextField >
            </div>  
            <div>
              <label htmlFor="price">YOUR PRICE *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="disc">DISCOUNT PRICE *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="disc"
                type="text"
                placeholder="Final price"
                value={mrp-price}
                onChange={(e) => setDisc(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="discount">DISCOUNT % *</label>
              <TextField   
                oninput={((mrp-price)/mrp * 100).toFixed(2)}     
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="discount"
                type="text"
                placeholder="Enter discount"
                value={(mrp-price)/mrp * 100}
                maxLength={3}
                onChange={(e) => setDiscount(e.target.value)}
              ></TextField >
            </div>
            </div>

            <div className="column2">
            <div>
              <label htmlFor="additionalfeatures">ADDITONAL FEATURES *</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="additionalfeatures"
                type="text"
                placeholder="Enter additionalfeatures"
                value={additionalfeatures}
                onChange={(e) => setadditionalfeatures(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="warranty">WARRANTY</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="warranty"
                type="text"
                placeholder="Enter warranty"
                value={warranty}
                onChange={(e) => setwarranty(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="colour">Colour</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="colour"
                type="text"
                placeholder="Enter colour"
                value={colour}
                onChange={(e) => setcolour(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
              style={{resize: 'none'}}
                id="description"
                rows="6"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            </div>

            <div className="column1">
            <h12>Technical Details</h12>
            <div>
              <label htmlFor="resolution">Resolution</label>
              <TextField        
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="resolution"
                type="text"
                placeholder="Enter Resolution"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="memory">memory</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="memory"
                type="text "
                placeholder="Enter memory RAM and ROM"
                value={memory}
                onChange={(e) => setmemory(e.target.value)}
              ></TextField >
            </div> 
             <div>
              <label htmlFor="os">OS</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="os"
                type="text"
                placeholder="Enter os"
                value={os}
                onChange={(e) => setos(e.target.value)}
              ></TextField >
            </div> 
             <div>
              <label htmlFor="camera">Camera</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="camera"
                type="text"
                placeholder="Enter camera details"
                value={camera}
                onChange={(e) => setcamera(e.target.value)}
              ></TextField >
            </div> 
             <div>
              <label htmlFor="batterypower">battery and power</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="batterypower"
                type="text"
                placeholder="Enter battery and power"
                value={batterypower}
                onChange={(e) => setbatterypower(e.target.value)}
              ></TextField >
            </div> 
          </div>


         <div className="column1">
           <h12>Image</h12>
         <div>
              <label htmlFor="image">Main Image</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="image1">Image #1</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image1"
                type="text"
                placeholder="Enter image1"
                value={image1}
                onChange={(e) => setImage1(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="image2">Image #2</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image2"
                type="text"
                placeholder="Enter image2"
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="image3">Image #3</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image3"
                type="text"
                placeholder="Enter image3"
                value={image3}
                onChange={(e) => setImage3(e.target.value)}
              ></TextField >
            </div>  
            <div>
              <label htmlFor="image4">Image #4</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image4"
                type="text"
                placeholder="Enter image4"
                value={image4}
                onChange={(e) => setImage4(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="image5">Image #5</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image5"
                type="text"
                placeholder="Enter image5"
                value={image5}
                onChange={(e) => setImage5(e.target.value)}
              ></TextField >
            </div>
            <div>
              <label htmlFor="image6">Image #6</label>
              <TextField 
                inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
                id="image6"
                type="text"
                placeholder="Enter image6"
                value={image6}
                onChange={(e) => setImage6(e.target.value)}
              ></TextField >
            </div>
         </div>    

         <div className="row2">
              <div>
              <label htmlFor="category">CATEGORY FOR KIDS*</label>
              <select
                id="category"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
              <option style={{fontWeight: 'bold'}}>KIDS</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Stationery Items</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Toys and Games</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Pants</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Pants</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Essentials</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags for Girls</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags for Boys</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Gifts for Kids</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Footwear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Ethnic Wear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Ethnic Wear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Girls Casual and Western Wear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Casual and Western Wear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Watchess</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kids Jewellery</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Footwear for Girls</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Boys Footwear</option>

              <option style={{fontWeight: 'bold'}}>MEN</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Shirts</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>T-Shirts</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Shorts</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Pants</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Formal Shirts &amp; T-Shirts for Men</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Coat and Suits for Men</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dhotis </option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Perfumes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Watches</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Activewear for Men</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Innerwears for Men</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sweaters and Sweashirts</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Jackets and Blazers</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Kurtas and Kurta sets</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bracelets and Rings</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sherwanis and Nehru Jackets</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sleepwear</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Gaiters, Scarfs and Gloves</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ties and Chuffclinks</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Footwear and Socks Men</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Personal Care products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Fashion Bags</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Umbrellas</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Wallets and Purses</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Belts and Wallets</option>

              <option style={{fontWeight: 'bold'}}>GROCERIES</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Atta and Flour</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Masalas and Spices</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Rice and Rice Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dals and Pulses</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oil and Ghee</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sugar,Jaggery and Salt</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Papads and Cooking Pastes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Noodles and Soojis</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Cooking and Baking Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Milk and Milk Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Beverages</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ready to Eat Foods</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Jams and Spreads</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dry Fruits and Snacks</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Breakfast Essentials</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ketchups and Sauces</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Health Mixes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Puja Articles</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oral Care Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bathroom and Toilet Cleaners</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sanitizers and Handwashes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Air Freshnerss</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Detergents and Washing</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Bathing Soaps and Brushes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oral Care Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Biscuits and Cakes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Namkeen and Chips</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Chocolates and Sweets</option>

              <option style={{fontWeight: 'bold'}}>ELECTRONICS</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Televisions</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Home Entertainmetn systems</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Rice and Rice Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Dals and Pulses</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Oil and Ghee</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Sugar,Jaggery and Salt</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Papads and Cooking Pastes</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Noodles and Soojis</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Cooking and Baking Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Milk and Milk Products</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Beverages</option>
              <option style={{fontSize: '12px', fontFamily: 'Source sans pro, sans-serif'}}>Ready to Eat Foods</option>
              </select>
            </div>
            </div>
              
            <div>
              <button className="productedit" type="submit">
                Update
              </button>
            </div>
         
      </form>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/screens/ProductEditScreen.js