import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { Home } from "../components/Home";
import { fetchUsers } from "../services/users";
import { ProtectedRoot } from "../shared/components/ProtectedRoot";
import { PublicRoot } from "../shared/components/PublicRoot";

const Index: React.FC<any> = ({ hasSession }) => {
  console.log("home view");
  return (
    <>
      {hasSession ? (
        <ProtectedRoot Template={Home} />
      ) : (
        <PublicRoot Template={Home} />
      )}
    </>
  );
};

const getServerSideProps = async () => {
  console.log("home server");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("users", fetchUsers);
  const hasSession = true;
  return {
    props: {
      hasSession,
    },
    state: dehydrate(queryClient),
  };
};

export const HomePage = { getServerSideProps, Index };
