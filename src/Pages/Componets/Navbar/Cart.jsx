import React, { useState, useEffect } from "react";
import "./cart.css";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import Login from "../Logs/Login";
const Cart = () => {
  const GetToken = localStorage.getItem("token"); //GET login user Token

  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0); // control the Cart items coutn state
  const [showLoginModal, setShowLoginModal] = useState(false); // State variable to control modal visibility

  // Function to toggle login modal visibility
  const toggleLoginModal = () => {
    if (GetToken) {
      alert("Thank you! Give Me Payment Card Info!");
    } else {
      setShowLoginModal(!showLoginModal);
    }
  };

  // Using reduce method to sum all prices
  const totalPrice = cartItems.reduce((total, currentItem) => {
    // Convert the price string to a number using parseFloat
    const price = parseFloat(currentItem.price);
    // Check if the price is a valid number
    if (!isNaN(price)) {
      // Add the price to the total
      return total + price;
    } else {
      // If the price is not a valid number, return the current total unchanged
      return total;
    }
  }, 0);

  const cancelHandle = (id) => {
    // Filter out the item with the specified ID
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    // Save the updated cartItems to localStorage
    localStorage.setItem("CartProducts", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("CartProducts");
    const data = storedData ? JSON.parse(storedData) : [];
    console.log("data: ", data.length);

    setCartItemCount(data.length);
  });

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("CartProducts");
    const Items = storedData ? JSON.parse(storedData) : [];
    setCartItems(Items);
  }, []);

  const incCount = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.id === id) {
          return { ...item, count: (item.count || 1) + 1 }; // Increment count for the selected item
        }
        return item;
      });
    });
  };

  const decCount = (id) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.id === id && item.count > 1) {
          return { ...item, count: item.count - 1 }; // Decrement count for the selected item
        }
        return item;
      });
    });
  };
  console.log("CartItems", cartItems);


  
  return (
    <>
      <div className="col-12 cart_main">
        <Navbar />

        <div className="container d-flex flex-lg-row flex-column py-5 justify-content-md-around  gap-2">
         
          <div className="col-12 col-lg-7 d-flex flex-md-column gap-1 flex-row flex-wrap order-1 order-lg-0">
            {cartItems.length > 0 ? (
              cartItems.map((val, index) => (
                <div className="item_sec d-flex flex-column align-items-end col-lg-12 col-sm-12 col-6 col-12 ">
                  <button
                    className="cencelcon_sec"
                    onClick={() => cancelHandle(val.id)}
                  >
                    <i className="fa fa-times" />
                  </button>

                  <div className="items col-12 d-flex flex-column flex-sm-row gap-md-5 gap-3" key={index}>
                    <div className="img_div col-12 col-sm-4 d-flex justify-content-center align-items-center">
                      <img src={val.image} alt="product_image" />
                    </div>
                    <div className="item_details col-sm-7 col-12 px-4">
                      <h6 className="fw-bold py-lg-1 py-2 text-wrap">{val.title} </h6>
                      <div className="count_price_sec ">
                        <h6 className=" py-lg-1 py-2">Price : ${val.price} </h6>
                        <div className="countBtns  d-flex flex-nowrap py-lg-1 py-2">
                          <button
                            className="incCountbtn"
                            onClick={() => decCount(val.id)}
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <span>{val.count || 1}</span>
                          {/* Display count for the selected item */}
                          <button
                            className="decCountbtn"
                            onClick={() => incCount(val.id)}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                        <h6 className="pt-2">
                          Total : $
                          {((val.count || 1) * val.price).toFixed(2)}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h6 className="cart_empty_text">
                Your cart is empty, please add items to the cart. 😊
              </h6>
            )}
          </div>
          
          <div className="order_summary_sec bg-light col-lg-4 col-12 order-0 order-lg-1">
            <div className="">
              <h4>Order Summary</h4>
            </div>
            <hr className="m-auto" />
            <div className="">
              <div className=" d-flex justify-content-between align-items-center">
                <h6 className="text-nowrap">Items {cartItemCount} </h6>
                <p>${totalPrice.toFixed(2)} </p>
              </div>
              <h5>Shipping</h5>
              <p>Standard Shipping - $10.00</p>
            </div>
            <hr className="m-auto" />
            <div className=" d-flex justify-content-between align-items-center">
              <h5>Total Cost</h5>
              <p>${(totalPrice + 10).toFixed(2)}</p>
            </div>
            <hr className="m-auto" />
            <div className=" d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-dark "
                onClick={toggleLoginModal}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <Login
        showLoginModal={showLoginModal}
        toggleLoginModal={toggleLoginModal}
      />
      <Footer />
      </div>
      
      
    
    </>
  );
};

export default Cart;
