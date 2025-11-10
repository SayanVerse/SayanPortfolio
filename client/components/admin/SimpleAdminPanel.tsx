import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
} from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface PortfolioData {
  about: string;
  skills: Array<{
    id: string;
    name: string;
    level: number;
    description: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    github?: string;
    website?: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    startYear: number;
    endYear: number;
    website?: string;
  }>;
  certificates: Array<{
    id: string;
    title: string;
    issuer: string;
    credentialId?: string;
    link?: string;
    issuedDate?: string;
  }>;
  contact: {
    email?: string;
    phone?: string;
    location?: string;
    github?: string;
    linkedin?: string;
  };
}

export function SimpleAdminPanel() {
  const { logout } = useAdminAuth();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    about: false,
    skills: false,
    projects: false,
    education: false,
    certificates: false,
    contact: false,
  });

  const [data, setData] = useState<PortfolioData>({
    about:
      "— 🚀 an aspiring CSE student at Swami Vivekananda Institute of Science and Technology, passionate about 💻 coding, 🧠 problem-solving, and ⚡ building creative tech solutions.",
    skills: [
      {
        id: "1",
        name: "🌐 Web Development",
        level: 85,
        description:
          "Building modern, responsive web applications with cutting-edge technologies and best practices.",
      },
      {
        id: "2",
        name: "🚀 Development using AI",
        level: 90,
        description:
          "Leveraging AI tools and technologies to accelerate development and create intelligent solutions.",
      },
    ],
    projects: [
      {
        id: "1",
        title: "Clip-Board",
        description:
          "A multi-device clipboard management tool that enables seamless copy-paste synchronization between multiple devices.",
        tags: ["Clipboard", "Multi-Device"],
        github: "https://github.com/SayanVerse/clip-board",
        website: "https://clip-board.lovable.app",
      },
    ],
    education: [
      {
        id: "1",
        degree: "Secondary Education",
        institution: "K.T.P.P. High School (H.S)",
        startYear: 2016,
        endYear: 2022,
      },
    ],
    certificates: [
      {
        id: "1",
        title: "AI for Beginners",
        issuer: "HP LIFE",
        credentialId: "06218b60-20f3-41d3-821d-07ed564d15e2",
        link: "https://www.life-global.org/certificate/06218b60-20f3-41d3-821d-07ed564d15e2",
        issuedDate: "Mar 2025",
      },
    ],
    contact: {
      email: "sayan.official.2024@gmail.com",
      github: "https://github.com/SayanVerse",
    },
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSave = () => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
    alert("Portfolio updated successfully! Changes will appear on refresh.");
  };

  return (
    <div className="space-y-4 pb-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Your Portfolio</h1>
        <Button
          variant="destructive"
          onClick={() => {
            logout();
            window.location.href = "/";
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      {/* About Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("about")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">About You</CardTitle>
            {expandedSections.about ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.about && (
          <CardContent className="space-y-4">
            <textarea
              value={data.about}
              onChange={(e) => setData({ ...data, about: e.target.value })}
              className="w-full h-32 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Skills Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("skills")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">
              Skills ({data.skills.length})
            </CardTitle>
            {expandedSections.skills ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.skills && (
          <CardContent className="space-y-4">
            {data.skills.map((skill, idx) => (
              <div
                key={skill.id}
                className="p-4 bg-muted/30 rounded-lg space-y-3"
              >
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...data.skills];
                    newSkills[idx].name = e.target.value;
                    setData({ ...data, skills: newSkills });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Skill name"
                />
                <div className="flex gap-2 items-center">
                  <span className="text-sm min-w-12">
                    Level: {skill.level}%
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => {
                      const newSkills = [...data.skills];
                      newSkills[idx].level = parseInt(e.target.value);
                      setData({ ...data, skills: newSkills });
                    }}
                    className="flex-1"
                  />
                </div>
                <textarea
                  value={skill.description}
                  onChange={(e) => {
                    const newSkills = [...data.skills];
                    newSkills[idx].description = e.target.value;
                    setData({ ...data, skills: newSkills });
                  }}
                  className="w-full h-16 p-2 bg-background border border-input rounded-md text-sm resize-none"
                  placeholder="Description"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    setData({
                      ...data,
                      skills: data.skills.filter((_, i) => i !== idx),
                    });
                  }}
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() => {
                setData({
                  ...data,
                  skills: [
                    ...data.skills,
                    {
                      id: Date.now().toString(),
                      name: "",
                      level: 50,
                      description: "",
                    },
                  ],
                });
              }}
              variant="outline"
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Projects Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("projects")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">
              Projects ({data.projects.length})
            </CardTitle>
            {expandedSections.projects ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.projects && (
          <CardContent className="space-y-4">
            {data.projects.map((project, idx) => (
              <div
                key={project.id}
                className="p-4 bg-muted/30 rounded-lg space-y-3"
              >
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[idx].title = e.target.value;
                    setData({ ...data, projects: newProjects });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm font-semibold"
                  placeholder="Project title"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[idx].description = e.target.value;
                    setData({ ...data, projects: newProjects });
                  }}
                  className="w-full h-16 p-2 bg-background border border-input rounded-md text-sm resize-none"
                  placeholder="Description"
                />
                <input
                  type="url"
                  value={project.github || ""}
                  onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[idx].github = e.target.value;
                    setData({ ...data, projects: newProjects });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="GitHub URL"
                />
                <input
                  type="url"
                  value={project.website || ""}
                  onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[idx].website = e.target.value;
                    setData({ ...data, projects: newProjects });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Website URL"
                />
                <input
                  type="text"
                  value={project.tags.join(", ")}
                  onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[idx].tags = e.target.value
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean);
                    setData({ ...data, projects: newProjects });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Tags (comma separated)"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    setData({
                      ...data,
                      projects: data.projects.filter((_, i) => i !== idx),
                    });
                  }}
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() => {
                setData({
                  ...data,
                  projects: [
                    ...data.projects,
                    {
                      id: Date.now().toString(),
                      title: "",
                      description: "",
                      tags: [],
                      github: "",
                      website: "",
                    },
                  ],
                });
              }}
              variant="outline"
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Education Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("education")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">
              Education ({data.education.length})
            </CardTitle>
            {expandedSections.education ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.education && (
          <CardContent className="space-y-4">
            {data.education.map((edu, idx) => (
              <div
                key={edu.id}
                className="p-4 bg-muted/30 rounded-lg space-y-3"
              >
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[idx].degree = e.target.value;
                    setData({ ...data, education: newEdu });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm font-semibold"
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[idx].institution = e.target.value;
                    setData({ ...data, education: newEdu });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Institution"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={edu.startYear}
                    onChange={(e) => {
                      const newEdu = [...data.education];
                      newEdu[idx].startYear = parseInt(e.target.value);
                      setData({ ...data, education: newEdu });
                    }}
                    className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm"
                    placeholder="Start Year"
                  />
                  <input
                    type="number"
                    value={edu.endYear}
                    onChange={(e) => {
                      const newEdu = [...data.education];
                      newEdu[idx].endYear = parseInt(e.target.value);
                      setData({ ...data, education: newEdu });
                    }}
                    className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm"
                    placeholder="End Year"
                  />
                </div>
                <input
                  type="text"
                  value={edu.website || ""}
                  onChange={(e) => {
                    const newEdu = [...data.education];
                    newEdu[idx].website = e.target.value;
                    setData({ ...data, education: newEdu });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Website (optional)"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    setData({
                      ...data,
                      education: data.education.filter((_, i) => i !== idx),
                    });
                  }}
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() => {
                setData({
                  ...data,
                  education: [
                    ...data.education,
                    {
                      id: Date.now().toString(),
                      degree: "",
                      institution: "",
                      startYear: 2020,
                      endYear: 2024,
                      website: "",
                    },
                  ],
                });
              }}
              variant="outline"
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Education
            </Button>
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Certificates Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("certificates")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">
              Certificates ({data.certificates.length})
            </CardTitle>
            {expandedSections.certificates ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.certificates && (
          <CardContent className="space-y-4">
            {data.certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className="p-4 bg-muted/30 rounded-lg space-y-3"
              >
                <input
                  type="text"
                  value={cert.title}
                  onChange={(e) => {
                    const newCerts = [...data.certificates];
                    newCerts[idx].title = e.target.value;
                    setData({ ...data, certificates: newCerts });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm font-semibold"
                  placeholder="Certificate title"
                />
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => {
                    const newCerts = [...data.certificates];
                    newCerts[idx].issuer = e.target.value;
                    setData({ ...data, certificates: newCerts });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Issued by"
                />
                <input
                  type="text"
                  value={cert.credentialId || ""}
                  onChange={(e) => {
                    const newCerts = [...data.certificates];
                    newCerts[idx].credentialId = e.target.value;
                    setData({ ...data, certificates: newCerts });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Credential ID (optional)"
                />
                <input
                  type="url"
                  value={cert.link || ""}
                  onChange={(e) => {
                    const newCerts = [...data.certificates];
                    newCerts[idx].link = e.target.value;
                    setData({ ...data, certificates: newCerts });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Certificate link (optional)"
                />
                <input
                  type="text"
                  value={cert.issuedDate || ""}
                  onChange={(e) => {
                    const newCerts = [...data.certificates];
                    newCerts[idx].issuedDate = e.target.value;
                    setData({ ...data, certificates: newCerts });
                  }}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  placeholder="Issued date (e.g., Mar 2025)"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    setData({
                      ...data,
                      certificates: data.certificates.filter(
                        (_, i) => i !== idx,
                      ),
                    });
                  }}
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() => {
                setData({
                  ...data,
                  certificates: [
                    ...data.certificates,
                    {
                      id: Date.now().toString(),
                      title: "",
                      issuer: "",
                      credentialId: "",
                      link: "",
                      issuedDate: "",
                    },
                  ],
                });
              }}
              variant="outline"
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Certificate
            </Button>
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Contact Section */}
      <Card className="border-0 shadow-md">
        <CardHeader
          className="cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => toggleSection("contact")}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="flex-1">Contact Information</CardTitle>
            {expandedSections.contact ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </CardHeader>
        {expandedSections.contact && (
          <CardContent className="space-y-4">
            <input
              type="email"
              value={data.contact.email || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  contact: { ...data.contact, email: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
              placeholder="Email"
            />
            <input
              type="tel"
              value={data.contact.phone || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  contact: { ...data.contact, phone: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
              placeholder="Phone"
            />
            <input
              type="text"
              value={data.contact.location || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  contact: { ...data.contact, location: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
              placeholder="Location"
            />
            <input
              type="url"
              value={data.contact.github || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  contact: { ...data.contact, github: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
              placeholder="GitHub Profile URL"
            />
            <input
              type="url"
              value={data.contact.linkedin || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  contact: { ...data.contact, linkedin: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
              placeholder="LinkedIn Profile URL"
            />
            <Button onClick={handleSave} className="w-full glow-button">
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
