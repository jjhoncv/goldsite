import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProtectedRootProps } from "./ProtectedRoot.interface";

const queryClient = new QueryClient();

export const ProtectedRoot: React.FC<ProtectedRootProps> = ({
  data,
  Template,
}) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <Template data={data} />
    // </QueryClientProvider>
  );
};
