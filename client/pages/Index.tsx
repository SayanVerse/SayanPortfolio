import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LiveClock } from "@/components/ui/live-clock";
import { AdvancedBackground } from "@/components/ui/advanced-background";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { useInteractiveBackground } from "@/hooks/useInteractiveBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";
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
  Phone,
} from "lucide-react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize interactive features
  useInteractiveBackground();
  useScrollAnimation();
  useMobileOptimization();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Force dark mode always
    const htmlElement = document.documentElement;
    htmlElement.classList.add("dark");
    htmlElement.setAttribute("data-theme", "dark");

    // Force a repaint on mobile devices
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        document.body.style.transform = "translateZ(0)";
        setTimeout(() => {
          document.body.style.transform = "";
        }, 10);
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendarScheduling = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Tomorrow
    startDate.setHours(10, 0, 0, 0); // 10 AM

    const endDate = new Date(startDate);
    endDate.setHours(11, 0, 0, 0); // 11 AM (1 hour meeting)

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const eventDetails = {
      text: "Meeting with Sayan Maiti",
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details:
        "Let's discuss your project and how I can help bring your ideas to life.",
      location: "Online (Google Meet/Zoom)",
      ctz: "Asia/Kolkata",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&ctz=${eventDetails.ctz}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const skills = [
    {
      name: "🐍 Python",
      level: 90,
      description:
        "Writing clean, efficient scripts for automation, data analysis, and project development.",
    },
    {
      name: "☕ Java (Basics)",
      level: 70,
      description:
        "Building basic object-oriented applications with fundamental logic and structure.",
    },
    {
      name: "🤖 Machine Learning with Python",
      level: 80,
      description:
        "Building and training models to solve real-world problems using data-driven approaches.",
    },
    {
      name: "🌐 C (Basics)",
      level: 80,
      description:
        "Understanding low-level programming for system-level tasks and logic building.",
    },
    {
      name: "🎨 HTML",
      level: 70,
      description:
        "Creating structured, semantic web pages with clear content organization.",
    },
    {
      name: "🎯 CSS",
      level: 85,
      description:
        "Designing visually appealing, responsive, and user-friendly interfaces.",
    },
    {
      name: "🧠 Problem-Solving",
      level: 95,
      description:
        "Tackling challenges with logical thinking, creativity, and analytical skills.",
    },
  ];

  const projects = [
    {
      title: "Loan Prediction Model",
      description:
        "A comprehensive machine learning project that predicts loan approval status using advanced algorithms. Implemented multiple ML models including Random Forest, Decision Tree, and K-Nearest Neighbors (KNN) to achieve optimal prediction accuracy. The project includes thorough data preprocessing, feature engineering, and model evaluation with cross-validation techniques.",
      tags: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Random Forest",
        "Decision Tree",
        "KNN",
        "Machine Learning",
      ],
      link: "https://github.com/SayanVerse",
      image: "/placeholder.svg",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript, featuring a clean design system, smooth animations, and interactive elements. Showcases my skills, projects, and contact information with a professional aesthetic. Includes dark/light theme toggle, mobile-responsive design, and optimized performance.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
        "UI/UX",
      ],
      link: "#",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2">
              <div className="text-xl font-bold gradient-text">Portfolio</div>
              <LiveClock className="scale-75 origin-left" />
            </div>
            <div className="flex items-center space-x-4">
              {/* Desktop navigation */}
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
      >
        {/* Advanced Background System */}
        <AdvancedBackground />

        {/* Removed floating orbs and quantum particles as requested */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-violet-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Code2 className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Sayan Maiti</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            &nbsp;— 🚀 an aspiring CSE engineer passionate about 💻 coding, 🧠
            problem-solving, and ⚡ building creative tech solutions.
            <div>
              <br />
            </div>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="text-lg px-8 py-6 glow-button relative overflow-hidden"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glow-button relative overflow-hidden"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/SayanVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors animated-icon"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayan-maiti-9425b431b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors animated-icon"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sayan.official.2024@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors animated-icon"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-slow">
          <ChevronDown
            className="w-6 h-6 text-muted-foreground cursor-pointer animated-icon"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-muted/50 fade-in-up relative overflow-hidden"
      >
        <AdvancedBackground />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up stagger-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <div>
                <span>
                  <span>
                    <span>
                      👋 Hi, I'm Sayan Maiti — a passionate and curious B.Tech
                      CSE student at MAKAUT 🎓 with a strong interest in 🧠
                      problem-solving, 🤖 machine learning, and 💡 technology. I
                      enjoy working with 🐍 Python, ☕ Java, ⚙️ C++, 🌐 C, 🎨
                      HTML, 🎯 CSS, and building projects that combine
                      creativity 🎭 and logic 🧩. My goal is to become a skilled
                      💻 software developer who can create ⚡ efficient, 📈
                      impactful, and 🤝 user-friendly solutions.
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
                  When I'm not coding ⌨️, I love exploring 🌍 new tech trends,
                  sharpening my skills through 🏆 challenges, and learning
                  something new 📚 every day — because in tech, there's always
                  something exciting ✨ waiting to be discovered.
                  <br />
                </span>
                <br />
              </div>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-start fade-in-up stagger-2">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Machine learning
                    </h3>
                    <p className="text-muted-foreground">
                      Building and training models to solve real-world problems
                      using data-driven approaches.
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
                      Creating intuitive and beautiful user interfaces that
                      enhance user experience.
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
                      Optimizing applications for speed, accessibility, and
                      search engine visibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kolkata, India </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Skills & Expertise
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
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
      <section
        id="projects"
        className="py-20 fade-in-up relative overflow-hidden animated-bg"
      >
        <AdvancedBackground />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up stagger-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up stagger-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
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
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
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
      <section
        id="contact"
        className="py-20 bg-muted/50 fade-in-up relative overflow-hidden animated-bg"
      >
        <AdvancedBackground />
        <div className="max-w-4xl mx-auto px-6 text-center fade-in-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up stagger-2">
            <Button
              size="lg"
              className="text-lg px-8 py-6 glow-button relative overflow-hidden"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glow-button relative overflow-hidden"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glow-button relative overflow-hidden"
              onClick={openCalendarScheduling}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 fade-in-up stagger-3">
            <a
              href="mailto:sayan.official.2024@gmail.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>sayan.official.2024@gmail.com</span>
            </a>
            <a
              href="tel:+919609800163"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9609800163</span>
            </a>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
              </svg>
              <span>Discord: 9609800163</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              <div>© 2025 Sayan Maiti. All rights reserved.</div>
              <div className="text-sm mt-1">Crafted with ❤️ by Sayan</div>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/SayanVerse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors animated-icon"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sayan-maiti-9425b431b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors animated-icon"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sayan.official.2024@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors animated-icon"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
