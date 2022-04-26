import React from "react";

import { dehydrate, QueryClient } from "react-query";

import { Request } from "express";
import { NotFound } from "../shared/components/NotFound";
import { ProtectedRoot } from "../shared/components/ProtectedRoot";
import { PublicRoot } from "../shared/components/PublicRoot";
import { fetchSearch } from "../services/search";
import { Search } from "../components/Search";

const Index: React.FC<any> = ({ hasSession, hasError }) => {
  if (hasError) return <NotFound />;
  console.log("search view");

  return (
    <>
      {hasSession ? (
        <ProtectedRoot Template={Search} />
      ) : (
        <PublicRoot Template={Search} />
      )}
    </>
  );
};

const getServerSideProps = async (req: Request) => {
  const queryClient = new QueryClient();

  const hasSession = true;
  const hasError = false;

  const q = req.query?.q?.toString() || "";
  await queryClient.prefetchQuery(["search", q], () => fetchSearch(q));

  // console.log("search server");

  return {
    props: {
      hasSession,
      hasError,
    },
    state: dehydrate(queryClient),
  };
};

export const SearchPage = { getServerSideProps, Index };
