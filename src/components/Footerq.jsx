export default function Footerq() {
  return (
    <footer className="bg-[#0A2342] text-white py-12 mt-32">
      
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">

        {/* Column 1 */}
        <div className="reveal">
          <h2 className="text-xl font-semibold">Nick</h2>
          <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
            Startup enthusiast with qualifications and experience in both Finance & technology.
          </p>
        </div>

        {/* Column 2 */}
        <div className="reveal">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="reveal">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
            <li>LinkedIn: TBA</li>
            <li>GitHub: TBA</li>
          </ul>
        </div>

      </div>

      <div className="mt-12 text-center text-neutral-400 text-xs reveal">
        © {new Date().getFullYear()} NF - All rights reserved.
      </div>
    </footer>
  );
}