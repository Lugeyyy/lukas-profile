import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";
import { School } from "lucide-react";

export function Education() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const education = data?.education;

  if (!education) return null;

  const hasContent = education.currentSchool || education.gradeLevel ||
    (education.academicInterests && education.academicInterests.length > 0) ||
    (education.favoriteSubjects && education.favoriteSubjects.length > 0) ||
    (education.gpaOrAverage && education.gpaOrAverage !== "TBD") ||
    (education.awards && education.awards.length > 0);

  if (!hasContent) return null;

  return (
    <section id="education" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">05 / Learn</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Education</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#d97706]/10 flex items-center justify-center">
                  <School className="w-6 h-6 text-[#d97706]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#fafaf9]">
                    {education.currentSchool || "High School Student"}
                  </h3>
                  <p className="text-[#78716c]">{education.gradeLevel}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {education.gpaOrAverage && education.gpaOrAverage !== "TBD" && (
                  <div>
                    <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide">GPA / Average</span>
                    <p className="text-[#fafaf9] mt-1">{education.gpaOrAverage}</p>
                  </div>
                )}

                {education.favoriteSubjects && education.favoriteSubjects.length > 0 && (
                  <div>
                    <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide">Favorite Subjects</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {education.favoriteSubjects.map((subject, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-[#1c1917] text-[#a8a29e] border border-[#44403c] rounded"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {education.academicInterests && education.academicInterests.length > 0 && (
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide block mb-4">Interests</span>
              <div className="space-y-3">
                {education.academicInterests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#a8a29e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0"></span>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {education.awards && education.awards.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#44403c]">
            <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide block mb-4">Awards & Honors</span>
            <ul className="space-y-2">
              {education.awards.map((award, i) => (
                <li key={i} className="flex items-start gap-3 text-[#a8a29e]">
                  <span className="text-[#d97706] shrink-0">★</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
