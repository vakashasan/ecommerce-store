import Header from "./Header";
import "../styles.css";
import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../Firebase";

import { useNavigate } from "react-router-dom";

export default function CreateAd() {
  const navigate = useNavigate("");
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: `https://picsum.photos/200/300`,
    id: ""
  });

  const handlesubmit = () => {
    // if (!data.image) {
    //   setData({ ...data, image: "https://picsum.photos/200/300" });
    // }
    push(ref(db), data).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <h1> POST YOUR AD </h1>
      <div className="container-md additionad">
        <input
          type="text"
          className="createadinput"
          placeholder="Ad Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <br />
        <input
          type="text"
          className="createadinput"
          placeholder="Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <br />
        <input
          type="text"
          className="createadinput"
          placeholder="Rs. | Price"
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <input
          type="text"
          className="createadinput"
          placeholder="Image URL"
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <br />
        <button onClick={handlesubmit} className="btnsubmit">
          {" "}
          Submit{" "}
        </button>
        <br />
      </div>
    </div>
  );
}
