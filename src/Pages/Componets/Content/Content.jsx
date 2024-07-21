import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap"; // Import Modal from react-bootstrap
import { useNavigate, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Login from "../Logs/Login";
import "./content.css";

const Content = ({ loading, data }) => {
  const navigate = useNavigate();
  const GetToken=localStorage.getItem("token")  //GET login user Token


  const [showLoginModal, setShowLoginModal] = useState(false); // State variable to control modal visibility

  const cardEvent = (id) => {
    const fetchedProduct = data?.find((item, i) => i === id);
    navigate(`/product/${fetchedProduct.id}`, {
      state: { productData: fetchedProduct },
    });
    console.log(fetchedProduct);
  };

  // Function to toggle login modal visibility
  const toggleLoginModal = () => {
    if(GetToken){
      alert("Enjoy Shopping!")
    }
    else{
      setShowLoginModal(!showLoginModal);
    }
  };


  return (
    <>
      <div className="container contect_container gap-2">
        {loading ? (
          // Skeleton loading cards
          <div className="cards_skeleton_main col-xlg-3 col-lg-4 col-sm-6 col-12">
            <div className="col-12 col-md-3 card_skeleton">
              <Skeleton height={300} />
            </div>
            <div className="col-12 col-md-3 card_skeleton">
              <Skeleton height={300} />
            </div>
            <div className="col-12 col-md-3 card_skeleton">
              <Skeleton height={300} />
            </div>
            <div className="col-12 col-md-3 card_skeleton">
              <Skeleton height={300} />
            </div>
          </div>
        ) : data ? (
          // Render actual product cards
          data.map((val, ind) => {
            return (
              <Card key={ind} className="card col-xlg-3 col-lg-4 col-sm-6 col-12">
                <div className="Card_img_container" onClick={() => cardEvent(ind)}>
                  <Card.Img
                    className="product_img"
                    variant="top"
                    src={val.image}
                    alt="product_img"
                  />
                </div>
                <Card.Body className="card_body">
                  <h5 className="product_title text-center" onClick={() => cardEvent(ind)}>
                    {val.title.substring(0, 15)}...
                  </h5>
                  <p className="fw-bolder">${val.price}</p>
                  <button className="btn btn-outline-dark" onClick={toggleLoginModal}>Buy Now</button> {/* Open modal on button click */}
                </Card.Body>
              </Card>
            );
          })
        ) : null}
      </div>
      {/* Bootstrap Modal */}
     <Login showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} />
    </>
  );
};

export default Content;
