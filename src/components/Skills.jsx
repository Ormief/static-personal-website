export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">

        {/* Technical */}
        <li>Python / Java / C</li>
        <li>Frontend Design – React / Tailwind</li>
        <li>Backend Development – Django</li>
        <li>Machine Learning (PyTorch)</li>
        <li>Computer Vision</li>

        {/* Business / Finance */}
        <li>Financial Modelling</li>
        <li>Budget Forecasting</li>
        <li>Corporate Communications</li>
        <li>Business Strategy</li>
        <li>Market & Competitor Research</li>
        <li>Commercial Analysis</li>
        <li>Startup Funding</li>

      </ul>
    </section>
  );
}