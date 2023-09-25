import React, { Component, Dispatch, createContext, useReducer } from "react";
import { ThemeProvider } from "next-themes";
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
    <ThemeProvider enableSystem={true} attribute="class">
      <ApplicationContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </ApplicationContext.Provider>
    </ThemeProvider>
  );
};

export default App;
