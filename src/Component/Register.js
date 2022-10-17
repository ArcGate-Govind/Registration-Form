import { useState } from "react";
import "../App.css";
function App() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repassword: "",
    number: "",
    gander: "",
    interest: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
      errors.repassword = "password is required ";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      errors.repassword = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
      errors.repassword = "Password cannot exceed more than 10 characters";
    } else if (values.password !== values.repassword) {
      errors.password = "Password are not same";
      errors.repassword = "re-Password are not same";
    }
    if (!values.number) {
      errors.number = "number is required";
    } else if (values.number.length === 9) {
      errors.number = "number is require 10 digits";
    }
    if (values.gender === " ") {
      errors.gender = "fill the option";
    }

    if (!values.interest) {
      errors.interest = "fill the option";
    }
    return errors;
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div className="container ">
            <form className="mt-5 " onSubmit={handleSubmit}>
              <h1>Register Form</h1>
              <div className="ui divider"></div>
              <div className="ui form">
                <div className="field">
                  <label class="form-label mt-3">Username</label>
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                  <label class="form-label ">Email</label>
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                  <label class="form-label ">Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.password}</p>
                <div className="field">
                  <label class="form-label "> confirm password </label>
                  <input
                    class="form-control"
                    type="password"
                    name="repassword"
                    placeholder="Enter password again "
                    value={formValues.repassword}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.repassword}</p>
                <div class="form-outline">
                  <label class="form-label " for="typePhone">
                    Contect no:
                  </label>
                  <input
                    type="tel"
                    id="typePhone"
                    name="number"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.number}
                    placeholder="Enter contect Number"
                  ></input>
                </div>
                <p>{formErrors.number}</p>
                <label class="form-label ">Gender</label>
                <div
                  className="d-flex justify-content-around
               "
                >
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gander"
                      value="male"
                      id="flexRadioDefault1"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gander"
                      value="female"
                      id="flexRadioDefault2"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      female
                    </label>
                  </div>
                </div>
                <p>{formErrors.gender}</p>
                <label class="form-label ">area of interest :</label>
                <div className="d-flex justify-content-around">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="interst"
                      value="coding"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Coding
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="interest"
                      value="Web development "
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Web development
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="interest"
                      value="AI development"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      AI development
                    </label>
                  </div>
                </div>
                <p>{formErrors.interest}</p>
                <button class="btn btn-primary mt-3 w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  );
}

export default App;
