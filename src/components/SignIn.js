import React, { useState } from 'react';
const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [message, setMessage] = useState('');
  const mockUser = {
    username: 'admin',
    password: '1234',
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === mockUser.username && password === mockUser.password) {
      onLogin(); 
    } else {
      setMessage('Invalid username or password');document.getElementById("message").style.color = "#ffac3c";;
    }
  }

  return (
    <div style={{ maxWidth: '50%' }} className='d-grid mx-auto'>
      <h1 className='text-center my-4' style={{color:" #ffac3c"}}>Admin Login</h1>
      <p id='message' className='my-2 text-center'>
        {message}
      </p>
      <form className='form-control'style={{ backgroundColor: "#ffac3c"}} onSubmit={handleSubmit}>
        <label htmlFor='user' className='form-label' style={{color: "#282c4c"}}>
          Username
        </label>
        <input
          type='text'
          id='user'
          onChange={(event) => setUsername(event.target.value)}
          className='form-control my-2'
          placeholder='Enter your Username'
        />
        <label htmlFor='password' className='form-label' style={{color: "#282c4c"}}>
          Password
        </label>
        <input
          type='password'
          id='password'
          onChange={(event) => setPass(event.target.value)}
          className='form-control my-2'
          placeholder='Enter your password'
        />
        <button type='submit' className='btn' style={{backgroundColor: "#282c4c", color:"#ffac3c"}}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
