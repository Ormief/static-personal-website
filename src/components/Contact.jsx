export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <div
        className="
          bg-white 
          rounded-3xl 
          shadow-sm 
          border border-gray-200 
          p-10
        "
      >
        <h2 className="text-3xl font-semibold mb-4 hover:text-blue-500 transition-colors duration-700">
          Contact
        </h2>

        <p className="text-gray-700 mb-4">
          Feel free to reach out — I'm always open to interesting conversations.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            LinkedIn:{" "}
            <a href="#" className="underline hover:text-blue-500 transition-colors">
              TBA
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="#" className="underline hover:text-blue-500 transition-colors">
              TBA
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}