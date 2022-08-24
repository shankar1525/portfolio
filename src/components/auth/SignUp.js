import React from 'react';
import '../../styles/Auth.css';

function SignUp () {
    return <div className='auth-class'>
        <h1 className='sub-title'>
            SignUp
          </h1>
          <div className='auth-container'>
          <div className="auth-form">
          <form>
          <input
              type="text"
              name="first name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last name"
              placeholder="Last Name"
              required
            />
          <input
              type="text"
              name="Phone Number"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              name="Email"
              placeholder="Email"
              required
            />
            <button className='btn btn2 btn3' type="submit">Submit</button>
          </form>
        </div>
        </div>
    </div>
}

export default SignUp;