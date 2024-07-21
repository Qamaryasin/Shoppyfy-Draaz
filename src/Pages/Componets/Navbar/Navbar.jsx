import React, { useEffect, useState } from 'react'
import "./navbbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Login from '../Logs/Login';
import Signup from '../Logs/Singup';



const Navbar = () => {
  const GetToken = localStorage.getItem("token")

  const [cartItemCount, setCartItemCount] = useState(0); // control the Cart items coutn state
  const [showLoginModal, setShowLoginModal] = useState(false); // State variable to control modal visibility
  const [showSignupModal, setshowSignupModal] = useState(false); // State variable to control modal visibility


  useEffect(() => {
    const storedData = localStorage.getItem("CartProducts")
    const data = storedData ? JSON.parse(storedData) : [];
    console.log('data: ', data.length);

    setCartItemCount(data.length)
  })

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignupModal = () => {
    setshowSignupModal(!showSignupModal);
  };

  const LogoutHandle = () => {
    if (GetToken) {
      localStorage.removeItem("token")
    }
  }


  useEffect(() => { const GetToken = localStorage.getItem("token") }, [GetToken])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid mx-4">
          <NavLink className="nav-link navbar-brand text-dark fw-bolder fs-4 " to={"/"}>
            <img className='' src="/assets/images/brand-logo.png" alt="brand-logo" />
            <span>Shoppy</span></NavLink>

          <a className="navbar-toggler border-0 px-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Products</a>
              </li>

            </ul>
            <div className='log-buttons'>

              {
                GetToken ? (<>
                  <Link className='btn btn-outline-dark' to='' onClick={LogoutHandle}>
                    <i className='fa fa-arrow-up me-1'></i>
                    Logout</Link>
                </>) : (<>
                  <Link className='btn btn-outline-dark' to='' onClick={toggleLoginModal}>
                    <i className='fa fa-arrow-down me-1'></i>
                    Login</Link></>)

              }


              <Link className='btn btn-outline-dark ms-2' to='' onClick={toggleSignupModal}>
                <i className='fa fa-user-plus me-1'></i>
                Register</Link>
              <Link className='btn btn-outline-dark ms-2' to='/cart'>
                <i className='fa fa-shopping-bag me-1'></i>
                Cart ({cartItemCount})

              </Link>
            </div>


            {
              //   <Link to="/cart" style={{textDecoration:'none'}}><div className='cart_sec'><i className="fa fa-shopping-bag" aria-hidden="true"></i> 
              // {cartItemCount>0?<div className='cartCounts'> </div>:""}
              // </div></Link>
              // <div>
              // <img className=' rounded-circle ' src="https://picsum.photos/30/30" alt="" />
              // </div>
            }

          </div>
        </div>
      </nav>

      <Login showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} />
<Signup  showSignupModal={showSignupModal}  toggleSignupModal={toggleSignupModal} />
    </>
  );

}

export default Navbar;