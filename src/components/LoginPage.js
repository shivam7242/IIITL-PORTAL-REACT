import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

export const LoginPage = () => {
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        const data = { email, password }
        const response = await fetch('http://localhost:4000/', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
          });
          const json = await response.json();
          if (response.status == 400) {
            alert(json.error)
          } else if (response.status == 200) {
            alert("Welcome, " + json.Name)
            navigate('/dashboard')

          }
        console.log(json);
    }

  return (
    <div class="container">
      <form name="form1" class="box" onSubmit={onSubmit}>
        <br />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autocomplete="off"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autocomplete="off"
          required
        />
        <a href="#" class="forgetPassword">
          Forget Password?
        </a>
        <input type="submit" value="Sign in" onclick="" class="submit" />
      </form>
      <a href="#" class="signUp">
        Not a Member? Sign up
      </a>
      {/* <div class="avatar">
          <div class="hair1"></div>
          <div class="hair2"></div>
          <div class="hair3"></div>
          <div class="clothes">
            <div class="buttons1"></div>
            <div class="buttons2"></div>
          </div>
          <div class="head"></div>
          <div class="neck"></div>
          <div class="eyebrow-left"></div>
          <div class="eyebrow-right"></div>
          <div class="eye-left"></div>
          <div class="eye-right"></div>
          <div class="nose"></div>
          <div class="smile1"></div>
          <div class="smile2"></div>
          <div class="smile3"></div>
          <div class="blush1"></div>
          <div class="blush2"></div>
        </div> */}
    </div>
  );
};
