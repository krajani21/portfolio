import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FuelWise",
    description: "Engineered a fuel recommendation app that helps users achieve up to 8% cost savings and 7% fuel volume gain, serving 100+ users through live station pricing and geolocation analysis.",
    tech: ["MongoDB", "Express.js", "Node.js", "React.js"],
    highlights: [
      "Architected a 3-tier caching system with request collapsing and adaptive rate limiting, cutting API costs by 90% during peak usage",
      "Ranked fuel stations by distance and price using Google Maps API, enabling accurate travel time estimates and smarter fuel recommendations",
    ],
    github: "https://github.com/krajani21/fuelWise",
    gradient: "from-primary to-accent",
  },
  {
    title: "HealthIQ",
    description: "Health risk prediction dashboard with an ML model achieving 83% classification accuracy.",
    tech: ["Python", "TypeScript", "React.js", "scikit-learn", "Docker"],
    highlights: [
      "Built a health risk prediction dashboard using Python, React, and TypeScript with an ML model achieving 83% classification accuracy.",
      "Containerized the app with Docker and set up CI/CD with automated unit testing on GitHub Actions.",
    ],
    github: "https://github.com/krajani21/HealthIQ",
    gradient: "from-secondary to-primary",
  },
  {
    title: "Silent Signal",
    description: "Real-time noise violation detector using Python, AWS, and React.js with Google's YAMNet model.",
    tech: ["Python", "AWS", "React.js"],
    highlights: [
      "Built a real-time noise violation detection prototype using Python, AWS Lambda, and React.js, leveraging Google’s YAMNet model to classify 521+ sound categories with 95% accuracy.",
    ],
    github: "https://github.com/krajani21/SilentSignal",
    gradient: "from-accent to-secondary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} mt-1.5 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group backdrop-blur-sm"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
