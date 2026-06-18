import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";

export function Bio() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const bio = data?.bio;

  if (!bio) return null;

  const hasContent = bio.official || bio.medium || bio.long;
  if (!hasContent) return null;

  return (
    <section id="bio" className="py-24 md:py-32 border-b border-[#44403c]">
      <div ref={ref} className={`grid md:grid-cols-12 gap-8 transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">01 / About</span>
        </div>

        <div className="md:col-span-10 space-y-6">
          {bio.official && (
            <p className="text-2xl md:text-3xl font-light text-[#fafaf9] leading-snug">
              {bio.official}
            </p>
          )}

          {bio.medium && (
            <p className="text-[#a8a29e] leading-relaxed max-w-2xl">
              {bio.medium}
            </p>
          )}

          {bio.long && (
            <p className="text-[#78716c] leading-relaxed max-w-2xl">
              {bio.long}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
