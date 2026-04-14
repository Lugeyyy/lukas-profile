import { useData } from "../../context/DataContext";

export function Bio() {
  const { data } = useData();
  const bio = data?.bio;

  if (!bio) return null;

  return (
    <section className="py-24 md:py-32 border-b border-[#1e1e24]">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-2">
          <span className="text-xs font-mono text-[#22d3ee] tracking-widest uppercase">01 / About</span>
        </div>
        
        <div className="md:col-span-10 space-y-8">
          {bio.official && (
            <p className="text-2xl md:text-3xl font-light text-[#f1f5f9] leading-snug">
              {bio.official}
            </p>
          )}
          
          {bio.medium && (
            <p className="text-[#94a3b8] leading-relaxed max-w-2xl">
              {bio.medium}
            </p>
          )}
          
          {bio.long && (
            <p className="text-[#64748b] leading-relaxed max-w-2xl">
              {bio.long}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
