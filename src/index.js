import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.min.css";
import { client } from "./graphQl/client";
import MainContent from "./mainContent";
import reportWebVitals from "./reportWebVitals";

console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainContent />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
