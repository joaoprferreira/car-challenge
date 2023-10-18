import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
