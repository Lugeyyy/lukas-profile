import { useData } from "../../context/DataContext";
import { Target, Rocket, Compass } from "lucide-react";

export function Goals() {
  const { data } = useData();
  const goals = data?.goals;

  if (!goals) return null;

  const hasContent = (goals.shortTerm && goals.shortTerm.length > 0) ||
    (goals.longTerm && goals.longTerm.length > 0) ||
    (goals.dreamCareer && goals.dreamCareer.length > 0) ||
    (goals.whyThisSchool && goals.whyThisSchool !== "TBD");

  if (!hasContent) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">06 / Future</span>
        </div>
        <div className="md:col-span-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f1f5f9]">Aspirations</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {goals.shortTerm && goals.shortTerm.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#22d3ee]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Short-Term</span>
            </div>
            <ul className="space-y-4">
              {goals.shortTerm.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] mt-2 flex-shrink-0"></span>
                  <span className="text-[#94a3b8] leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {goals.longTerm && goals.longTerm.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#84cc16]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-5 h-5 text-[#84cc16]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Long-Term</span>
            </div>
            <ul className="space-y-4">
              {goals.longTerm.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] mt-2 flex-shrink-0"></span>
                  <span className="text-[#94a3b8] leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {goals.dreamCareer && goals.dreamCareer.length > 0 && (
          <div className="bg-[#0c0c10] border border-[#1e1e24] rounded-lg p-6 hover:border-[#dc2626]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-5 h-5 text-[#dc2626]" />
              <span className="text-sm font-mono text-[#64748b] uppercase tracking-wide">Dream Career</span>
            </div>
            <ul className="space-y-4">
              {goals.dreamCareer.map((career, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-0.5">★</span>
                  <span className="text-[#94a3b8] leading-relaxed">{career}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {goals.whyThisSchool && goals.whyThisSchool !== "TBD" && (
        <div className="mt-8 p-6 bg-[#0c0c10] border border-[#1e1e24] rounded-lg">
          <span className="text-xs font-mono text-[#64748b] uppercase tracking-wide block mb-3">Why This School?</span>
          <p className="text-[#94a3b8] leading-relaxed">{goals.whyThisSchool}</p>
        </div>
      )}
    </section>
  );
}
