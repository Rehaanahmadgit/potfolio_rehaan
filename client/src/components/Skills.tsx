import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Palette, Server, Database, Award, Trophy, Tag, TrendingUp, Users, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-4xl text-primary mb-4" />,
      color: "primary",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Frontend",
      icon: <Palette className="text-4xl text-secondary mb-4" />,
      color: "secondary",
      skills: [
        { name: "React.js", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "WordPress", level: 70 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-4xl text-accent mb-4" />,
      color: "accent",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-4xl text-primary mb-4" />,
      color: "primary", 
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "Git/Docker", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Java Developer",
      organization: "CodeForSuccess Certified",
      icon: <Tag className="text-3xl text-primary mb-4" />,
      color: "primary"
    },
    {
      title: "MERN Stack",
      organization: "Full Stack Certification", 
      icon: <Award className="text-3xl text-secondary mb-4" />,
      color: "secondary"
    },
    {
      title: "Performance Leader",
      organization: "40% Improvement Achieved",
      icon: <TrendingUp className="text-3xl text-accent mb-4" />,
      color: "accent"
    },
    {
      title: "Team Leader",
      organization: "Led 15+ Developers",
      icon: <Users className="text-3xl text-primary mb-4" />,
      color: "primary"
    },
    {
      title: "Quality Assurance",
      organization: "95%+ Test Coverage",
      icon: <CheckCircle className="text-3xl text-secondary mb-4" />,
      color: "secondary"
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const allSkills = skillCategories.flatMap(category => 
          category.skills.map((skill, index) => `${category.title}-${index}`)
        );
        setAnimatedSkills(allSkills);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text" data-testid="skills-title">
            Skills & Technologies
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <motion.div 
                className="glass-card p-6 rounded-2xl text-center group hover:neon-glow transition-all duration-300 transform-gpu" 
                data-testid={`skill-category-${category.title.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex justify-center">{category.icon}</div>
                <h3 className={`text-xl font-bold mb-6 text-${category.color} font-mono`} data-testid={`category-title-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const skillId = `${category.title}-${skillIndex}`;
                    const isAnimated = animatedSkills.includes(skillId);
                    
                    return (
                      <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium font-sans">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            animate={{ width: isAnimated ? `${skill.level}%` : 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary font-mono" data-testid="certifications-title">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card p-6 rounded-xl text-center group hover:neon-glow transition-all duration-300 transform-gpu"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex justify-center">{cert.icon}</div>
                <h4 className={`font-bold text-${cert.color} font-mono`} data-testid={`cert-title-${cert.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground font-sans" data-testid={`cert-org-${cert.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {cert.organization}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
