//imports

import React, { useState } from 'react';
import './form.css'

/**@title A sample Contact Form
 * @author Mohammed Bilal Basheer
 * @notice this is a simple contact form 
 * @dev This implements React
 */

//Functions

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [servicesError, setServicesError] = useState('');

  const validateForm = () => {
    let valid = true;

    // Performing validation for each field
    if (name.trim() === '') {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError('');
    }
    if (phone.trim() === '') {
      setPhoneError('Phone Number is required');
      valid = false;
    } else {
      setPhoneError('');
    }
    if (description.trim() === '') {
      setDescriptionError('Description is required');
      valid = false;
    } else {
      setDescriptionError('');
    }
    if (services.trim() === '') {
      setServicesError('Services is required');
      valid = false;
    } else {
      setServicesError('');
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      name,
      email,
      phone,
      description,
      services: [services], // Convert services to an array
    };

    fetch('http://formz.in/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.status === 201) {
          // Handle successful response
          console.log('form is submitted')

        } else {
          // Handle error response
          console.log('there is a error in form')
        }
      })
      .catch((error) => {
        // Handle network error
        console.log(error)
      });
  };
  return (
    <div className='container' >
      <div className='wrapper'>
        <div className='head'>
          <h1 className='font'>Contact Details</h1>
        </div>
        <form className='box' onSubmit={handleSubmit}>
          <label className='labelInput' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            error={nameError}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Your Name'
            className="formInput"
          />
          <br></br>
          <label className='labelInput' htmlFor="name">Email:</label>
          <input
            type="email"
            id="name"
            error={emailError}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='You@gmail.com'
            className="formInput"
          />
          <br></br>
          <label className='labelInput' htmlFor="name">Phone Number:</label>
          <input
            type="text"
            id="name"
            error={phoneError}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder='+1(555)000-0000'
            minLength='6'
            className="formInput"
          />
          <br></br>
          <label className='labelInput' htmlFor="name">Description:</label>
          <textarea className='FormInput' rows={4}
            cols='50' placeholder='Tell us a little about the project...' value={description} onChange={(e) => setDescription(e.target.value)} error={descriptionError}>
          </textarea>
          <br></br>
          <label className='labelInput' htmlFor="name">Services:</label>
          <input
            type="checkbox"
            id="name"
            error={servicesError}
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className=""
          /><span className='check'>Web design</span>
          <input
            type="checkbox"
            id="name"
            error={servicesError}
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className=""
          /><span className='check'>UI design</span>
          <input
            type="checkbox"
            id="name"
            error={servicesError}
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className=""
          /><span className='check'>Content creation</span>
          <input
            type="checkbox"
            id="name"
            error={servicesError}
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className=""
          /><span className='check'>UX design</span>
      <button className='loginRegisterButton' type="submit">Send Message</button>
        </form>
      </div>
    </div>

  );
};

export default Form;
