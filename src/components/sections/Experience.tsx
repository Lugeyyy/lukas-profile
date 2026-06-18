import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getTypeColor(type: string): string {
  switch (type) {
    case "job": return "#d97706";
    case "freelance": return "#f59e0b";
    case "teaching": return "#c2410c";
    case "volunteer": return "#854d0e";
    default: return "#78716c";
  }
}

export function Experience() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const experience = data?.experience || [];

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">04 / Work</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Experience</h2>
          </div>
        </div>

        <div className="space-y-0 relative">
          <div className="absolute left-[1.625rem] md:left-[1.625rem] top-0 bottom-0 w-px bg-[#44403c] hidden md:block"></div>

          {experience.map((exp, i) => {
            const color = getTypeColor(exp.type);
            return (
              <div
                key={i}
                className="group grid md:grid-cols-12 gap-4 py-8 border-b border-[#44403c] last:border-b-0 hover:bg-[#292524]/50 -mx-4 px-4 rounded-lg transition-colors duration-300"
              >
                <div className="md:col-span-1 flex md:justify-center relative">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 ring-2 ring-[#1c1917]"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold text-[#fafaf9] group-hover:text-[#d97706] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-[#78716c] mt-1">{exp.organization}</p>
                </div>

                <div className="md:col-span-3">
                  <span
                    className="inline-block text-xs font-mono px-2 py-1 rounded border"
                    style={{
                      borderColor: `${color}40`,
                      color: color,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <span className="text-sm font-mono text-[#57534e]">
                    {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                  </span>
                </div>

                {exp.description && (
                  <div className="md:col-span-12 md:pl-[8.33%] mt-4">
                    <p className="text-[#a8a29e] leading-relaxed">{exp.description}</p>
                  </div>
                )}

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="md:col-span-12 md:pl-[8.33%] mt-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#a8a29e]">
                          <span className="text-[#d97706] mt-1 shrink-0">→</span>
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
                          className="text-xs px-3 py-1 bg-[#1c1917] text-[#78716c] border border-[#44403c] rounded-full"
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
      </div>
    </section>
  );
}
