import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-primary mb-4" data-testid="footer-name">
              Rehaan Ahmad
            </h4>
            <p className="text-muted-foreground text-sm" data-testid="footer-description">
              Software Developer passionate about creating innovative solutions
              with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              <motion.button
                onClick={() => scrollToSection("hero")}
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                data-testid="footer-link-home"
              >
                Home
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                data-testid="footer-link-projects"
              >
                Projects
              </motion.button>
              <motion.button
                onClick={() => window.open("#", "_blank")}
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                data-testid="footer-link-resume"
              >
                Resume
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                data-testid="footer-link-contact"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quote-title">
              Quote
            </h4>
            <p className="text-muted-foreground text-sm italic" data-testid="footer-quote">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2024 Rehaan Ahmad. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
