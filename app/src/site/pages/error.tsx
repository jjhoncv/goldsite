import React from "react";

import { dehydrate, QueryClient } from "react-query";
import { NotFound } from "../shared/components/NotFound";
import { ProtectedRoot } from "../shared/components/ProtectedRoot";
import { PublicRoot } from "../shared/components/PublicRoot";

const Index: React.FC<any> = ({ hasSession }) => {
  console.log("not Found");
  return (
    <>
      {hasSession ? (
        <ProtectedRoot Template={NotFound} />
      ) : (
        <PublicRoot Template={NotFound} />
      )}
    </>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery("users", fetchUsers);
  const hasSession = true;
  return {
    props: {
      hasSession,
    },
    state: dehydrate(queryClient),
  };
};

export const ErrorPage = { getServerSideProps, Index };
