import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, GraduationCap, Send } from "lucide-react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text-secondary" data-testid="contact-title">
            Let's Connect
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="get-in-touch-title">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="contact-description">
              I'm always interested in discussing new opportunities, innovative projects,
              or just having a conversation about technology. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                data-testid="contact-email"
              >
                <Mail className="text-primary" />
                <span>rehaan.ahmad@email.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                data-testid="contact-location"
              >
                <MapPin className="text-secondary" />
                <span>Kanpur, India</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                data-testid="contact-education"
              >
                <GraduationCap className="text-accent" />
                <span>Kanpur Institute of Technology</span>
              </motion.div>
            </div>

            <div className="flex space-x-6 mt-8">
              <motion.a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid="social-linkedin"
              >
                <SiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid="social-github"
              >
                <SiGithub size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid="social-twitter"
              >
                <SiX size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-muted/20 border-border focus:ring-primary focus:border-primary"
                  placeholder="Your Name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-muted/20 border-border focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-muted/20 border-border focus:ring-primary focus:border-primary"
                  placeholder="Your message..."
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon bg-transparent hover:bg-primary font-semibold flex items-center gap-2"
                data-testid="submit-button"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
