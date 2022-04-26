import React from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../services/product";
import { Header } from "../../shared/components/Header";
import { NotFound } from "../../shared/components/NotFound";
import { isErrorApp } from "../../utils/browser";

export const Product = () => {
  if (isErrorApp) return <NotFound />;

  let { id } = useParams();

  const { data, status } = useQuery(["product", id], async () =>
    fetchProduct(id)
  );

  // console.log({ data2 });

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
              <h3>{data?.data?.name}</h3>
              <p>{data?.data?.description}</p>
              <strong>{data?.data?.price}</strong>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
