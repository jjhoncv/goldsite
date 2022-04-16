import axios from "axios";

export const fetchProduct = async (args = "") => {
  const { data } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + args
  );
  return data;
};
