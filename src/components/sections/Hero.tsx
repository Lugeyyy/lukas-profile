import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { Github } from "lucide-react";

export function Hero() {
  const { data } = useData();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const personal = data?.personal;
  if (!personal) return null;

  const location = [personal.location?.city, personal.location?.country]
    .filter(Boolean)
    .filter(v => v !== "TBD")
    .join(", ");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fafaf9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gradient-to-r from-[#d97706] to-transparent"></span>
            <span className="text-xs font-mono text-[#78716c] tracking-widest uppercase">Portfolio</span>
          </div>
        </div>

        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6 ${mounted ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          {personal.preferredName || personal.fullName}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#c2410c]">
            Genis
          </span>
        </h1>

        <div className={`max-w-xl ${mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-[#a8a29e] leading-relaxed mb-6">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#78716c]">
            {location && (
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                {location}
              </span>
            )}
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]"></span>
              {personal.age} years
            </span>
          </div>
        </div>

        <div className={`mt-12 flex items-center gap-6 ${mounted ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <a
            href="https://github.com/Lugeyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#78716c] hover:text-[#d97706] transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-mono">@Lugeyyy</span>
            <span className="w-0 group-hover:w-4 h-px bg-[#d97706] transition-all duration-300"></span>
          </a>
        </div>
      </div>

      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${mounted ? 'animate-fade-in stagger-5' : 'opacity-0'}`}>
        <span className="text-xs font-mono text-[#57534e] tracking-widest uppercase">Scroll</span>
        <div className="animate-float">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#57534e" strokeWidth="1.5">
            <path d="M8 3v10M4 9l4 4 4-4" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#44403c] to-transparent"></div>
    </section>
  );
}
