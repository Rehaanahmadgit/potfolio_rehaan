import { motion } from "framer-motion";
import { Globe, Target, Dumbbell, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text-primary" data-testid="about-title">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="who-i-am-title">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-description-1">
                I'm a passionate Software Developer and B.Tech candidate at Kanpur Institute of Technology,
                graduating in 2026. I specialize in Java, Spring Boot, and the MERN stack, with a focus on
                building scalable, efficient web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-description-2">
                My journey in software development is driven by curiosity and a commitment to continuous learning.
                I enjoy tackling complex problems and transforming them into elegant, user-friendly solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-secondary" data-testid="fun-facts-title">
                Fun Facts
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  data-testid="fact-languages"
                >
                  <Globe className="text-accent" />
                  <span><strong>Languages:</strong> Hindi, English, Urdu, Arabic</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  data-testid="fact-interests"
                >
                  <Target className="text-primary" />
                  <span><strong>Interests:</strong> Competitive Programming, System Design</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  data-testid="fact-hobbies"
                >
                  <Dumbbell className="text-secondary" />
                  <span><strong>Hobbies:</strong> Fitness, Open Source Contributing</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  data-testid="fact-github"
                >
                  <Zap className="text-accent" />
                  <span><strong>GitHub:</strong> 10+ Active Commits</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-primary" data-testid="education-timeline-title">
            Education Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-connector rounded-full"></div>

            <div className="space-y-12">
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-5/12 text-right">
                  <div className="glass-card p-6 rounded-xl" data-testid="education-intermediate">
                    <h4 className="text-xl font-bold text-accent">Intermediate Education</h4>
                    <p className="text-muted-foreground">Completed Foundation Studies</p>
                    <span className="text-sm text-primary">2020-2022</span>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full neon-glow"></div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>

              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-secondary rounded-full neon-glow-purple"></div>
                </div>
                <div className="w-5/12">
                  <div className="glass-card p-6 rounded-xl" data-testid="education-btech">
                    <h4 className="text-xl font-bold text-secondary">B.Tech in Computer Science</h4>
                    <p className="text-muted-foreground">Kanpur Institute of Technology</p>
                    <span className="text-sm text-accent">2022-2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
