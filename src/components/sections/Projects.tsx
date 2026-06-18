import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";
import { ExternalLink, Clock } from "lucide-react";

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getStatusConfig(status: string) {
  switch (status) {
    case "completed":
      return { dot: "bg-[#d97706]", text: "Completed" };
    case "in-progress":
      return { dot: "bg-[#c2410c]", text: "In Progress" };
    case "prototype":
      return { dot: "bg-[#78716c]", text: "Prototype" };
    default:
      return { dot: "bg-[#57534e]", text: status };
  }
}

export function Projects() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const projects = data?.projects || [];

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">02 / Work</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Projects</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const status = getStatusConfig(project.status);
            return (
              <article
                key={project.id}
                className="group relative bg-[#292524] border border-[#44403c] rounded-lg overflow-hidden hover:border-[#d97706]/40 transition-all duration-500"
              >
                <div className="aspect-video bg-gradient-to-br from-[#292524] to-[#1c1917] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#44403c] group-hover:text-[#d97706]/15 transition-colors duration-500 font-serif">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#fafaf9] group-hover:text-[#d97706] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>
                        <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide">
                          {status.text}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#57534e] shrink-0">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono">
                        {project.startDate && formatDate(project.startDate)}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#a8a29e] text-sm leading-relaxed">
                    {project.descriptionShort}
                  </p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 bg-[#1c1917] text-[#78716c] border border-[#44403c] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-[#44403c]">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-[#78716c] hover:text-[#d97706] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="font-mono">Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={`https://${project.liveUrl.replace(/^https?:\/\//, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-[#78716c] hover:text-[#d97706] transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
