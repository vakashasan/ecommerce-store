import { applyMiddleware, createStore } from "redux";
import reducerAPIdata from "./Reducer/index";
import thunk from "redux-thunk";

const store = createStore(reducerAPIdata, {}, applyMiddleware(thunk));

export { store };
