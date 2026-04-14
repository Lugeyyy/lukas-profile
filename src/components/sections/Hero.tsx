import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { Github, ArrowDown } from "lucide-react";

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
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-[#64748b] tracking-widest uppercase">Portfolio</span>
            <span className="w-8 h-px bg-gradient-to-r from-[#22d3ee] to-transparent"></span>
          </div>
        </div>
        
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8 ${mounted ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          {personal.preferredName || personal.fullName}
          <span className="block text-[#64748b]">Genis</span>
        </h1>
        
        <div className={`max-w-xl ml-1 ${mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-6">
            {personal.tagline}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#64748b]">
            {location && (
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]"></span>
                {location}
              </span>
            )}
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
              {personal.age} years old
            </span>
          </div>
        </div>
        
        <div className={`mt-16 flex items-center gap-6 ${mounted ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
          <a 
            href="https://github.com/Lugeyyy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#64748b] hover:text-[#22d3ee] transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-mono">@Lugeyyy</span>
            <span className="w-0 group-hover:w-4 h-px bg-[#22d3ee] transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${mounted ? 'animate-fade-in stagger-5' : 'opacity-0'}`}>
        <span className="text-xs font-mono text-[#334155] tracking-widest uppercase">Scroll</span>
        <div className="animate-float">
          <ArrowDown className="w-4 h-4 text-[#334155]" />
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#1e1e24] to-transparent"></div>
    </section>
  );
}
