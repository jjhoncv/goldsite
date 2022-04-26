import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { PublicRootProps } from "./PublicRoot.interface";

const queryClient = new QueryClient();

export const PublicRoot: React.FC<PublicRootProps> = ({ data, Template }) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <Template data={data} />
    // </QueryClientProvider>
  );
};
