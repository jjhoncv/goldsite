import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Header } from "./../../../shared/components/Header";
import { fetchProduct } from "../services/product";
import { isErrorApp } from "../../../utils/browser";
import { NotFound } from "./../../../shared/components/NotFound";

export const Product = () => {
  if (isErrorApp) return <NotFound />;

  let { id } = useParams();

  const { data, status } = useQuery(["product", id], async () =>
    fetchProduct(id)
  );

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
              <h3>{data?.title}</h3>
              <p>{data?.body}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
