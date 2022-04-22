import React from "react";
import { dehydrate, QueryClient } from "react-query";
// import { ProtectedRoot } from "./../../../shared/components/ProtectedRoot";
// import { PublicRoot } from "./../../../shared/components/PublicRoot";
// import { CategorieNew } from "./components/CategorieNew";

export const Index: React.FC<any> = ({ hasSession }) => {
  console.log("product list view");
  return (
    <>
      <div>List Product</div>

      {/* {hasSession ? (
        <ProtectedRoot Template={CategorieNew} />
      ) : (
        <PublicRoot Template={CategorieNew} />
      )} */}
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  console.log("product list sever");

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