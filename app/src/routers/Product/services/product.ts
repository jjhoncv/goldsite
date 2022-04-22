import axios from "axios";

interface msgResponse {
  data: {} | null;
  status: true | false;
  code: number;
}

export const fetchProduct = async (args = "") => {
  try {
    const { data, status: code } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + args
    );

    return data;
  } catch (e: any) {
    return {
      data: null,
      status: false,
      code: e?.response?.status || 404,
    } as msgResponse;
  }
};
