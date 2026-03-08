export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
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
          Selected Projects
        </h2>

        <div className="grid gap-6">

          {/* Langwarrin Project */}
          <a
            href="https://langwarrin-test-b43b5ee72b52.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border rounded-lg p-6 
              transition-all duration-300 block
              hover:shadow-xl hover:scale-[1.02] 
              hover:bg-gray-50 hover:border-gray-300
            "
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-700">
              <img src="/website-project.svg" className="h-6 w-6 opacity-70" />
              Community Centre Website
            </h3>
            <p className="text-gray-600 mt-2">
              Designed and built a website for a local community centre,
              including navigation, content management, and responsive UI.
            </p>
          </a>

          {/* COVID X-Ray Project */}
          <div
            className="
              border rounded-lg p-6 
              transition-all duration-300
              hover:shadow-xl hover:scale-[1.02] 
              hover:bg-gray-50 hover:border-gray-300
            "
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-700">
              <img src="/x-ray-logo.svg" className="h-6 w-6 opacity-70" />
              Diagnosing COVID-19 from X-Rays Using AI
            </h3>
            <p className="text-gray-600 mt-2">
              Developed machine learning models to classify COVID-19 from chest X-rays,
              including cases captured under suboptimal imaging conditions.
            </p>

            <a
              href="/LungHealthStudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-3 inline-block"
            >
              View Full Report (PDF)
            </a>
          </div>

          {/* Calorie Estimation Project */}
          <div
            className="
              border rounded-lg p-6 
              transition-all duration-300
              hover:shadow-xl hover:scale-[1.02] 
              hover:bg-gray-50 hover:border-gray-300
            "
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-700">
              <img src="/calorie-estimation.svg" className="h-6 w-6 opacity-70" />
              Calorie Estimation from Images of Food
            </h3>
            <p className="text-gray-600 mt-2">
              Built a computer vision system capable of estimating the caloric content
              of meals from images.
            </p>

            <a
              href="/CalorieContentStudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-3 inline-block"
            >
              View Full Report (PDF)
            </a>
          </div>

          {/* Robot Control Project */}
          <div
            className="
              border rounded-lg p-6 
              transition-all duration-300
              hover:shadow-xl hover:scale-[1.02] 
              hover:bg-gray-50 hover:border-gray-300
            "
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-700">
              <img src="/robot-telepresence.svg" className="h-6 w-6 opacity-70" />
              AI-Assisted Robot for Remote Participants
            </h3>
            <p className="text-gray-600 mt-2">
              Research project exploring how AI can assist in controlling robots that
              act as physical avatars for remote participants in virtual meetings.
            </p>

            <a
              href="/RemoteParticipantStudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-3 inline-block"
            >
              View Full Report (PDF)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}