import React from 'react';
import '../../styles/Auth.css';

function Login () {
    return <div className='auth-class'>
        <h1 className='sub-title'>
            Login
          </h1>
          <div className='auth-container'>
          <div className="auth-form">
          <form>
          <input
              type="text"
              name="Email/Phone Number"
              placeholder="Email/Phone Number"
              required
            />
            <input type="text" name="password" placeholder="password" required />
            <button className='btn btn2 btn3' type="submit">Submit</button>
          </form>
        </div>
        </div>
    </div>
}

export default Login;