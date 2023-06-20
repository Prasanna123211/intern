import React, { useEffect, useState } from 'react'
// import Button from './Button'

const Login = (props) => {
    const initialValues= {email:"", password:""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [submit, setSubmit] = useState(false)

    const handleChange=(e)=>{
      const{name, value} = e.target
      setFormValues({...formValues, [name]:value})
    }

    const handleSubmit= (e) =>{
      e.preventDefault();
      setFormErrors( validate(formValues));
      setSubmit(true);
    };

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0  && submit){
      console.log(formValues);
      }
    },[formErrors]);

     const validate = (value) =>{
      const errors ={};
      if(!value.email){
        errors.email = "Email is Required";
      }
     if(!value.password){
      errors.password="Password is Required";
     }else if(value.password.length >10){
      errors.password="Password cannot exceed more than 10 character";
     }
     return errors;

    };

  return (
    <>
    {useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && submit ){ 
    alert("Login from successfully!!!!!")
    }
   },[formErrors])}

    <div>
      <div className='main'>
        <form onSubmit={handleSubmit}>
          <div className='containerA'>
            <h1 className='chat'>
              <u>Codse Chat</u>
            </h1>
            <p>Login to your account</p>
          </div>

          <div className='containerB'>
             
            <input 
            name='email' type="email" placeholder='Email' className='email'
             value={formValues.email} onChange={handleChange} />
             <span style={{color:'red', marginTop:18}}>{formErrors.email}</span>
             
            <input 
            name='password' type="password" placeholder='********' className='password' 
            value={formValues.password} onChange={handleChange} />
            <span style={{color:'red', marginTop:18}}>{formErrors.password}</span>

            <div className='contB'>
              <div className='contB1'>
              <input 
              type="checkbox" className='check' /> <p>Remember me</p>
              </div>
              
              <p className='forget'> Forget Password?</p>
            </div>
          </div>

          <div className='containerC'>
           <div className='btn'><button className='login' type='submit' >Login</button></div> 
            <div className='dont'>Don't have an account? <button className='btnA' type='button' onClick={()=> props.onFormSwitch('register')}>Sign up</button></div>
          </div>

        </form>
      </div>
    </div>
    </>
  )
  
}

export default Login