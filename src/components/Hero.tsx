import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-fade-in" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 animate-scale-in">
            Computing Science Student
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Krish Rajani
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          AI/ML Enthusiast & Software Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          BSc (Honors) in Computing Science @ University of Alberta • Expected May 2027
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/krajani21" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/krishrajani21" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            asChild
          >
            <a href="mailto:krajani@ualberta.ca">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-6 w-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};
