import React, { Component } from 'react';
import './index.css';
import Userfront from "@userfront/react";
Userfront.init("demo1234");
const PasswordResetForm = Userfront.build({
    toolId: "dkbmmo",
  });
  
export default class SignUp extends Component {
  render() {
    return (
      <PasswordResetForm />
    )
  }
}