import { useEffect, useState } from "react";

export default function Hero() {
  const [shrink, setShrink] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const start = 400;
      const duration = 35;
      //console.log(y, 'z');
      // Before threshold → absolutely no movement
      if (y <= start) {
        setShrink(0);
        return;
      }

      // After threshold → begin shrinking immediately
      const progress = y;
      const clamped = Math.min(progress , 1);

      //console.log(y);

      setShrink(clamped);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Responsive padding logic (Option 1) ---
  const width = typeof window !== "undefined" ? window.innerWidth : 1200;

  const isMobile = width < 640;
  const isTablet = width < 1024;

  const basePadding = isMobile ? 80 : isTablet ? 100 : 120;
  const minPadding = isMobile ? 40 : isTablet ? 60 : 80;

  const padding = basePadding - shrink * (basePadding - minPadding);

  // Scroll transforms
  const scale = 1 - shrink * 0.138;
  const opacity = 1 - shrink * 0.04;

  return (
    <div>

      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen z-10">
        <section
          id="hero"
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            paddingTop: `${padding}px`,
            paddingBottom: `${padding}px`,
            transition:
              "transform 0.3s linear, opacity 0.3s linear, padding 0.3s linear",
          }}
          className="
            h-full flex items-center justify-center 
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
              animate-[heroFade_3s_ease-out_forwards]
              px-4 sm:px-6
            "
          >
            <h1 className="text-5xl font-bold tracking-tight hover:text-blue-500 transition-colors duration-700">
              Nick Fouras
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed ">
              Professional with a background in AI, computer science, and finance,
              bringing both technical knowledge and business acumen to startups.
            </p>

            <div className="flex justify-center pt-6">
              <img
                src="nf_photo.png"
                alt="Nick Fouras"
                className="
                  h-40 w-40 rounded-full object-cover shadow-md
                  opacity-0 scale-95
                  animate-[photoIn_3s_ease-out_forwards]
                  transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-xl
                "
              />
            </div>
          </div>
        </section>
      </div>

      {/* Content below so sticky can release */}
      <div className="min-h-[20vh]"></div>
    </div>
  );
}