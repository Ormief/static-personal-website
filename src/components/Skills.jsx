export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
      <div
        className="
          bg-white 
          rounded-3xl 
          shadow-sm 
          border border-gray-200 
          p-10
        "
      >
        <h2 className="text-3xl font-semibold mb-6 hover:text-blue-500 transition-colors duration-700">
          Skills
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          {[
            "Python / Java / C",
            "Frontend Design – React / Tailwind",
            "Backend Development – Django",
            "Machine Learning (PyTorch)",
            "Computer Vision",
            "Financial Modelling",
            "Budget Forecasting",
            "Corporate Communications",
            "Business Strategy",
            "Market & Competitor Research",
            "Commercial Analysis",
            "Startup Funding",
          ].map((skill) => (
            <li
              key={skill}
              className="
                font-medium 
                transition-transform 
                duration-500 
                hover:scale-105
              "
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}