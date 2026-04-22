import React from "react";
import PortraitVideo from "./PotraitVideo.jsx";

const sectionStyle = {
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  boxSizing: "border-box",
};

const sectionColors = ["#FFFAF0", "#E3F8FF", "#FEF6FB", "#F0FFF4"];

function App() {
  return (
    <div>
      {[1, 2, 3, 4].map((n, idx) => (
        <section
          key={n}
          style={{
            ...sectionStyle,
            background: sectionColors[idx % sectionColors.length],
          }}
        >
          <h2 style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>
            Section {n}
          </h2>
          <PortraitVideo />
        </section>
      ))}
      <style>
        {`
          @media (min-width: 700px) {
            section {
              max-width: 430px;
              margin: 1rem auto;
              border-radius: 18px;
            }
          }
          @media (max-width: 699px) {
            body {
              margin: 0;
              overflow-x: hidden;
            }
            section {
              min-height: 80vh;
              padding: 0.8rem;
              margin: 0;
              border-radius: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
