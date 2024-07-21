import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Singup';
import axios from 'axios';

const Login = ({ showLoginModal, toggleLoginModal }) => {
  const navigate = useNavigate()

  const [inputVal, setInputVal] = useState({}) // input fileds state to control input values
  const [showSignupModal, setShowSignupModal] = useState(false); // State variable to control modal visibility

  const onChangeHandle = (event) => {   //onChangeHandle of Input fields
    console.log('inputHandle: ');
    const { name, value } = event.target
    setInputVal(pre => ({
      ...pre,
      [name]: value
    }))
  }
  console.log(`Authentic:==> username: "mor_2314",
 password: "83r5^_"`)
  //form Submit Handle
  const formSubmitHandle = async (e) => {

    try {
      e.preventDefault()
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: inputVal.username,
        password: inputVal.password
      });
      localStorage.setItem("token", JSON.stringify(response.data.token))
      console.log("Login Response: ", response.data);

      const GetToken = localStorage.getItem("token")
      if (GetToken) {
        navigate("/")
        toggleLoginModal()
      }


    } catch (error) {
      alert("username or password is wrong.")
      console.error('Login Error:', error);
    }

  }
  // Function to toggle signup modal visibility
  const toggleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };
  return (
    <div className='Login_modal'>
      <Modal show={showLoginModal} onHide={toggleLoginModal} > {/* Show modal when showLoginModal state is true */}
        <Modal.Header closeButton className='px-3'>

          <Modal.Title className='col-11 text-center'>Login</Modal.Title>

        </Modal.Header>
        <Modal.Body className='mx-4'>
          {/* Sign-in form */}
          <form onSubmit={formSubmitHandle}>
            <div className="mb-3 input_sec">
              <input type="text" autoComplete='off' name="username" onChange={onChangeHandle} value={inputVal.username} className="form_control" id="emailSignIn" placeholder="Enter email" />
            </div>
            <div className="mb-3 input_sec">
              <input type="password" name="password" value={inputVal.password} onChange={onChangeHandle} className="form_control" id="passwordSignIn" placeholder="Enter password" />
            </div>
            <Link to=""><p className='ForgetPassword'>Forget Password?</p></Link>
            {/* Sign-up form */}

            {/* Sign-in and sign-up buttons */}
            <div className="text-center logs_buttons ">

              <button type="submit" className="col-12 btn btn-primary  ">Sign In</button>
              <p>Don't have any account?  <Link to="" onClick={() => toggleSignupModal(toggleLoginModal())}>Register here</Link></p>
            </div>
          </form>
        </Modal.Body>

      </Modal>

      <Signup showSignupModal={showSignupModal} toggleSignupModal={toggleSignupModal} toggleLoginModal={toggleLoginModal} />
    </div>
  )
}

export default Login