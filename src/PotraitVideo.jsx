import React, { useState, useRef } from "react";

/* ── Bow SVG ─────────────────────────────────────────── */
function Bow({ color = "#f9a8d4", size = 48, style = {} }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      fill="none"
      style={style}
    >
      {/* left wing */}
      <ellipse
        cx="22"
        cy="24"
        rx="20"
        ry="13"
        fill={color}
        transform="rotate(-15 22 24)"
        opacity="0.9"
      />
      <ellipse
        cx="20"
        cy="24"
        rx="13"
        ry="8"
        fill={color}
        transform="rotate(-15 20 24)"
        opacity="0.5"
      />
      {/* right wing */}
      <ellipse
        cx="58"
        cy="24"
        rx="20"
        ry="13"
        fill={color}
        transform="rotate(15 58 24)"
        opacity="0.9"
      />
      <ellipse
        cx="60"
        cy="24"
        rx="13"
        ry="8"
        fill={color}
        transform="rotate(15 60 24)"
        opacity="0.5"
      />
      {/* knot */}
      <circle cx="40" cy="24" r="7" fill={color} />
      <circle cx="40" cy="24" r="4" fill="white" opacity="0.4" />
      {/* tails */}
      <path
        d="M36 28 Q30 40 24 44"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M44 28 Q50 40 56 44"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

/* ── Floating hearts background ─────────────────────── */
function FloatingHearts() {
  const hearts = ["💖", "🌸", "✨", "💗", "🎀", "💝", "🌷", "⭐"];
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.7; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {hearts.map((h, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${8 + i * 12}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            animation: `floatUp ${6 + i * 1.2}s ease-in-out ${i * 0.8}s infinite`,
            bottom: 0,
          }}
        >
          {h}
        </span>
      ))}
    </div>
  );
}

/* ── Landscape Video ─────────────────────────────────── */
function PortraitVideo({ accentColor }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* top bow */}
      <div
        style={{
          position: "absolute",
          top: -28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Bow color={accentColor} size={56} />
      </div>

      {/* frame */}
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 12,
          border: `2px solid ${accentColor}55`,
          boxShadow: `0 6px 32px ${accentColor}33, inset 0 0 0 4px #fff8fb, inset 0 0 0 5px ${accentColor}22`,
          position: "relative",
        }}
      >
        {/* corner hearts */}
        {["topleft", "topright", "bottomleft", "bottomright"].map((pos, i) => (
          <span
            key={pos}
            style={{
              position: "absolute",
              fontSize: 14,
              zIndex: 5,
              top: pos.includes("top") ? 4 : "auto",
              bottom: pos.includes("bottom") ? 4 : "auto",
              left: pos.includes("left") ? 4 : "auto",
              right: pos.includes("right") ? 4 : "auto",
            }}
          >
            🌸
          </span>
        ))}

        {/* video - now in landscape 16:9 aspect ratio, width 320px */}
        <div
          style={{
            position: "relative",
            width: 320,
            aspectRatio: "16/9",
            background: "#ffe4ef",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loop
            playsInline
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <div
              onClick={togglePlay}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,200,220,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(1px)",
              }}
            >
              <div
                style={{
                  width: 62,
                  height: 62,
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 5,
                  boxShadow: `0 4px 20px ${accentColor}88`,
                  border: `2px solid ${accentColor}`,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <polygon points="6,3 21,12 6,21" fill={accentColor} />
                </svg>
              </div>
            </div>
          )}

          {playing && (
            <div
              onClick={togglePlay}
              style={{ position: "absolute", inset: 0, cursor: "pointer" }}
            />
          )}
        </div>

        {/* footer */}
        <div
          style={{
            marginTop: 10,
            paddingTop: 8,
            borderTop: `1px dashed ${accentColor}55`,
            display: "flex",
            justifyContent: "center",
            gap: 6,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14 }}>🎀</span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "'Georgia',serif",
              fontStyle: "italic",
              color: accentColor,
            }}
          >
            {playing ? "playing ♪" : "tap to play"}
          </span>
          <span style={{ fontSize: 14 }}>🎀</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section card ────────────────────────────────────── */
const sections = [
  {
    bg: "linear-gradient(160deg,#fff0f7 0%,#fce4f3 100%)",
    accent: "#f472b6",
    bow: "#f9a8d4",
    from: "Best Friend 💕",
    name: "Sarah",
  },
  {
    bg: "linear-gradient(160deg,#fff7f0 0%,#ffe4d4 100%)",
    accent: "#fb923c",
    bow: "#fdba74",
    from: "Bestie 🧡",
    name: "Priya",
  },
  {
    bg: "linear-gradient(160deg,#f0f7ff 0%,#dbeafe 100%)",
    accent: "#60a5fa",
    bow: "#93c5fd",
    from: "Forever Friend 💙",
    name: "Meera",
  },
  {
    bg: "linear-gradient(160deg,#f0fff7 0%,#dcfce7 100%)",
    accent: "#34d399",
    bow: "#6ee7b7",
    from: "Ride or Die 💚",
    name: "Anjali",
  },
];

/* ── Main App ─────────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lato:ital,wght@0,400;1,300&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; background: #fff0f5; }
        @keyframes wiggle {
          0%,100% { transform: rotate(-3deg); }
          50%      { transform: rotate(3deg); }
        }
        @keyframes pop {
          0%   { transform: scale(0.92); }
          50%  { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .bow-wiggle { animation: wiggle 2.4s ease-in-out infinite; }
        .card-pop   { animation: pop 0.5s ease forwards; }
      `}</style>

      <FloatingHearts />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          paddingTop: 48,
          paddingBottom: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="bow-wiggle"
          style={{ display: "inline-block", marginBottom: 4 }}
        >
          <Bow color="#f9a8d4" size={72} />
        </div>
        <h1
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(2rem,7vw,3rem)",
            color: "#e879a0",
            margin: "4px 0 6px",
            textShadow: "0 2px 12px #f9a8d455",
          }}
        >
          Happy Birthday! 🎂
        </h1>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontStyle: "italic",
            color: "#c084a0",
            fontSize: 15,
            margin: 0,
          }}
        >
          With all our love 💌
        </p>
      </div>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={i}
          style={{
            minHeight: "100vh",
            background: s.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 20px 40px",
            position: "relative",
            zIndex: 1,
            borderTop: i > 0 ? "2px dashed #fecdd355" : "none",
          }}
        >
          {/* from tag */}
          <div
            style={{
              background: "#fff",
              border: `1.5px solid ${s.accent}44`,
              borderRadius: 24,
              padding: "5px 18px",
              fontSize: 12,
              fontFamily: "'Lato',sans-serif",
              color: s.accent,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 28,
              boxShadow: `0 2px 12px ${s.accent}22`,
            }}
          >
            from {s.from}
          </div>

          {/* Portrait frame (now landscape video inside) */}
          <PortraitVideo accentColor={s.accent} />

          {/* Wish card */}
          <div
            style={{
              marginTop: 32,
              background: "#fff",
              borderRadius: 20,
              padding: "22px 24px",
              maxWidth: 300,
              border: `1.5px solid ${s.accent}33`,
              boxShadow: `0 4px 24px ${s.accent}22`,
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* bow on card */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Bow color={s.bow} size={44} />
            </div>
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 18,
                color: s.accent,
                margin: "8px 0 10px",
              }}
            >
              ~ {s.name} says ~
            </p>
            {/* Removed message paragraph as per instructions */}
            <div style={{ marginTop: 14, fontSize: 20 }}>
              {"🌸 💖 🌸".split(" ").map((e, i) => (
                <span key={i}>{e} </span>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px 60px",
          background: "linear-gradient(160deg,#fff0f7,#ffe4ef)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="bow-wiggle" style={{ display: "inline-block" }}>
          <Bow color="#f472b6" size={60} />
        </div>
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 22,
            color: "#e879a0",
            margin: "12px 0 4px",
          }}
        >
          We love you so much! 💖
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontStyle: "italic",
            color: "#c084a0",
            fontSize: 13,
          }}
        >
          Made with love, just for you 🎀
        </p>
      </div>
    </div>
  );
}
