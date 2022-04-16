import axios from "axios";

export const fetchSearch = async (q = "") => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
  return data;
};
