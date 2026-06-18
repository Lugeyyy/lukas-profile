import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";
import { Code2, Languages, Music, Dumbbell } from "lucide-react";

const levelBars: Record<string, number> = {
  advanced: 4,
  intermediate: 3,
  beginner: 2,
  fluent: 4,
  conversational: 3,
  native: 4,
  basic: 2,
};

function getBars(level: string): number {
  return levelBars[level] ?? 1;
}

const categoryColors = {
  programming: "#d97706",
  languages: "#f59e0b",
  music: "#c2410c",
  martialArts: "#854d0e",
};

export function Skills() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const skills = data?.skills;

  if (!skills) return null;

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">03 / Skills</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Expertise</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.programming && skills.programming.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#d97706]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-[#d97706]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Code</span>
              </div>
              <div className="space-y-4">
                {skills.programming.map((skill, i) => {
                  const bars = getBars(skill.level);
                  return (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#fafaf9] font-medium">{skill.name}</span>
                        <span className="text-xs text-[#78716c]">{skill.yearsExperience}y</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            className={`h-1 flex-1 rounded-full ${j < bars ? "" : "bg-[#44403c]"}`}
                            style={{ backgroundColor: j < bars ? categoryColors.programming : undefined }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {skills.languages && skills.languages.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#f59e0b]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Languages</span>
              </div>
              <div className="space-y-4">
                {skills.languages.map((lang, i) => {
                  const bars = getBars(lang.level);
                  return (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#fafaf9] font-medium">{lang.name}</span>
                        <span className="text-xs text-[#78716c]">{lang.level}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, j) => (
                          <div
                            key={j}
                            className={`h-1 flex-1 rounded-full ${j < bars ? "" : "bg-[#44403c]"}`}
                            style={{ backgroundColor: j < bars ? categoryColors.languages : undefined }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {skills.music && skills.music.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#c2410c]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-5 h-5 text-[#c2410c]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Music</span>
              </div>
              <div className="space-y-4">
                {skills.music.map((m, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#fafaf9] font-medium">{m.instrument}</span>
                      <span className="text-xs text-[#78716c]">{m.yearsExperience}y</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {m.styles.map((style, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 bg-[#1c1917] text-[#a8a29e] border border-[#44403c] rounded"
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
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#854d0e]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Dumbbell className="w-5 h-5 text-[#854d0e]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Combat</span>
              </div>
              <div className="space-y-4">
                {skills.martialArts.map((ma, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#fafaf9] font-medium">{ma.discipline}</span>
                      <span className="text-xs text-[#78716c]">{ma.yearsTraining}y</span>
                    </div>
                    {ma.beltOrLevel && ma.beltOrLevel !== "TBD" && (
                      <span className="inline-block text-xs px-2 py-1 bg-[#d97706]/10 text-[#d97706] rounded">
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
          <div className="mt-8 pt-8 border-t border-[#44403c]">
            <div className="flex flex-wrap gap-3">
              {skills.softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 bg-[#292524] text-[#a8a29e] border border-[#44403c] rounded-full hover:border-[#d97706]/50 hover:text-[#d97706] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
