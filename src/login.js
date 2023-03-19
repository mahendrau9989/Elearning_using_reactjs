import React,{useState} from 'react';
import './index.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-app.js';
const SignIn =() =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            alert("User Logged In successfully");
            window.location.href = '/Home';
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
      };

    return(
        <div>
            <form id="login" onSubmit={signIn}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/reset">password?</a>
        </p>
        <b>Create Account</b><a href="/Signup">click here</a>
      </form>

        </div>
    )
}

export default SignIn;







/*import React, { Component } from 'react';
// useEffect, useState
import './index.css';
export default class Login extends Component {
  render() {
    return (
      <form id="login">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/reset">password?</a>
        </p>
      </form>
    )
  }
}
*/