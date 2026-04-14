import { useData } from "../../context/DataContext";
import { GraduationCap } from "lucide-react";

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getTypeConfig(type: string) {
  const configs: Record<string, { icon: string; color: string }> = {
    job: { icon: "01", color: "#22d3ee" },
    freelance: { icon: "02", color: "#84cc16" },
    teaching: { icon: "03", color: "#dc2626" },
    volunteer: { icon: "04", color: "#3b82f6" },
  };
  return configs[type] || { icon: "00", color: "#64748b" };
}

export function Experience() {
  const { data } = useData();
  const experience = data?.experience || [];

  if (!experience || experience.length === 0) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">04 / Work</span>
        </div>
        <div className="md:col-span-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f1f5f9]">Experience</h2>
        </div>
      </div>

      <div className="space-y-0">
        {experience.map((exp, i) => {
          const typeConfig = getTypeConfig(exp.type);
          return (
            <div
              key={i}
              className="group grid md:grid-cols-12 gap-4 py-8 border-b border-[#1e1e24] last:border-b-0 hover:bg-[#0c0c10]/50 -mx-4 px-4 rounded-lg transition-colors duration-300"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-[#334155]">{typeConfig.icon}</span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold text-[#f1f5f9] group-hover:text-[#22d3ee] transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-[#64748b] mt-1">{exp.organization}</p>
              </div>
              
              <div className="md:col-span-3">
                <span
                  className="inline-block text-xs font-mono px-2 py-1 rounded border"
                  style={{ 
                    borderColor: `${typeConfig.color}30`,
                    color: typeConfig.color 
                  }}
                >
                  {exp.type}
                </span>
              </div>
              
              <div className="md:col-span-4">
                <span className="text-sm font-mono text-[#64748b]">
                  {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                </span>
              </div>
              
              {exp.description && (
                <div className="md:col-span-12 md:pl-[8.33%] mt-4">
                  <p className="text-[#94a3b8] leading-relaxed">{exp.description}</p>
                </div>
              )}
              
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="md:col-span-12 md:pl-[8.33%] mt-4">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#94a3b8]">
                        <span className="text-[#22d3ee] mt-1">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {exp.skillsGained && exp.skillsGained.length > 0 && (
                <div className="md:col-span-12 md:pl-[8.33%] mt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsGained.map((skill, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 bg-[#0f0f14] text-[#64748b] border border-[#1e1e24] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
