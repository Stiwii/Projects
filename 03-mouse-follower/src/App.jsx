import { useEffect, useState } from "react";

import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efeect", { enabled });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("mousemove", handleMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
    }; // cleanup before unmount component
    // when change dependency, cleanup before run again
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(45, 126, 214, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguidor de ratón
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <h3>Proyecto 3</h3>
      <FollowMouse />
    </main>
  );
}

export default App;
