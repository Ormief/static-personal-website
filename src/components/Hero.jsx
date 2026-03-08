import { useEffect, useState } from "react";

export default function Hero() {
  const [shrink, setShrink] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const clamped = Math.min(y / 300, 1); // 0 → 1
      setShrink(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interpolated values
  const scale = 1 - shrink * 0.135;      // 1 → 0.88
  const opacity = 1 - shrink * 0.05;    // 1 → 0.75
  const padding = 120 - shrink * 60;    // 120px → 60px

  return (
    <div className="">
      <section
        id="hero"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          paddingTop: `${padding}px`,
          paddingBottom: `${padding}px`,
          transition: "transform 0.3s linear, opacity 0.3s linear, padding 0.3s linear",
        }}
        className="
          h-screen flex items-center justify-center 
          bg-white 
          rounded-3xl 
          shadow-sm 
          border border-gray-200
          
        "
      >
        <div
          className="
            text-center space-y-6 max-w-2xl mx-auto
            opacity-0 translate-y-4
            animate-[heroFade_2s_ease-out_forwards]
          "
        >
          <h1 className="text-5xl font-bold tracking-tight hover:text-blue-500 transition-colors duration-700">
            Nick Fouras
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed">
            Professional with a background in AI, computer science, and finance, bringing both technical knowledge and business acumen to startups.
          </p>

          <div className="flex justify-center pt-6">
            <img
              src="nf_photo.png"
              alt="Nick Fouras"
              className="
                h-40 w-40 rounded-full object-cover shadow-md
                opacity-0 scale-95
                animate-[photoIn_2s_ease-out_forwards]
                transition-all duration-500 ease-out
                hover:scale-105 hover:shadow-xl
              "
            />
          </div>
        </div>
      </section>
    </div>
  );
}