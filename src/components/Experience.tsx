import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "PCL Construction",
    location: "Edmonton, AB",
    period: "May 2026 – Aug 2026",
    achievements: [
      "Developing enterprise data visualization tools in C# and TypeScript to support ML and data science initiatives.",
    ],
    color: "from-accent to-secondary",
  },
  {
    title: "Software Development Intern",
    company: "Apex Utilities",
    location: "Leduc, AB",
    period: "Sept 2025 – May 2026",
    achievements: [
      "Deployed a RAG-based chatbot using Python, Azure, and PostgreSQL vector storage, deflecting repetitive helpdesk tickets for 150 employees via a 0.8 cosine similarity threshold, reducing manual triage workload by 10%.",
      "Built a TF-IDF pipeline in Python to use 10K+ tickets to filter IT documentation and improve RAG quality by 70%.",
      "Indexed IT documentation using OpenAI embeddings via PostgreSQL, enabling semantic search on the knowledge base.",
      "Containerized the FastAPI app with Docker and deployed to Azure, powering a Teams-integrated chat interface.",
    ],
    color: "from-primary to-accent",
  },
  {
    title: "Software Engineer Intern",
    company: "Wrise",
    location: "Calgary, AB",
    period: "May 2025 – Sept 2025",
    achievements: [
      "Developed a platform in React and TypeScript to enable 500+ people to interact with creator-trained AI models.",
      "Optimized video transcription pipeline by replacing Whisper API calls with SRT parsing and deduplication, cutting processing time by 60% and reducing transcript token load by 70%, thus lowering OpenAI API costs.",
      "Built a RAG pipeline using LangChain and GPT-4 to embed video transcripts into Supabase for contextual answers.",
      "Integrated Stripe subscription flow with access gating, to re-enable chatbot access upon payment verification.",
    ],
    color: "from-secondary to-primary",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block" />

                <div className="bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
