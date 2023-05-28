const setPost = (value: any[]) => {
  return {
    type: "SET_POST",
    value,
  };
};

const setLoading = (value: any[]) => {
  return {
    type: "SET_LOADING",
    value,
  };
};

export { setPost, setLoading };
