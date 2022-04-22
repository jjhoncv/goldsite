import axios from "axios";

export const fetchUsers = async () => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  return data;
};
