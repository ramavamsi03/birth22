import React, { useEffect, useRef } from "react";
import Cake from "./cake";

function FirstPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.play().catch(() => {
        // Autoplay might still be blocked by browser; cannot do anything else
      });
    }

    return () => {
      // Pause audio if component unmounts (leaving the page)
      const audio = audioRef.current;
      if (audio) audio.pause();
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9a8d4 0%, #f472b6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* The audio element is rendered as early as possible */}
      <audio
        ref={audioRef}
        src="birthday.mp3"
        loop
        autoPlay
        preload="auto"
        style={{
          width: 0,
          height: 0,
          position: "absolute",
          visibility: "hidden",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "'Satisfy', cursive",
            fontSize: "clamp(3rem, 7vw, 4rem)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 8px #f472b6, 0 2px 16px #fdba74",
            margin: "0.5em 0",
            letterSpacing: "2px",
            lineHeight: 1.1,
            width: "100%",
          }}
        >
          Happy Birthday Pravalli
        </h1>
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </div>

      <div style={{ position: "relative", marginTop: "10em" }}>
        <Cake />
      </div>
    </div>
  );
}

export default FirstPage;
