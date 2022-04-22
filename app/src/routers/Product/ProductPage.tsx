import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { ProtectedRoot } from "../../shared/components/ProtectedRoot";
import { PublicRoot } from "../../shared/components/PublicRoot";
import { Request } from "express";
import { NotFound } from "./../../shared/components/NotFound";
import { Product } from "./components/Product";

import { fetchProduct } from "./services/product";

const Index: React.FC<any> = ({ hasSession, hasError }) => {
  if (hasError) return <NotFound />;
  console.log("product view");

  return (
    <>
      {hasSession ? (
        <ProtectedRoot Template={Product} />
      ) : (
        <PublicRoot Template={Product} />
      )}
    </>
  );
};

const getServerSideProps = async (req: Request) => {
  const queryClient = new QueryClient();

  const hasSession = true;
  const hasError = false;

  const id = req.path.split("/").pop();

  await queryClient.prefetchQuery(["product", id], () => fetchProduct(id));

  console.log("product server");

  return {
    props: {
      hasSession,
      hasError,
    },
    state: dehydrate(queryClient),
  };
};

export default { getServerSideProps, Index };
