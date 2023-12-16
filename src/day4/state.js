import React, { useState } from 'react';
import './fist.css'; // Import your CSS file

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin(!isLogin);
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button-box" className="toggle-btn" onClick={() => toggleForm()}>
            Log {isLogin ? 'In' : 'Out'}
          </button>
        </div>
        <div className="social-icons">
          <img src="icons.png" alt="" />
          <img src="./facebook.jpg" alt="" />
          <img src="./instagram.webp" alt="" />
        </div>
        {isLogin ? (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Enter password" required />
            <a href="file:///D:/my%20project/forget.html">
              <input type="checkbox" className="chech-box" />
              <span>
                <b style={{ textDecoration: 'none' }}>Forget Password</b>
              </span>
            </a>
            <button type="submit" className="submit-btn" style={{ textDecoration: 'none' }}>
              <a href="file:///D:/my%20project/center.html">Log In</a>
            </button>
          </form>
        ) : (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="email" className="input-field" placeholder="EMAIL ID" required />
            <input type="checkbox" className="chech-box" />
            <span>I agree to terms & condition</span>
            <a href="file:///D:/my%20project/center.html">
              <button type="submit" className="submit-btn">
                Register
              </button>
            </a>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
