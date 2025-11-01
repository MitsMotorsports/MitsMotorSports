import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import your background image
import backgroundImage from "../assets/pg1.jpg"; 

// Original Carousel 1 Images
import a1 from "../components/ebaja/image/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";

// New Images for Carousel 2
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";

export default function EBajaPage() {
  const [titleVisible, setTitleVisible] = useState(true);

  // State for the first carousel (FKDC 2023)
  const images2023 = [a1, a2, a3];
  const [centerIndex2023, setCenterIndex2023] = useState(0);

  // State for the second carousel (GKDC 2025)
  const images2025 = [c1, c2, c3];
  const [centerIndex2025, setCenterIndex2025] = useState(0);

  useEffect(() => {
    const onScroll = () =>
      setTitleVisible(window.scrollY < window.innerHeight * 0.4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Controls for the first carousel
  const rotateLeft2023 = () =>
    setCenterIndex2023((prev) => (prev - 1 + images2023.length) % images2023.length);
  const rotateRight2023 = () =>
    setCenterIndex2023((prev) => (prev + 1) % images2023.length);
  const getImageAt2023 = (offset: number) =>
    images2023[(centerIndex2023 + offset + images2023.length) % images2023.length];

  // Controls for the second carousel
  const rotateLeft2025 = () =>
    setCenterIndex2025((prev) => (prev - 1 + images2025.length) % images2025.length);
  const rotateRight2025 = () =>
    setCenterIndex2025((prev) => (prev + 1) % images2025.length);
  const getImageAt2025 = (offset: number) =>
    images2025[(centerIndex2025 + offset + images2025.length) % images2025.length];

  return (
  <div
    style={{
      position: "relative",
      minHeight: "100vh",
      overflowX: "hidden",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
      {/* Overlay for darkening the background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: -1,
        }}
      />

      {/* Title container */}
      <div
        style={{
          textAlign: "center",
          paddingTop: '48vh',
          paddingBottom: '1vh',
          opacity: titleVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <h1
          style={{
            fontSize: "10vw",
            fontWeight: "bold",
            textShadow: 
              "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 5px 5px 15px rgba(0, 0, 0, 1)",
          }}
        >
          <span style={{ color: "white" }}>Our</span>{' '}
          <span style={{ color: "#ebe7e7ff" }}>Legacy</span>
        </h1>
      </div>

      {/* Timeline container */}
      <div style={{ position: "relative", height: "160px" }}>
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "50%",
            width: "70%",
            height: "100px",
            transform: "translateX(-50%)",
            borderTop: "4px solid red",
            borderRadius: "0 0 100% 100%",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          {["2023", "2025"].map((y) => {
            const scrollTo = y === "2023" ? "2024" : "2023";
            return (
              <div
                key={y}
                onClick={() =>
                  document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" })
                }
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                <div
                  style={{
                    padding: "18px 32px",
                    background: "rgba(0,0,0,0.4)",
                    color: "#fff",
                    borderRadius: "28px",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    border: "2px solid #ff4d4d",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = "0 0 20px rgba(255,77,77,0.8)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  {y}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2024 Section */}
      <section
        id="2024"
        style={{
          padding: "2rem",
          color: "#fff",
          marginBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "2rem",
            background: "rgba(0,0,0,0.6)",
            border: "2px solid #ff4d4d",
            borderRadius: "12px",
            boxShadow: "0 0 25px rgba(255,0,0,0.5)",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "3.2rem", fontWeight: 900, color: "red", marginBottom: "1rem" }}>
            FKDC 2023 <span style={{ fontSize: "2rem", color: "#fff", background: "transparent" }}>Season 7</span>
          </h2>
          <p style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "2rem", fontWeight: "normal" }}>
            Held at <strong>Kari Motorsports, Coimbatore</strong>
          </p>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <button
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "30px",
                color: "#fff",
                padding: "1rem 3rem",
                fontSize: "1.8rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(255,0,0,0.7)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#cc0000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
            >
              AIR 1
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 45%", background: "transparent", color: "white", padding: "1.5rem", borderRadius: "10px", fontSize: "1.2rem", fontWeight: 600, border: "2px solid red", boxShadow: "0 0 15px rgba(255,0,0,0.5)", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80px" }}>
              <span style={{ fontWeight: "bold", textTransform: "uppercase", marginRight: "6px", color: "red" }}>
                First Prize
              </span>
              Endurance, Acceleration, Cost Evaluation
            </div>
            <div style={{ flex: "1 1 45%", background: "transparent", color: "white", padding: "1.5rem", borderRadius: "10px", fontSize: "1.2rem", fontWeight: 600, border: "2px solid red", boxShadow: "0 0 15px rgba(255,0,0,0.5)", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80px" }}>
              <span style={{ fontWeight: "bold", textTransform: "uppercase", marginRight: "6px", color: "red" }}>
                Second Prize
              </span>
              Autocross
            </div>
          </div>
          <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center mx-auto px-4" style={{ position: "relative", marginTop: "-5rem" }}>
            <motion.div onClick={rotateLeft2023} whileTap={{ scale: 0.9 }} style={{ position: "absolute", left: "0", zIndex: 20, background: "red", borderRadius: "50%", padding: "1rem", fontSize: "1.5rem", fontWeight: "bold", color: "#fff", cursor: "pointer", boxShadow: "0 0 20px rgba(255,0,0,0.8)", userSelect: "none" }}>◀</motion.div>
            <motion.img src={getImageAt2023(-1)} style={{ width: "300px", position: "absolute", left: "10%", opacity: 0.5, transform: "scale(0.9)", borderRadius: "12px", boxShadow: "0 0 15px rgba(255,0,0,0.3)" }} key={`left-${centerIndex2023}`} />
            <motion.img src={getImageAt2023(0)} style={{ width: "400px", borderRadius: "16px", boxShadow: "0 0 25px rgba(255,0,0,0.6)", zIndex: 10 }} key={`center-${centerIndex2023}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
            <motion.img src={getImageAt2023(1)} style={{ width: "300px", position: "absolute", right: "10%", opacity: 0.5, transform: "scale(0.9)", borderRadius: "12px", boxShadow: "0 0 15px rgba(255,0,0,0.3)" }} key={`right-${centerIndex2023}`} />
            <motion.div onClick={rotateRight2023} whileTap={{ scale: 0.9 }} style={{ position: "absolute", right: "0", zIndex: 20, background: "red", borderRadius: "50%", padding: "1rem", fontSize: "1.5rem", fontWeight: "bold", color: "#fff", cursor: "pointer", boxShadow: "0 0 20px rgba(255,0,0,0.8)", userSelect: "none" }}>▶</motion.div>
          </div>
        </div>
      </section>

      {/* 2025 Section */}
      <section
        id="2023"
        style={{
          padding: "2rem",
          color: "#fff",
          marginBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "2rem",
            background: "rgba(0,0,0,0.6)",
            border: "2px solid #ff4d4d",
            borderRadius: "12px",
            boxShadow: "0 0 25px rgba(255,0,0,0.5)",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "3.2rem", fontWeight: 900, color: "red", marginBottom: "1rem" }}>
            GKDC 2025 <span style={{ fontSize: "2rem", color: "#fff", background: "transparent" }}>Season 13</span>
          </h2>
          <p style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "2rem", fontWeight: "normal" }}>
            Held at <strong>Kari Motorsports, Coimbatore</strong>
          </p>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <button
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "30px",
                color: "#fff",
                padding: "1rem 3rem",
                fontSize: "1.8rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(255,0,0,0.7)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#cc0000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
            >
              AIR 7
            </button>
          </div>
          <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center mx-auto px-4" style={{ position: "relative", marginTop: "-5rem" }}>
            <motion.div onClick={rotateLeft2025} whileTap={{ scale: 0.9 }} style={{ position: "absolute", left: "0", zIndex: 20, background: "red", borderRadius: "50%", padding: "1rem", fontSize: "1.5rem", fontWeight: "bold", color: "#fff", cursor: "pointer", boxShadow: "0 0 20px rgba(255,0,0,0.8)", userSelect: "none" }}>◀</motion.div>
            <motion.img src={getImageAt2025(-1)} style={{ width: "300px", position: "absolute", left: "10%", opacity: 0.5, transform: "scale(0.9)", borderRadius: "12px", boxShadow: "0 0 15px rgba(255,0,0,0.3)" }} key={`left-${centerIndex2025}`} />
            <motion.img src={getImageAt2025(0)} style={{ width: "400px", borderRadius: "16px", boxShadow: "0 0 25px rgba(255,0,0,0.6)", zIndex: 10 }} key={`center-${centerIndex2025}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
            <motion.img src={getImageAt2025(1)} style={{ width: "300px", position: "absolute", right: "10%", opacity: 0.5, transform: "scale(0.9)", borderRadius: "12px", boxShadow: "0 0 15px rgba(255,0,0,0.3)" }} key={`right-${centerIndex2025}`} />
            <motion.div onClick={rotateRight2025} whileTap={{ scale: 0.9 }} style={{ position: "absolute", right: "0", zIndex: 20, background: "red", borderRadius: "50%", padding: "1rem", fontSize: "1.5rem", fontWeight: "bold", color: "#fff", cursor: "pointer", boxShadow: "0 0 20px rgba(255,0,0,0.8)", userSelect: "none" }}>▶</motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}