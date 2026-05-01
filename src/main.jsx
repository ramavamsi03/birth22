import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PotraitVideo from "./PotraitVideo.jsx";
import FirstPage from "./firstpage.jsx";
import SecondPage from "./secondpage.jsx";
import ThirdPage from "./thirdpage.jsx";
import FourthPage from "./fourthpage.jsx";
import FifthPage from "./fifthpage.jsx";
import SixthPage from "./sixthpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
    <SixthPage />
  </StrictMode>,
);
