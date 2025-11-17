import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FuelWise",
    description: "Fuel recommendation app that helps users achieve up to 8% cost savings and 7% fuel volume gain, serving 100+ users through live station pricing and geolocation analysis.",
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
      "Built health risk prediction dashboard using Python, TypeScript, and React",
      "Containerized the app with Docker and set up CI/CD with automated unit testing on GitHub Actions, reducing release time by 30%",
    ],
    github: "https://github.com/krajani21/HealthIQ",
    gradient: "from-secondary to-primary",
  },
  {
    title: "Silent Signal",
    description: "Real-time noise violation detector using Python, AWS, and React.js with Google's YAMNet model, achieving 95% accuracy across 521+ sound categories.",
    tech: ["Python", "AWS", "React.js"],
    highlights: [
      "Collaborated to build a real-time noise violation detector using Python, AWS Lambda, React.js and Google's YAMNet model",
      "Achieved 95% accuracy across 521+ sound categories",
    ],
    github: "https://github.com/krajani21/SilentSignal",
    gradient: "from-accent to-secondary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
