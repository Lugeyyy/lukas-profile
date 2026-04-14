import { useData } from "../../context/DataContext";
import { Code2, Languages, Music, Dumbbell } from "lucide-react";

function getLevelIndicator(level: string) {
  const configs = {
    advanced: { bars: 4, color: "#84cc16" },
    intermediate: { bars: 3, color: "#22d3ee" },
    beginner: { bars: 2, color: "#64748b" },
    fluent: { bars: 4, color: "#84cc16" },
    conversational: { bars: 3, color: "#22d3ee" },
    native: { bars: 4, color: "#84cc16" },
    basic: { bars: 2, color: "#64748b" },
  };
  return configs[level as keyof typeof configs] || { bars: 1, color: "#64748b" };
}

export function Skills() {
  const { data } = useData();
  const skills = data?.skills;

  if (!skills) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">03 / Skills</span>
        </div>
        <div className="md:col-span-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f1f5f9]">Expertise</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.programming && skills.programming.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-5 h-5 text-[#22d3ee]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Code</span>
            </div>
            <div className="space-y-4">
              {skills.programming.map((skill, i) => {
                const level = getLevelIndicator(skill.level);
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#f1f5f9] font-medium">{skill.name}</span>
                      <span className="text-xs text-[#64748b]">{skill.yearsExperience}y</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className={`h-1 flex-1 rounded-full ${
                            j < level.bars ? "" : "bg-[#1e1e24]"
                          }`}
                          style={{ backgroundColor: j < level.bars ? level.color : undefined }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {skills.languages && skills.languages.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-5 h-5 text-[#3b82f6]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Languages</span>
            </div>
            <div className="space-y-4">
              {skills.languages.map((lang, i) => {
                const level = getLevelIndicator(lang.level);
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#f1f5f9] font-medium">{lang.name}</span>
                      <span className="text-xs text-[#64748b]">{lang.level}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-1 flex-1 rounded-full"
                          style={{ backgroundColor: j < level.bars ? level.color : "#1e1e24" }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {skills.music && skills.music.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-5 h-5 text-[#dc2626]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Music</span>
            </div>
            <div className="space-y-4">
              {skills.music.map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#f1f5f9] font-medium">{m.instrument}</span>
                    <span className="text-xs text-[#64748b]">{m.yearsExperience}y</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {m.styles.map((style, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-[#0f0f14] text-[#94a3b8] border border-[#1e1e24] rounded"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.martialArts && skills.martialArts.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-5 h-5 text-[#84cc16]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Combat</span>
            </div>
            <div className="space-y-4">
              {skills.martialArts.map((ma, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#f1f5f9] font-medium">{ma.discipline}</span>
                    <span className="text-xs text-[#64748b]">{ma.yearsTraining}y</span>
                  </div>
                  {ma.beltOrLevel && ma.beltOrLevel !== "TBD" && (
                    <span className="inline-block text-xs px-2 py-1 bg-[#84cc16]/10 text-[#84cc16] rounded">
                      {ma.beltOrLevel}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {skills.softSkills && skills.softSkills.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[#1e1e24]">
          <div className="flex flex-wrap gap-3">
            {skills.softSkills.map((skill, i) => (
              <span
                key={i}
                className="text-sm px-4 py-2 bg-[#0c0c10] text-[#94a3b8] border border-[#1e1e24] rounded-full hover:border-[#22d3ee]/50 hover:text-[#22d3ee] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
