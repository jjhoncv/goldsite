export const isBrowser = typeof window !== "undefined";

export const queryState = isBrowser && (window as any).__REACT_QUERY_STATE__;

export const isErrorApp = isBrowser && queryState === "ERROR";
