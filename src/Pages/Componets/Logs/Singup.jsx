import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import "./signup.css"
import { Link } from 'react-router-dom';

const Signup = ({ showSignupModal, toggleSignupModal, toggleLoginModal }) => {

  const [input, setInput] = useState([]);

  const onChangeHandle = (event) => {
    console.log('inputHandle: ');
    const { name, value } = event.target
    setInput(pre => ({
      ...pre,
      [name]: value
    }))
  }
  
  const Data=()=>{
    console.log("all input fields", input)
  }
 
  
  return (
    <div className='Signup_modal'>
      <Modal show={showSignupModal} onHide={toggleSignupModal} > {/* Show modal when showModal state is true */}
        <Modal.Header closeButton className='px-3'>

          <Modal.Title className='col-11 text-center'>Register Your Account</Modal.Title>

        </Modal.Header>
        <Modal.Body className='mx-4'>

          <div className="mb-3 input_sec">
            <input type="text" autoComplete='off' onChange={onChangeHandle} name='name' value={input.name} className="form_control" id="emailSignIn" placeholder="Enter username" />
          </div>
          <div className="mb-3 input_sec">
            <input type="email" name='email' value={input.email} onChange={onChangeHandle} className="form_control" id="passwordSignIn" placeholder="Enter email" />
          </div>
          <div className="mb-3 input_sec">
            <input type="password" name='password' value={input.password} onChange={onChangeHandle} className="form_control" id="passwordSignIn" placeholder="Enter password" />
          </div>
          <div className="mb-3 input_sec">
            <input type="password" name='cpassword' value={input.cpassword} onChange={onChangeHandle} className="form_control" id="passwordSignIn" placeholder="Enter confirm password" />
          </div>
          <div className='checkBox_sec'><input type='checkbox' /><span className='Checkbbox_text'>Agree terms and conditions?</span></div>



          <div className="text-center logs_buttons ">
            <button type="button" className="col-12 btn btn-primary" onClick={Data}>Register</button>
            <p>Have already account?  <Link to="" onClick={() => toggleSignupModal(toggleLoginModal())} >Login here</Link></p>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Signup;