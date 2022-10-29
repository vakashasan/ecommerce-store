const INITIALSTATE = {
  globaldata: ""
};

const reducerAPIdata = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "APIDATA":
      return {
        globaldata: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducerAPIdata;
