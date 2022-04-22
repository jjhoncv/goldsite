import React from "react";
import { Hydrate, QueryClientProvider } from "react-query";
interface AppProps {
  queryClient: any;
  state?: string;
}
export const App: React.FC<AppProps> = ({ queryClient, state, children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>{children}</Hydrate>
    </QueryClientProvider>
  );
};
