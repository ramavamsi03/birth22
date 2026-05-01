import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PotraitVideo from "./PotraitVideo.jsx";
import FirstPage from "./firstpage.jsx";
import SecondPage from "./secondpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstPage />
    <SecondPage />
  </StrictMode>,
);
