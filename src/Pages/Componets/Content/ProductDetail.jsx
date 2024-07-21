import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const ProductDetail = () => {

  const location = useLocation();
  const [product, setProduct] = useState({});
  console.log("product: ", product);
  const [loading, setLoading] = useState(true);

  const [cartItem, setCartItem] = useState(); // CartItem state

  const addToCartHandle = () => {
    console.log("Add to Cart triggered");

    const isItemExist = cartItem?.some((val) => val.id === product.id);

    setCartItem((preData) => {
      const updatedCart = isItemExist
        ? preData // If the item exists, keep the existing cart
        : [...preData, product]; // If the item doesn't exist, add it to the cart

      localStorage.setItem("CartProducts", JSON.stringify(updatedCart));
      return updatedCart;
    });

    console.log("cartItem: ", cartItem);
  };

  const [count, setCount] = useState(1);
  const decCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("CartProducts");
    const Items = storedData ? JSON.parse(storedData) : [];
    setCartItem(Items);
    
    const LoadProduct=()=>{
      const productData=location.state.productData
      setProduct(productData)
      setLoading(false)
    }
    setTimeout(LoadProduct,1000)
  }, []);

  return (
    <>
      <Navbar />
    <div className="pro_main">
    {
      loading?(<>
        <div className=" container mt-md-5 mt-3">
      <div className=" product d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center gap-md-5 gap-2">
        <Skeleton className="mainImg_div d-flex justify-content-center align-items-center col-12 col-md-6">
          
        </Skeleton>
        <div className="product_detail col-12 col-md-6">
          <Skeleton height={35} width={180}></Skeleton>
          <Skeleton height={50}></Skeleton>
          <Skeleton height={35} width={140}></Skeleton>
          <Skeleton height={35} width={100}></Skeleton>
          <Skeleton height={130}></Skeleton>
          <Skeleton height={50} width={200}> </Skeleton>
        </div>
      </div>
    </div></>):product?(<>
        <div className=" container mt-md-5 mt-3">
      <div className=" product d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center gap-md-5 gap-2">
        <div className="mainImg_div d-flex justify-content-center align-items-center col-12 col-md-6">
          <img
            className="mainImg col-12 col-md-6"
            src={product.image}
            alt="sample_img"
          />
        </div>
        <div className="product_detail col-12 col-md-6">
          <h5 className="pro_category py-md-2 py-1">
            {product.category.toUpperCase()}
          </h5>
          <h3 className="pro_title py-md-2 py-1">{product.title}</h3>
          <div className="pro_rating py-md-2 py-1">
            <h5>
              Rating {product.rating.rate} <i className="fa fa-star fs-5" />
              <i className="fa fa-star fs-5" />
              <i className="fa fa-star fs-5" />
              <i className="fa fa-star fs-5" />
            </h5>
          </div>
          <h3 className="pro_price py-md-2 py-1">
            ${product.price.toFixed(2)}
          </h3>
          <div className="pro_desc py-md-2 py-1">{product.description}</div>
          <div className="pro_buttons pt-md-2 py-1">
            <button
              className="btn btn-outline-dark"
              onClick={addToCartHandle}
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button className="btn btn-outline-dark">Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        </>):null
    }
    </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
