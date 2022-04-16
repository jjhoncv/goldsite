import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Header } from "../../containers/Header";
import { fetchProduct } from "../../services/product";

export const Product = () => {
  let { id } = useParams();
  // const id = "1";

  const { data, status } = useQuery(["product", id], () => fetchProduct(id));

  return (
    <>
      <Header />
      <main>
        <h1>Product</h1>

        <div className="App">
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" && (
            <div>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
