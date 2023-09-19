'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create an object with the user's credentials
    const credentials = {
      email,
      password,
    };

    console.log(credentials)

    try {
      // Make a POST request to the API endpoint for login
      const response = await fetch('https://easy-lime-seal-toga.cyclic.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Success!",
          timer: 2000,
          showConfirmButton: false
        })
        // Handle successful login, e.g., redirect to another page
        // You can replace the alert with your desired behavior
        // alert('Login successful');
        router.push('/profile/myProfil');
      } else {
        // Handle login failure
        console.log(response)
        setErrorMessage('Wrong password or username.');
      }
    } catch (error) {
      // Handle network or other errors
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
            <h2 className="col-md-5 ml-auto mb-5 fw-bold">Login</h2>
            <form onSubmit={handleLogin}>
              {/* Form Login */}
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control-plaintext border-bottom"
                  placeholder="Username"
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
                Sign in
              </button>
            </form>
            {errorMessage && (
          <p className="text-danger mt-2">{errorMessage}</p>
        )}
          <p className="mt-4 mb-4">Did you forget your password?</p>
          <Link href='/auth/forgotPassword' className='text-decoration-none'>Tap here for reset</Link>
          {/* Tambahkan tautan ke halaman lupa kata sandi atau pendaftaran */}
        </div>
      </div>
    </div>
  );
}
