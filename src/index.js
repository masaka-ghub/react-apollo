import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import "./css/bootstrap.min.css";
import MainContent from "./mainContent";
import RelayEnvironment from "./RelayEnvironment";
import reportWebVitals from "./reportWebVitals";

console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <MainContent />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
