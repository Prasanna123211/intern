import React, { useEffect, useState } from 'react';

const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setErrors(validateForm(formData));
    setFormSubmit(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && formSubmit) {
      console.log(formData);
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      fetch('https://rest-api-bjno.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [errors]);

  const validateForm = () => {
    let err = {};

    if (formData.firstName === '') {
      err.firstName = 'Where is First Name';
    }
    if (formData.lastName === '') {
      err.lastName = 'Where is Last Name';
    }
    if (formData.email === '') {
      err.email = 'Where is e-mail';
    }
    if (formData.password === '' || formData.password.length <= 4) {
      err.password = 'must be of 5 character';
    }
    if (formData.confirmPassword === '' || formData.password.length <= 4) {
      err.confirmPassword = 'Password does not match with new one';
    } else if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = 'password does not match with previous password';
    }

    setErrors({ ...err });

    return err;
  };

  return (
    <>
      <div>
        <div className='mainB'>
          <form onSubmit={handleForm}>
            <div className='containerA1'>
              <h1>
                <u> Codse Chat</u>
              </h1>
              <p>Create your new account</p>
            </div>

            <div className='containerB1'>
              <div className='contBA1'>
                <input
                  name='firstName'
                  type='text'
                  placeholder='First Name'
                  className='firstname'
                  onChange={handleInput}
                  value={formData.firstName}
                />

                <span style={{ color: 'red' }}>{errors.firstName}</span>

                <input
                  name='lastName'
                  type='text'
                  placeholder='Last Name'
                  className='lastname'
                  onChange={handleInput}
                  value={formData.lastName}
                />

                <span style={{ color: 'red' }}>{errors.lastName}</span>
              </div>

              <input
                name='email'
                type='email'
                placeholder='Email'
                className='email1'
                onChange={handleInput}
                value={formData.email}
              />{' '}
              <br />
              <span style={{ color: 'red' }}>{errors.email}</span> <br />

              <input
                name='password'
                type='password'
                placeholder='New Password'
                className='password1'
                onChange={handleInput}
                value={formData.password}
              />{' '}
              <br />
              <span style={{ color: 'red' }}>{errors.password}</span> <br />

              <input
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                className='password2'
                onChange={handleInput}
                value={formData.confirmPassword}
              />{' '}
              <br />
              <span style={{ color: 'red' }}>{errors.confirmPassword}</span> <br />
            </div>

            <div className='containerC1'>
              <button type='submit'>Register Now</button>
              <button type='button' onClick={() => props.onFormSwitch('login')}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
