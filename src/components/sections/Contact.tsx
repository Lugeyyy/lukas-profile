import { useData } from "../../context/DataContext";
import { useInView } from "../../hooks/useInView";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  const { data } = useData();
  const { ref, inView } = useInView();
  const contact = data?.contact;
  const links = data?.links;

  if (!contact) return null;

  const hasContent = contact.email || contact.phone || contact.availableForSummerJobs !== undefined;
  if (!hasContent && !links?.github && !links?.linkedin) return null;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xs font-mono text-[#d97706] tracking-widest uppercase">07 / Connect</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#fafaf9]">Contact</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-[#292524] border border-[#44403c] rounded-lg p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#fafaf9]">Let's Connect</h3>
            <p className="text-[#78716c] text-sm max-w-md">
              Interested in collaborating or have opportunities? Feel free to reach out.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              {contact.email && contact.email !== "your@email.com" && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-[#78716c] hover:text-[#d97706] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-mono">{contact.email}</span>
                </a>
              )}

              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-[#78716c] hover:text-[#d97706] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-mono">{contact.phone}</span>
                </a>
              )}

              {contact.availableForSummerJobs !== undefined && (
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${contact.availableForSummerJobs ? "bg-[#d97706]" : "bg-[#57534e]"}`}></span>
                  <span className="text-sm text-[#78716c]">
                    {contact.availableForSummerJobs ? "Available for opportunities" : "Not currently available"}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-[#1c1917] border border-[#44403c] rounded-lg hover:border-[#d97706]/50 transition-colors duration-300"
              >
                <Github className="w-4 h-4 text-[#78716c] group-hover:text-[#d97706] transition-colors duration-300" />
                <span className="text-sm text-[#78716c] group-hover:text-[#d97706] transition-colors duration-300">GitHub</span>
              </a>
            )}

            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-[#1c1917] border border-[#44403c] rounded-lg hover:border-[#d97706]/50 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-[#78716c] group-hover:text-[#d97706] transition-colors duration-300" />
                <span className="text-sm text-[#78716c] group-hover:text-[#d97706] transition-colors duration-300">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
