import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl gradient-text">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition hover:shadow-md shadow-blue-500/50">
              <h3 className="text-xl font-bold mb-2">Snap Summary</h3>
              <p className="text-gray-400 mb-4">
                AI-powered tool that process PDFs, text, audio, or live speech
                into concise summaries for your convenience that can be used by
                students and professionals alike.
              </p>
              <div>
                {["React", "Node.js"].map((tech) => (
                  <span className="tech-style">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex justify-end text-blue-500 hover:text-blue-300">
                <a href="#">View Project →</a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition hover:shadow-md shadow-blue-500/50">
              <h3 className="text-xl font-bold mb-2">Snap Summary</h3>
              <p className="text-gray-400 mb-4">
                AI-powered tool that process PDFs, text, audio, or live speech
                into concise summaries for your convenience that can be used by
                students and professionals alike.
              </p>
              <div>
                {["React", "Node.js"].map((tech) => (
                  <span className="tech-style">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex justify-end text-blue-500 hover:text-blue-300">
                <a href="#">View Project →</a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition hover:shadow-md shadow-blue-500/50">
              <h3 className="text-xl font-bold mb-2">Snap Summary</h3>
              <p className="text-gray-400 mb-4">
                AI-powered tool that process PDFs, text, audio, or live speech
                into concise summaries for your convenience that can be used by
                students and professionals alike.
              </p>
              <div>
                {["React", "Node.js"].map((tech) => (
                  <span className="tech-style">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex justify-end text-blue-500 hover:text-blue-300">
                <a href="#">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
