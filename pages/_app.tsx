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
/**Deklarasi Konteks Aplikasi:
export const ApplicationContext = createContext<{ state: StoreType; dispatch: Dispatch<{ type: string; value: any }> }>({ state: store, dispatch: () => void 0 });: Membuat konteks aplikasi menggunakan createContext yang menyediakan state dan dispatch. Konteks ini digunakan untuk berbagi data dan fungsi antara komponen-komponen dalam aplikasi.
Komponen App:
const App = ({ Component, pageProps }: AppProps) => { ... }: Mendefinisikan komponen App sebagai functional component dengan menerima properti Component dan pageProps dari AppProps.
const [state, dispatch] = useReducer(action, store);: Menggunakan useReducer untuk membuat state dan dispatch yang dikelola oleh reducer action dengan state awal dari store.
Render:
Menggunakan komponen ThemeProvider dari next-themes untuk mengatur tema aplikasi dengan properti enableSystem yang diatur sebagai true untuk mengizinkan penggunaan tema sistem operasi.
Menggunakan konteks ApplicationContext.Provider untuk menyediakan state dan dispatch ke komponen-komponen yang ada di dalamnya.
Merender komponen yang diberikan melalui properti Component dengan properti pageProps. */

export default App;
