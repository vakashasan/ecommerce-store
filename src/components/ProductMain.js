import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { db } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import Headers from "./Header";
import { datafromAPI } from "./Store/Action";
import axios from "axios";

function Productmain() {
  const dispatch = useDispatch();

  const getApidata = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    let dbArray = [];
    onValue(ref(db), (snapshot) => {
      snapshot.forEach((item) => {
        dbArray.unshift(item.val());
      });
      const fakemerge = [...dbArray, ...res.data];

      dispatch(datafromAPI(fakemerge));
    });
  };

  useEffect(() => {
    getApidata();
  }, []);

  const selector = useSelector((state) => state.globaldata);

  return (
    <div>
      <Headers />
      <div className="container">
        <div className="row">
          {selector?.map((item, key) => (
            <div className="col-sm-3" key={key}>
              <div className="card h-200">
                <img
                  className="card-img-top img-fluid"
                  src={item.image}
                  alt=""
                  height="200px"
                  width="200px"
                />
                <div className="card-block">
                  <h4 className="card-title blue"> {item.title}</h4>
                  <p className="card-text">{item.description}</p>
                  <p className="card Text"> Rs. {item.price} </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productmain;
