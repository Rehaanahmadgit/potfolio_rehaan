import { motion } from "framer-motion";
import { Box, Code, Coffee } from "lucide-react";
import { SiSpring, SiReact, SiNodedotjs } from "react-icons/si";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  const experiences = [
    {
      company: "CuboSquare",
      role: "Software Developer",
      icon: <Box className="text-3xl text-primary" />,
      color: "primary",
      achievements: [
        "MERN Stack Development",
        "API Performance Optimization",
        "Authentication Systems"
      ],
      technologies: ["MERN", "REST", "Auth"]
    },
    {
      company: "Code Alpha",
      role: "Full Stack Intern",
      icon: <Code className="text-3xl text-secondary" />,
      color: "secondary",
      achievements: [
        "Spring Boot Applications",
        "Microservices Architecture",
        "REST API Development"
      ],
      technologies: ["Spring Boot", "Microservices"]
    },
    {
      company: "CODSOFT",
      role: "Java Intern",
      icon: <Coffee className="text-3xl text-accent" />,
      color: "accent",
      achievements: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Advanced Java Projects"
      ],
      technologies: ["Java", "OOP", "DSA"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text-secondary" data-testid="experience-title">
            Experience & Internships
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5, 
                translateZ: 20,
                transition: { duration: 0.3 }
              }}
              data-testid={`experience-${exp.company.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`glass-card p-6 rounded-2xl h-full group hover:neon-glow${exp.color === 'secondary' ? '-purple' : exp.color === 'accent' ? '-teal' : ''} transition-all duration-300`}>
                <div className="mb-4">
                  <div className="mb-3">{exp.icon}</div>
                  <h3 className={`text-xl font-bold text-${exp.color}`} data-testid={`company-${exp.company.toLowerCase().replace(" ", "-")}`}>
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`role-${exp.company.toLowerCase().replace(" ", "-")}`}>
                    {exp.role}
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-2" data-testid={`achievement-${index}-${i}`}>
                      <div className={`w-2 h-2 rounded-full bg-${exp.color === 'primary' ? 'accent' : 'primary'}`}></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <span className={`text-xs text-${exp.color} font-mono`} data-testid={`technologies-${exp.company.toLowerCase().replace(" ", "-")}`}>
                    {exp.technologies.join(" • ")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
