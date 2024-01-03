// src/components/TransparentForm.js
import React from 'react';
import './cartpage.css';
import log5 from './download.jpeg';
const TransparentForm = () => {
  return (
    <div className="form-container">
      <div className="background-image"></div>
      <form className="glass-form">
        <div className='left'>
        <img src={log5} alt='' style={{height:'600px' ,width:'400px'}}></img>
        </div>
       <div className='right'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center><h1>Gravitrax</h1></center>
        <button>Add to cart</button>
       </div>
      </form>
    </div>
  );
};

export default TransparentForm;
