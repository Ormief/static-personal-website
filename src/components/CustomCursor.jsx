import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Target mouse position
  const mouse = useRef({ x: 0, y: 0 });

  // Actual cursor position (lagged)
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Smooth lag animation
  useEffect(() => {
    const follow = () => {
      const speed = 0.08; // lower = more lag

      cursor.current.x += (mouse.current.x - cursor.current.x) * speed;
      cursor.current.y += (mouse.current.y - cursor.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursor.current.x}px`;
        cursorRef.current.style.top = `${cursor.current.y}px`;
      }

      requestAnimationFrame(follow);
    };

    follow();
  }, []);

  // Grow on hover (links, buttons, images)
  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, img");

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed pointer-events-none z-[9999]
        rounded-full bg-black
        transition-all duration-500 ease-out
        ${hovering ? "h-10 w-10 opacity-65" : "h-5 w-5"}
      `}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}