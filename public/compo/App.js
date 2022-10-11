import React from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Alert />
      <Component {...pageProps} />
    </>
  );
};

export default App;
