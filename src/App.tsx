import "./App.css";
import Home from "./screens/Home";
import { AppProvider } from "./context/appContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppProvider>
      <Home />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
