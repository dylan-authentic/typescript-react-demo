import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContactsStore } from "./store";

const contactsStore = new ContactsStore();

ReactDOM.render(
  <App contactsStore={contactsStore} />,
  document.getElementById("root")
);
