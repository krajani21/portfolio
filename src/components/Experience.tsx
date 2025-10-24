import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "IT Service Desk Intern",
    company: "Apex Utilities",
    location: "Leduc, AB",
    period: "Sept 2025 – Present",
    achievements: [
      "Developed PowerShell automation scripts to streamline IT operations, including a file management tool that standardized 650+ filenames and reduced manual processing by 2+ hours weekly.",
      "Contributing to requirements gathering and system design for an AI agent projected to automate 50+ support tickets and reduce IT workload by 3+ hours weekly.",
    ],
    color: "from-primary to-accent",
  },
  {
    title: "Software Engineer Intern",
    company: "Wrise",
    location: "Calgary, AB",
    period: "May 2025 – Sept 2025",
    achievements: [
      "Implemented a full-stack AI platform using TypeScript and React to ingest and process up to 6+ hours of social media content per creator via OAuth2 REST APIs.",
      "Optimized video transcription pipeline, cutting processing time by 64% by eliminating redundant API calls.",
      "Led development of an AI-powered chatbot using LangChain and GPT-4.1 with retrieval augmented generation, achieving 99% relevance in internal testing.",
    ],
    color: "from-secondary to-primary",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block" />

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-primary font-semibold mb-2">
                        <Briefcase className="h-5 w-5" />
                        {exp.company}
                      </div>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {exp.achievements && (
                    <ul className="space-y-3 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`} />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
