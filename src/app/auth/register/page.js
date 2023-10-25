'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    console.log(userData);

    try {
      const response = await fetch('https://easy-lime-seal-toga.cyclic.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Register",
          text: "Register Successfully!",
          icon: "success",
        })
        // alert('Registration successful');
        router.push('/auth/login');
      } else {
        const error = await response.json();
        console.log(error)
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container-fluid" >
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-md-6 bg-primary d-flex align-items-center justify-content-center" >
          {/* Gambar atau konten di sisi kiri */}
          <img src="/gambar-login.png" alt="Gambar Login" className='col-md-6'/>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          {/* Form login di sisi kanan */}
          <div className="pt-5 pb-5 mb-5 mb-5 col-md-5 ml-auto">
            <img src="/icon auth.png" alt="Gambar Login" />
          </div>
            <h2 className="col-md-5 ml-auto mb-5 fw-bold">Register</h2>
            <form onSubmit={handleRegister}>
              {/* Form Login */}
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control-plaintext border-bottom"
                  placeholder="Fullname"
                  value={name}
              onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email  "
                  id="email"
                  name="email"
                  className="form-control-plaintext border-bottom"
                  placeholder="Email"
                  value={email}
              onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control-plaintext border-bottom"
                  placeholder="Password"
                  value={password}
              onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="col-md-12 btn btn-primary btn-block shadow"
              >
                Sign up
              </button>
            <input type="checkbox" id="accept" name="accept" value="accept" className='mx-3 my-4'/>
            <label htmlFor="accept" className='mt-2'> Accept terms and conditions</label>
            {errorMessage && (
            <p className="text-danger mt-2">{errorMessage}</p>
          )}
          <p className="mt-4 mb-4 text-center">Already have an account?</p>
            </form>
          <button
          type="submit"
          className="col-md-6 btn btn-primary btn-block shadow"
          ><Link href='/auth/login' className='text-decoration-none text-white'>Sign in</Link>
          </button>
          {/* Tambahkan tautan ke halaman lupa kata sandi atau pendaftaran */}
        </div>
      </div>
    </div>
  );
}
