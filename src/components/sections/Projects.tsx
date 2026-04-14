import { useData } from "../../context/DataContext";
import { ExternalLink, Github, Clock } from "lucide-react";

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getStatusConfig(status: string) {
  switch (status) {
    case "completed":
      return { dot: "bg-[#84cc16]", text: "Completed", glow: "glow-lime" };
    case "in-progress":
      return { dot: "bg-[#dc2626]", text: "In Progress", glow: "glow-red" };
    case "prototype":
      return { dot: "bg-[#22d3ee]", text: "Prototype", glow: "glow-cyan" };
    default:
      return { dot: "bg-[#64748b]", text: status, glow: "" };
  }
}

export function Projects() {
  const { data } = useData();
  const projects = data?.projects || [];

  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">02 / Work</span>
        </div>
        <div className="md:col-span-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f1f5f9]">Projects</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const status = getStatusConfig(project.status);
          return (
            <article
              key={project.id}
              className="group relative bg-[#0c0c10] border border-[#1e1e24] rounded-lg overflow-hidden hover:border-[#22d3ee]/30 transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0f0f14] to-[#09090b] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQwdi00MHoiIGZpbGw9IiMwMWUxZTIiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjM2QzZjRmIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#1e1e24] group-hover:text-[#22d3ee]/10 transition-colors duration-500">
                    {project.name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f1f5f9] group-hover:text-[#22d3ee] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>
                      <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide">
                        {status.text}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-[#64748b]">
                    <Clock className="w-3 h-3" />
                    <span className="font-mono">
                      {project.startDate && formatDate(project.startDate)}
                    </span>
                  </div>
                </div>
                
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {project.descriptionShort}
                </p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 bg-[#0f0f14] text-[#64748b] border border-[#1e1e24] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 pt-4 border-t border-[#1e1e24]">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#64748b] hover:text-[#22d3ee] transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono">Source</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#64748b] hover:text-[#22d3ee] transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-mono">Live</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 ${status.glow} rounded-lg`}></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
