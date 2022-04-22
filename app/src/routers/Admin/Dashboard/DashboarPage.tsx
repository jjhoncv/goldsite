import React from "react";
import { dehydrate, QueryClient } from "react-query";
// import { ProtectedRoot } from "./../../components/ProtectedRoot";
// import { PublicRoot } from "./../../components/PublicRoot";
// import { Dashboard } from "./../../pages/Admin/Dashboard";

export const Index: React.FC<any> = ({ hasSession }) => {
  console.log("dashboard view");
  return (
    <>
      <div>Dashboard</div>
      {/* {hasSession ? (
        <ProtectedRoot Template={Dashboard} />
      ) : (
        <PublicRoot Template={Dashboard} />
      )} */}
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  console.log("dashboard server");

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
