import axios from "axios";

export const fetchProducts = async (id: number) => {
  const { data } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return data;
};
