import React, { useState } from 'react';
import './payment.css'; // Import the CSS file
//import abi from 'https://tse4.mm.bing.net/th?id=OIP.IYlpEELfKf1k1d6xY7D9kAHaGL&pid=Api&P=0&h=180';
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    email: '',
    pincode: '',
    cardtype: '',
    cardnumber: '',
    expirationdate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='god'>
    <div className="payment-form-container">
        
      <h1>Make a payment</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <h3>Contact Information</h3>
        <label htmlFor="name">Name: *</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={formData.name}
          onChange={handleChange}
          required
        />

        <fieldset>
          <legend>Gender</legend>
          <label>
            Male
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Others
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          placeholder="Enter your address here..."
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="email">Email: *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="mail@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="pincode">Pincode: *</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          maxLength="6"
          placeholder="123456"
          value={formData.pincode}
          onChange={handleChange}
          required
        />

        <br />
        <h3>Payment Information</h3>

        <label htmlFor="cardtype">Card Type: *</label>
        <select
          id="cardtype"
          name="cardtype"
          value={formData.cardtype}
          onChange={handleChange}
          required
        >
          <option value="" selected disabled>
            --Select Card Type--
          </option>
          <option value="visa">VISA</option>
          <option value="mastercard">Master Card</option>
          <option value="rupay">RuPay</option>
        </select>

        <label htmlFor="cardnumber">Card Number: *</label>
        <input
          type="number"
          id="cardnumber"
          name="cardnumber"
          maxLength="16"
          placeholder="1111-2222-3333-4444"
          value={formData.cardnumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="expirationdate">Expiration Date: *</label>
        <input
          type="date"
          id="expirationdate"
          name="expirationdate"
          value={formData.expirationdate}
          onChange={handleChange}
          required
        />

        <label htmlFor="cvv">CVV: *</label>
        <input
          type="number"
          id="cvv"
          name="cvv"
          placeholder="123"
          maxLength="3"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
};

export default PaymentForm;
