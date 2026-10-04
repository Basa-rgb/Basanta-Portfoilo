import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../constants";

const hasLink = (url) => Boolean(url) && url !== "#";

const tagKey = (tag) => tag.toLowerCase().replace(/\s+/g, "-");

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const openModal = (project) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedProject(project);
  };

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedRef.current?.focus?.();
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            type="button"
            key={project.id}
            onClick={() => openModal(project)}
            aria-haspopup="dialog"
            className="group flex flex-col h-full text-left border border-white/10 bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_30px_0_rgba(130,69,236,0.45)] hover:-translate-y-2 hover:border-[#8245ec]/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8245ec] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050414]"
          >
            <div className="relative p-3 shrink-0">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-36 sm:h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-3 bottom-3 h-16 bg-gradient-to-t from-gray-900/90 to-transparent rounded-xl pointer-events-none"
              />
            </div>

            <div className="flex flex-col flex-1 p-5 pt-1">
              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#8245ec]">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 pt-1 line-clamp-2">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tagKey(tag)}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-[#8245ec]">
                View details
                <FaExternalLinkAlt
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-[90%] max-w-3xl my-auto bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-modal-in"
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white text-2xl cursor-pointer hover:bg-[#8245ec] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8245ec]"
            >
              <FiX />
            </button>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4 pt-4">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <h3
                  id="project-modal-title"
                  className="lg:text-3xl font-bold text-white mb-4 text-md"
                >
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6 lg:text-base text-xs leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tagKey(tag)}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {hasLink(selectedProject.github) ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 hover:text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
                    >
                      <FaGithub size={16} />
                      View Code
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Link coming soon"
                      className="w-1/2 bg-gray-800 text-gray-600 cursor-not-allowed rounded-xl lg:px-6 lg:py-2 px-2 py-1 text-sm font-semibold text-center inline-flex items-center justify-center gap-2 lg:text-xl"
                    >
                      <FaGithub size={16} />
                      Coming soon
                    </span>
                  )}

                  {hasLink(selectedProject.webapp) ? (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                      View Live
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Link coming soon"
                      className="w-1/2 bg-purple-600/40 text-white/60 cursor-not-allowed rounded-xl lg:px-6 lg:py-2 px-2 py-1 text-sm font-semibold text-center inline-flex items-center justify-center gap-2 lg:text-xl"
                    >
                      <FaExternalLinkAlt size={16} />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;