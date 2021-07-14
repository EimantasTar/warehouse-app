import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

const colors = {
  main: {
    900: "#263238",
    800: "#37474f",
    700: "#455a64",
    600: "#546e7a",
    500: "#607d8b",
    400: "#78909c",
    300: "#90a4ae",
    200: "#b0bec5",
    100: "#cfd8dc",
    50: "#eceff1",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
