import { useData } from "../../context/DataContext";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const { data } = useData();
  const contact = data?.contact;
  const links = data?.links;

  if (!contact) return null;

  const hasContent = contact.email || contact.phone || contact.availableForSummerJobs !== undefined;
  if (!hasContent && !links?.github && !links?.linkedin) return null;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#f1f5f9]">Let's Connect</h3>
        <p className="text-[#64748b] text-sm max-w-md">
          Interested in collaborating or have opportunities? Feel free to reach out.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 pt-2">
          {contact.email && contact.email !== "your@email.com" && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-[#64748b] hover:text-[#22d3ee] transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-mono">{contact.email}</span>
            </a>
          )}
          
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-[#64748b] hover:text-[#22d3ee] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-mono">{contact.phone}</span>
            </a>
          )}
          
          {contact.availableForSummerJobs !== undefined && (
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${contact.availableForSummerJobs ? "bg-[#84cc16]" : "bg-[#64748b]"}`}></span>
              <span className="text-sm text-[#64748b]">
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
            className="group flex items-center gap-2 px-4 py-2 bg-[#0c0c10] border border-[#1e1e24] rounded-lg hover:border-[#22d3ee]/50 transition-colors duration-300"
          >
            <Github className="w-4 h-4 text-[#64748b] group-hover:text-[#22d3ee] transition-colors duration-300" />
            <span className="text-sm text-[#64748b] group-hover:text-[#22d3ee] transition-colors duration-300">GitHub</span>
          </a>
        )}
        
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-[#0c0c10] border border-[#1e1e24] rounded-lg hover:border-[#3b82f6]/50 transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4 text-[#64748b] group-hover:text-[#3b82f6] transition-colors duration-300" />
            <span className="text-sm text-[#64748b] group-hover:text-[#3b82f6] transition-colors duration-300">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
