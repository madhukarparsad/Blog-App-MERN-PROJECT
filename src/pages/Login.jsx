import React from 'react';
import {Link} from 'react-router-dom'


const Login = () => {
  
  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign-In</h2>
        <form className='form login__form'>
          <p className='form__error-message'>This is an error message</p>
          <input 
            type="text" 
            placeholder='Email' 
            name='email' 
            value={userData.email} 
            onChange={changeInputHandler} 
            autoFocus
          />
          <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            value={userData.password} 
            onChange={changeInputHandler} 
          />
          
          <button className='btn primary' type='submit'>Register</button>
        </form>
        <small>
          Don't Have An Account ?   <Link to="/register">sing up</Link> 
        </small>
      </div>
    </section>
  );
};

export default Login;
