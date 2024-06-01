import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      console.log(data);
alert('login successful')
        navigate('/');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex justify-center items-center mt-8'>
      <div className='w-[400px] h-[500px] mt-20 bg-white shadow-lg'>
        <form className='flex justify-center items-center flex-col gap-7 mt-5'>
          <input type="email" name='email' placeholder='Enter your email' className='w-3/4 px-5 py-3 rounded-lg mt-5 mb-5 bg-[#FAFAFA]' onChange={handleForm} />
          <input type="password" name='password' onChange={handleForm} placeholder='Enter your password' className='w-3/4 px-5 py-3 mb-5 rounded-lg bg-[#FAFAFA]' />
          <button onClick={handleClick} className="bg-blue text-white font-semibold px-9 py-2 rounded-sm mb-4">LogIn</button>
          <Link to='/signup' className='text-blue underline'> create an  new Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
