export const datafromAPI = (fdata) => {
  return (dispatch) => {
    dispatch({
      type: "APIDATA",
      payload: fdata
    });
  };
};
