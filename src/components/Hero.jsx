export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center opacity-100 translate-y-0 transition-all duration-700 ease-out">
        <div
        className="
            text-center space-y-6 max-w-2xl mx-auto
            opacity-0 translate-y-4
            animate-[heroFade_1.4s_ease-out_forwards]
        "
        >

        <h1 className="text-5xl font-bold tracking-tight">
          Nick Fouras
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          Professional with a background in AI, computer science, and finance, bringing both technical knowledge and business acumen to startups.
        </p>

        {/* Personal Photo */}
        <div className="flex justify-center pt-6">
        <img
        src="nf_photo.png"
        alt="Nick Fouras"
        className="
            h-40 w-40 rounded-full object-cover shadow-md
            opacity-0 scale-95
            animate-[photoIn_1.6s_ease-out_forwards]

            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-xl

        "
        />
        </div>

      </div>
    </section>
  );
}