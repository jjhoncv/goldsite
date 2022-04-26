import React from "react";

import { dehydrate, QueryClient } from "react-query";
import { Contact } from "../components/Contact";
import { ProtectedRoot } from "../shared/components/ProtectedRoot";
import { PublicRoot } from "../shared/components/PublicRoot";

const Index: React.FC<any> = ({ hasSession }) => {
  console.log("contact view");
  return (
    <>
      {hasSession ? (
        <ProtectedRoot Template={Contact} />
      ) : (
        <PublicRoot Template={Contact} />
      )}
    </>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  console.log("contact server");

  // await queryClient.prefetchQuery("users", fetchUsers);
  const hasSession = true;
  return {
    props: {
      hasSession,
    },
    state: dehydrate(queryClient),
  };
};

export const ContactPage = { getServerSideProps, Index };
