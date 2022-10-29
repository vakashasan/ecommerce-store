import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { reload } from "react";

function Header() {
  const navigate = useNavigate("");
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((email) => {
      if (email) {
        setUser(email);
      }
    });
  }, []);

  const handlesignout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .then(setUser(""));
  };

  const handlecreatead = () => {
    navigate("/createad");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            Its Your Store
          </Navbar.Brand>
          <Nav className="ml-auto d-flex">
            <div className="ml-auto">
              {!user ? (
                <div>
                  <Button variant="warning" onClick={() => navigate("/Signup")}>
                    Signup
                  </Button>
                  <Button
                    variant="dark"
                    className="border border-light m-2"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    variant="dark"
                    className="border border-light m-2"
                    onClick={handlecreatead}
                  >
                    Create Ad
                  </Button>
                  <Button
                    variant="warning"
                    className="border border-light m-2"
                    onClick={handlesignout}
                  >
                    Log Out
                  </Button>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
