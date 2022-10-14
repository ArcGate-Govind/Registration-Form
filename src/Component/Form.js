import React, { useState } from "react";

const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [userError, setuserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    vaildation();
    setUserName("");
    setEmail("");
    setPassword("");
    setRepassword("");
  };

  const vaildation = () => {
    if (username.length === 0) {
      setuserError("please fill the input");
    } else if (email.indexOf(" ") >= 0) {
      setuserError("please cannot contain spaces");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("email are not vailed");
    } else if (email.length == 0) {
      setEmailError("Email is required");
    } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else if (password.length < 8) {
      setPasswordError("Password should be minimum 8 characters");
    } else if (password !== repassword) {
      setPasswordError("password are not match");
    } else {
      setPasswordError("");
      setEmailError("");
      setUserinfo([username, email, password, repassword]);
    }
  }

  console.log(username, email, password);

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div className="From_tip text-start">
            <h3 className="mt-2">Register With us</h3>
            <label for="userName" class="form-label mt-3">
              Username
            </label>
            <input
              type="username"
              class="form-control"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            ></input>
            {userError.length > 0 && <p className="text-danger">{userError}</p>}

            <label for="exampleInputEmail1" class="form-label mt-2">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            {emailError.length > 0 && (
              <p className="text-danger">{emailError}</p>
            )}

            <label for="exampleInputPassword1" class="form-label mt-2">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder=" Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordError.length > 0 && (
              <p className="text-danger">{passwordError}</p>
            )}
            <label for="exampleInputPassword1" class="form-label mt-2">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter passWord again"
              onChange={(e) => setRepassword(e.target.value)}
              value={repassword}
            />
            {passwordError.length > 0 && (
              <p className="text-danger">{passwordError}</p>
            )}
            <button
              onClick={(e) => submitForm(e)}
              type="button"
              class="btn btn-primary mt-3 w-100"
            >
              Submit
            </button>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  );
};

export default Form;
