import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";
import { Target, Rocket, Compass } from "lucide-react";

export function Goals() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const goals = data?.goals;

  if (!goals) return null;

  const hasContent = (goals.shortTerm && goals.shortTerm.length > 0) ||
    (goals.longTerm && goals.longTerm.length > 0) ||
    (goals.dreamCareer && goals.dreamCareer.length > 0) ||
    (goals.whyThisSchool && goals.whyThisSchool !== "TBD");

  if (!hasContent) return null;

  return (
    <section id="goals" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">06 / Future</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Aspirations</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {goals.shortTerm && goals.shortTerm.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#d97706]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-[#d97706]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Short-Term</span>
              </div>
              <ul className="space-y-4">
                {goals.shortTerm.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-2 shrink-0"></span>
                    <span className="text-[#a8a29e] leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {goals.longTerm && goals.longTerm.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#f59e0b]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Long-Term</span>
              </div>
              <ul className="space-y-4">
                {goals.longTerm.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mt-2 shrink-0"></span>
                    <span className="text-[#a8a29e] leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {goals.dreamCareer && goals.dreamCareer.length > 0 && (
            <div className="bg-[#292524] border border-[#44403c] rounded-lg p-6 hover:border-[#c2410c]/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-5 h-5 text-[#c2410c]" />
                <span className="text-sm font-mono text-[#78716c] uppercase tracking-wide">Dream Career</span>
              </div>
              <ul className="space-y-4">
                {goals.dreamCareer.map((career, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c2410c] shrink-0 mt-0.5">★</span>
                    <span className="text-[#a8a29e] leading-relaxed">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {goals.whyThisSchool && goals.whyThisSchool !== "TBD" && (
          <div className="mt-8 p-6 bg-[#292524] border border-[#44403c] rounded-lg">
            <span className="text-xs font-mono text-[#78716c] uppercase tracking-wide block mb-3">Why This School?</span>
            <p className="text-[#a8a29e] leading-relaxed">{goals.whyThisSchool}</p>
          </div>
        )}
      </div>
    </section>
  );
}
