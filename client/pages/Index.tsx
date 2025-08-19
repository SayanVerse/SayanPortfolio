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
import { useButtonEffects } from "@/hooks/useButtonEffects";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const openSectionInNewTab = (section: string) => {
    const currentUrl = window.location.origin + window.location.pathname;
    const newUrl = `${currentUrl}#${section}`;
    window.open(newUrl, '_blank');
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
    <>
      {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      <div
        className="min-h-screen bg-background"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col sm:flex-col space-y-2 nav-brand">
                <div className="text-xl font-bold gradient-text">Portfolio</div>
                <LiveClock className="scale-75 origin-left nav-clock" />
              </div>
              <div className="flex items-center space-x-4">
                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => openSectionInNewTab("about")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => openSectionInNewTab("projects")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("certificates")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Certificates
                  </button>
                  <button
                    onClick={() => openSectionInNewTab("contact")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </div>

                {/* Mobile hamburger menu */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <div
                    className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Faded background */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Menu content */}
            <div className="absolute top-20 right-6 bg-background/90 backdrop-blur-lg border border-border rounded-lg shadow-2xl min-w-[200px]">
              <div className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection("home")}
                className="px-6 py-4 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors border-b border-border/50"
              >
                Home
              </button>
              <button
                onClick={() => openSectionInNewTab("about")}
                className="px-6 py-4 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors border-b border-border/50"
              >
                About
              </button>
              <button
                onClick={() => openSectionInNewTab("projects")}
                className="px-6 py-4 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors border-b border-border/50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="px-6 py-4 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors border-b border-border/50"
              >
                Certificates
              </button>
              <button
                onClick={() => openSectionInNewTab("contact")}
                className="px-6 py-4 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                Contact
              </button>
            </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
        >
          {/* Advanced Background System */}
          <AdvancedBackground />

          {/* Removed floating orbs and quantum particles as requested */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 flex flex-col">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hey, I'm <span className="gradient-text">Sayan Maiti</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              &nbsp;— 🚀 an aspiring CSE student at<br />
              Swami Vivekananda Institute of Science and Technology,
              passionate about 💻 coding, 🧠 problem-solving, and ⚡
              building creative tech solutions.
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
          className="py-20 fade-in-up relative overflow-hidden animated-bg"
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
                        problem-solving, 🤖 machine learning, and 💡 technology.
                        I enjoy working with 🐍 Python, ☕ Java, ⚙️ C++, 🌐 C,
                        🎨 HTML, 🎯 CSS, and building projects that combine
                        creativity 🎭 and logic 🧩. My goal is to become a
                        skilled 💻 software developer who can create ⚡
                        efficient, 📈 impactful, and 🤝 user-friendly solutions.
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
                        Building and training models to solve real-world
                        problems using data-driven approaches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        UI/UX Design
                      </h3>
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
                      <h3 className="text-xl font-semibold mb-2">
                        Performance
                      </h3>
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

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-20 bg-muted/50 fade-in-up relative overflow-hidden animated-bg"
        >
          <AdvancedBackground />
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up stagger-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                Certificates & Achievements
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My journey of continuous learning and skill development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up stagger-2">
              {/* AI for Beginners HP LIFE Certificate */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        AI for Beginners
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">HP LIFE</p>
                      <p className="text-xs text-muted-foreground mb-2">Issued Mar 2025</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        ID: 06218b60-20f3-41d3-821d-07ed564d15e2
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open('https://www.life-global.org/certificate/06218b60-20f3-41d3-821d-07ed564d15e2', '_blank')}
                  >
                    View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Java Basic HackerRank Certificate */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        Java (Basic)
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">HackerRank</p>
                      <p className="text-xs text-muted-foreground mb-2">Issued Feb 2025</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        ID: B5B3A86A574F
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open('https://www.hackerrank.com/certificates/b5b3a86a574f', '_blank')}
                  >
                    View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Problem Solving Basic HackerRank Certificate */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        Problem Solving (Basic)
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">HackerRank</p>
                      <p className="text-xs text-muted-foreground mb-2">Issued Feb 2025</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        ID: 6AC58A65F3C1
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open('https://www.hackerrank.com/certificates/6ac58a65f3c1', '_blank')}
                  >
                    View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 fade-in-up relative overflow-hidden animated-bg"
        >
          <AdvancedBackground />
          <div className="max-w-4xl mx-auto px-6 text-center fade-in-up stagger-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up stagger-2">
              <Button
                size="lg"
                className="text-lg px-8 py-6 glow-button relative overflow-hidden"
                onClick={() => window.open("sms:+919609800163", "_self")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glow-button relative overflow-hidden"
                onClick={() => window.open("tel:+919609800163", "_self")}
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
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glow-button relative overflow-hidden"
                onClick={() => window.open("https://discord.com/users/dorex_2024", "_blank")}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
                Discord Chat
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
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
    </>
  );
}
