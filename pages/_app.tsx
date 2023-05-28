import React, { Component, Dispatch, createContext, useReducer } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Home from "./index";
import "@/styles/globals.css";
import store, { StoreType } from "@/contexts/store";
import action from "@/contexts/action";

export const ApplicationContext = createContext<{
  state: StoreType;
  dispatch: Dispatch<{ type: string; value: any }>;
}>({
  state: store,
  dispatch: () => void 0,
});

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(action, store);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </ApplicationContext.Provider>
  );
};

export default App;
