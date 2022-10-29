import Headers from "./Header";
import { useEffect } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Usermain() {
  const navigate = useNavigate("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  const handlecreatead = () => {
    navigate("/createad");
  };

  return (
    <div>
      <Headers />

      <h1> Post a Free Ad </h1>
      <button onClick={handlecreatead} className="btnsubmit">
        {" "}
        Create Ad{" "}
      </button>
    </div>
  );
}
