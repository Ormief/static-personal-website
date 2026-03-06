export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo + Name */}
        <div className="flex items-center gap-2">

          <span className="font-semibold text-lg tracking-tight">
            Nick Fouras
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}