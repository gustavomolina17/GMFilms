import React from "react";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
