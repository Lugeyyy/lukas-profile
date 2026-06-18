import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "bio", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el?.offsetTop ?? 0 };
      });

      const scrollY = window.scrollY + 120;
      let current = "hero";
      for (const s of offsets) {
        if (scrollY >= s.top) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1c1917]/80 backdrop-blur-md border-b border-[#44403c]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          className={`font-mono text-sm transition-colors duration-300 ${
            active === "hero" ? "text-[#d97706]" : "text-[#78716c] hover:text-[#a8a29e]"
          }`}
        >
          LG
        </a>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-all duration-300 ${
                active === s.id
                  ? "text-[#fafaf9] bg-[#d97706]/10"
                  : "text-[#78716c] hover:text-[#a8a29e] hover:bg-[#292524]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#78716c] hover:text-[#fafaf9] transition-colors"
          onClick={() => {
            const menu = document.getElementById("mobile-nav");
            if (menu) menu.classList.toggle("hidden");
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </div>

      <div id="mobile-nav" className="hidden md:hidden border-t border-[#44403c] bg-[#1c1917]/95 backdrop-blur-md">
        <div className="flex flex-col gap-1 px-6 py-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 text-sm font-mono rounded transition-all duration-300 ${
                active === s.id
                  ? "text-[#fafaf9] bg-[#d97706]/10"
                  : "text-[#78716c] hover:text-[#a8a29e]"
              }`}
              onClick={() => {
                document.getElementById("mobile-nav")?.classList.add("hidden");
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
