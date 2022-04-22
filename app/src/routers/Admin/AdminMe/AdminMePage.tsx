import React from "react";
import { dehydrate, QueryClient } from "react-query";
// import { AdminMe } from "./../../";
// import { ProtectedRoot } from "./../../components/ProtectedRoot";
// import { PublicRoot } from "./../../components/PublicRoot";

export const Index: React.FC<any> = ({ hasSession }) => {
  console.log("admin me view");
  return (
    <>
      <div>Admin Me</div>
      {/* {hasSession ? (
        <ProtectedRoot Template={AdminMe} />
      ) : (
        <PublicRoot Template={AdminMe} />
      )} */}
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  console.log("admin me server");

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
