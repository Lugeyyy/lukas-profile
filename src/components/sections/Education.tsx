import { useData } from "../../context/DataContext";
import { School } from "lucide-react";

export function Education() {
  const { data } = useData();
  const education = data?.education;

  if (!education) return null;

  const hasContent = education.currentSchool || education.gradeLevel || 
    (education.academicInterests && education.academicInterests.length > 0) ||
    (education.favoriteSubjects && education.favoriteSubjects.length > 0) ||
    (education.gpaOrAverage && education.gpaOrAverage !== "TBD") ||
    (education.awards && education.awards.length > 0);

  if (!hasContent) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">05 / Learn</span>
        </div>
        <div className="md:col-span-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f1f5f9]">Education</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center">
                <School className="w-6 h-6 text-[#22d3ee]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f1f5f9]">
                  {education.currentSchool || "High School Student"}
                </h3>
                <p className="text-[#64748b]">{education.gradeLevel}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {education.gpaOrAverage && education.gpaOrAverage !== "TBD" && (
                <div>
                  <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide">GPA / Average</span>
                  <p className="text-[#f1f5f9] mt-1">{education.gpaOrAverage}</p>
                </div>
              )}

              {education.favoriteSubjects && education.favoriteSubjects.length > 0 && (
                <div>
                  <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide">Favorite Subjects</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {education.favoriteSubjects.map((subject, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-[#0f0f14] text-[#94a3b8] border border-[#1e1e24] rounded"
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
            <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide block mb-4">Interests</span>
            <div className="space-y-3">
              {education.academicInterests.map((interest, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[#94a3b8]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]"></span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {education.awards && education.awards.length > 0 && (
        <div className="mt-8 pt-8 border-t border-[#1e1e24]">
          <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide block mb-4">Awards & Honors</span>
          <ul className="space-y-2">
            {education.awards.map((award, i) => (
              <li key={i} className="flex items-start gap-3 text-[#94a3b8]">
                <span className="text-[#84cc16]">★</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
