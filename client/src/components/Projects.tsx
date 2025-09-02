import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with authentication, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["MERN", "Payment", "Auth"],
      category: ["React", "MongoDB"],
      color: "primary"
    },
    {
      title: "Library Management",
      description: "Spring Boot application for managing book catalogs, user registrations, and borrowing systems.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Spring Boot", "MySQL", "REST API"],
      category: ["Java", "Spring Boot"],
      color: "secondary"
    },
    {
      title: "Student Portal",
      description: "Comprehensive student management system with course registration, grade tracking, and profiles.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JSP", "Servlets", "MySQL"],
      category: ["Java"],
      color: "accent"
    }
  ];

  const filters = ["All", "Java", "React", "Spring Boot", "MongoDB"];

  const filteredProjects = projects.filter(project => 
    selectedFilter === "All" || project.category.includes(selectedFilter)
  );

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text-accent" data-testid="projects-title">
            Featured Projects
          </span>
        </motion.h2>

        {/* Filter Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedFilter === filter
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`filter-${filter.toLowerCase()}`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                translateZ: 20,
                transition: { duration: 0.3 }
              }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`glass-card rounded-2xl overflow-hidden group hover:neon-glow${project.color === 'secondary' ? '-purple' : project.color === 'accent' ? '-teal' : ''} transition-all duration-300`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 text-${project.color}`} data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm" data-testid={`project-description-${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 bg-${project.color}/20 text-${project.color} rounded text-xs`}
                        data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className={`text-${project.color} hover:text-${project.color}/80 transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-testid={`github-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className={`text-${project.color} hover:text-${project.color}/80 transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      data-testid={`external-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
