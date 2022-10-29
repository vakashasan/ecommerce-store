import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from "mdb-react-ui-kit";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, user, password).then(() => {
      // Signed in
      // const user = userCredential.user;
      navigate("/");
      // ...
    });
  };

  return (
    <div>
      <Header />
      <MDBContainer fluid className="p-4 d-flex justify-content-center mb-4">
        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <h1> Free Signup </h1>
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                onChange={(e) => setUser(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                color="warning"
                onClick={handleSignup}
              >
                SignUp
              </MDBBtn>

              <div className="text-center">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </div>
  );
}

export default Signup;
