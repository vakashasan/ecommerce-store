import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import Header from "./Header";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        navigate("/usermain");
      })
      .catch((err) => setErr(err.message));
  };

  return (
    <div>
      <Header />
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 addition">
        <h1> Login </h1>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          onChange={handleChangeEmail}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={handleChangePass}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" color="warning" onClick={handleSignIn}>
          Login
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>

          {err ? (
            <div>
              <h1 className="err"> {err} </h1>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </MDBContainer>
    </div>
  );
}

export default Login;
