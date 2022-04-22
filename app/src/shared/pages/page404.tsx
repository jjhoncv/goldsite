import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { ProtectedRoot } from "../components/ProtectedRoot";
import { PublicRoot } from "../components/PublicRoot";
import { NotFound } from "../components/NotFound";

export const Index: React.FC<any> = ({ hasSession }) => {
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

export const getServerSideProps = async () => {
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

export default { getServerSideProps, Index };
