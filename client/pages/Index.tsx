import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Code2,
  Palette,
  Zap,
  Globe,
  ChevronDown,
  Moon,
  Sun
} from "lucide-react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "🐍 Python", level: 90, description: "Writing clean, efficient scripts for automation, data analysis, and project development." },
    { name: "☕ Java", level: 85, description: "Building robust object-oriented applications with solid logic and structure." },
    { name: "⚙️ C++", level: 80, description: "Developing high-performance programs and solving complex computational problems." },
    { name: "🌐 C", level: 75, description: "Mastering low-level programming for system-level tasks and logic building." },
    { name: "🎨 HTML", level: 85, description: "Creating structured, semantic web pages with clear content organization." },
    { name: "🎯 CSS", level: 80, description: "Designing visually appealing, responsive, and user-friendly interfaces." },
    { name: "🤖 Machine Learning", level: 75, description: "Building and training models to solve real-world problems using data-driven approaches." },
    { name: "🧠 Problem-Solving", level: 95, description: "Tackling challenges with logical thinking, creativity, and analytical skills." },
    { name: "📊 Data Analysis", level: 80, description: "Extracting insights from data to support smart decision-making." },
    { name: "🚀 Project Development", level: 85, description: "Turning ideas into functional, polished, and impactful solutions." }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team chat, and advanced analytics built using modern web technologies.",
      tags: ["Next.js", "PostgreSQL", "Socket.io", "TypeScript"],
      link: "#",
      image: "/placeholder.svg"
    },
    {
      title: "AI Content Generator",
      description: "An intelligent content generation platform that uses machine learning to create engaging copy for marketing and social media.",
      tags: ["Python", "OpenAI API", "React", "Flask"],
      link: "#",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">
              Portfolio
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-violet-100/20 dark:to-violet-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-violet-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Code2 className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Sayan Maiti</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            &nbsp;— 🚀 an aspiring CSE engineer passionate about 💻 coding, 🧠 problem-solving, and 🎯 building creative tech solutions.
            <div>
              <br />
            </div>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-6 h-6 text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <div>
                <span>
                  <span>
                    <span>
                      👋 Hi, I'm Sayan Maiti — a passionate and curious B.Tech CSE student at MAKAUT 🎓 with a strong interest in 🧠 problem-solving, 🤖 machine learning, and 💡 technology. I enjoy working with 🐍 Python, ☕ Java, ⚙️ C++, 🌐 C, 🎨 HTML, 🎯 CSS, and building projects that combine creativity 🎭 and logic 🧩. My goal is to become a skilled 💻 software developer who can create ⚡ efficient, 📈 impactful, and 🤝 user-friendly solutions.
                    </span>
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <span>
                    <span>
                      <br />
                    </span>
                  </span>
                </span>
              </div>
              <div>
                <span>
                  When I'm not coding ⌨️, I love exploring 🌍 new tech trends, sharpening my skills through 🏆 challenges, and learning something new 📚 every day — because in tech, there's always something exciting ✨ waiting to be discovered.
                  <br />
                </span>
                <br />
              </div>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine learning</h3>
                    <p className="text-muted-foreground">
                      Building and training models to solve real-world problems using data-driven approaches.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-muted-foreground">
                      Creating intuitive and beautiful user interfaces that enhance user experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performance</h3>
                    <p className="text-muted-foreground">
                      Optimizing applications for speed, accessibility, and search engine visibility.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-violet-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-violet-600/20 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-primary/60" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:hello@sayanmaiti.dev" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@sayanmaiti.dev</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Sayan Maiti. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
