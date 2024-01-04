// Form.js

import React, { useState } from 'react';
import './form.css'; // Import the CSS file for styling

export default function Form() {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender: '',
    hobbies: [],
    country: '',
    comments: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleCheckboxChange = (hobby) => {
    const updatedHobbies = [...formData.hobbies];
    const index = updatedHobbies.indexOf(hobby);

    if (index === -1) {
      updatedHobbies.push(hobby);
    } else {
      updatedHobbies.splice(index, 1);
    }

    setFormData({ ...formData, hobbies: updatedHobbies });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.rollNumber.trim()) {
      errors.rollNumber = 'Roll Number is required';
    }

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }

    if (formData.hobbies.length === 0) {
      errors.hobbies = 'Select at least one hobby';
    }

    if (!formData.country) {
      errors.country = 'Select a country';
    }

    if (!formData.comments.trim()) {
      errors.comments = 'Comments are required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <center>
      <marquee><h3>👻👻👻Bio Data❤️❤️❤️👻👻👻Bio Data❤️❤️❤️👻👻👻Bio Data❤️❤️❤️</h3></marquee>
         
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Roll Number :</label>
                </td>
                <td>
                  <input
                    type='text'
                    value={formData.rollNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, rollNumber: e.target.value })
                    }
                  />
                  {formErrors.rollNumber && (
                    <div className="error-message">{formErrors.rollNumber}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name :</label>
                </td>
                <td>
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {formErrors.name && (
                    <div className="error-message">{formErrors.name}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date of Birth</label>
                </td>
                <td>
                  <input
                    type='date'
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                  />
                  {formErrors.dateOfBirth && (
                    <div className="error-message">{formErrors.dateOfBirth}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {formErrors.email && (
                    <div className="error-message">{formErrors.email}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number :</label>
                </td>
                <td>
                  <input
                    type='text'
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                  {formErrors.phoneNumber && (
                    <div className="error-message">{formErrors.phoneNumber}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender :</label>
                </td>
                <td>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={() =>
                          setFormData({ ...formData, gender: 'male' })
                        }
                      />{' '}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={() =>
                          setFormData({ ...formData, gender: 'female' })
                        }
                      />{' '}
                      Female
                    </label>
                  </div>
                  {formErrors.gender && (
                    <div className="error-message">{formErrors.gender}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Hobbies :</label>
                </td>
                <td>
                  <div>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange('Cricket')}
                    />
                    <h3>Circket</h3>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange('Swimming')}
                    />
                    <h3>Swimming</h3>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange('Ludo')}
                    />
                    <h3>Ludo</h3>
                    {formErrors.hobbies && (
                      <div className="error-message">{formErrors.hobbies}</div>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Select your country :</label>
                </td>
                <td>
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  >
                    <option value=''>Select country</option>
                    <option value='India'>India</option>
                    <option value='Japan'>Japan</option>
                  </select>
                  {formErrors.country && (
                    <div className="error-message">{formErrors.country}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Comments :</label>
                </td>
                <td>
                  <textarea
                    rows="4"
                    cols="50"
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                  ></textarea>
                  {formErrors.comments && (
                    <div className="error-message">{formErrors.comments}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <center>
                    <button type="submit">Submit</button>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  );
}
