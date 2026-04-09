import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Particles from "./components/Particles.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{ width: "100%", height: "600px", position: "fixed" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}></Particles>
      </div>
      <App />
    </BrowserRouter>
  </StrictMode>
);
