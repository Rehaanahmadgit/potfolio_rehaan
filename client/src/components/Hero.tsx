import { motion } from "framer-motion";
import { Download, Code, Mail } from "lucide-react";
import { SiReact, SiNodedotjs } from "react-icons/si";
import { Coffee } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          className="floating mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
            alt="Rehaan Ahmad"
            className="w-32 h-32 rounded-full mx-auto border-4 border-primary neon-glow object-cover"
            data-testid="profile-image"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="gradient-text" data-testid="hero-name">
            Rehaan Ahmad
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="hero-title"
        >
          Software Developer | Full Stack Engineer | Java & MERN Specialist
        </motion.p>

        <motion.div
          className="typewriter text-lg md:text-xl text-accent mb-12 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          data-testid="hero-tagline"
        >
          "Turning complex problems into elegant, functional solutions."
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="btn-neon px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="download-resume-button"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="btn-neon-secondary px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(181, 68, 255, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="view-projects-button"
          >
            <Code size={20} />
            View My Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="btn-neon-accent px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 183, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="lets-connect-button"
          >
            <Mail size={20} />
            Let's Connect
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Coffee size={48} className="text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 floating"
        style={{ animationDelay: "-2s" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <SiReact size={48} className="text-accent" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 floating"
        style={{ animationDelay: "-4s" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <SiNodedotjs size={48} className="text-secondary" />
      </motion.div>
    </section>
  );
}
