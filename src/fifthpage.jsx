import { useState, useRef } from "react";

function FifthPage() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        height: "100vh",
        background: "#000", // keep overall bg black for contrast
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Added text at the top of the portrait */}
      <div
        style={{
          color: "#fff",
          fontSize: "1.6rem",
          fontWeight: 600,
          marginBottom: "1.7rem",
          letterSpacing: "1px",
          textShadow: "0 2px 8px #000, 0 4px 18px #333",
          textAlign: "center",
          fontFamily: "'Satisfy', cursive",
        }}
      >
        from abdulla
      </div>
      {/* The portrait frame is now solid white and portrait aspect ratio */}
      <div
        style={{
          position: "relative",
          width: 270, // Narrower for portrait
          aspectRatio: "9/16",
          background: "#fff", // frame portrait white
          borderRadius: 9,
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          border: "8px solid #fff", // Add a strong white frame border
        }}
      >
        <video
          ref={videoRef}
          src="/videos/sachin.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            background: "#000",
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
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 5,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polygon points="6,3 21,12 6,21" fill="#000" />
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
    </div>
  );
}

export default FifthPage;
