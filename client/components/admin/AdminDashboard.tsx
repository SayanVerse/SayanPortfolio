import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Edit, LogOut, Save, X, CheckCircle } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  website?: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  link?: string;
  issuedDate?: string;
}

interface ContactDetail {
  email?: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
}

export function AdminDashboard() {
  const { logout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState("about");
  const [successMessage, setSuccessMessage] = useState("");

  // About
  const [about, setAbout] = useState(
    "— 🚀 an aspiring CSE student at Swami Vivekananda Institute of Science and Technology, passionate about 💻 coding, 🧠 problem-solving, and ⚡ building creative tech solutions.",
  );

  // Skills
  const [skills, setSkills] = useState<Skill[]>([
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
  ]);

  // Projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Clip-Board",
      description:
        "A multi-device clipboard management tool that enables seamless copy-paste synchronization between multiple devices.",
      tags: ["Clipboard", "Multi-Device"],
      github: "https://github.com/SayanVerse/clip-board",
      website: "https://clip-board.lovable.app",
    },
    {
      id: "2",
      title: "InternLink",
      description:
        "An internship recommendation engine for the PM Internship Scheme.",
      tags: ["Hackathon 2025", "Internship"],
      github:
        "https://github.com/SayanVerse/pm-internship-scheme-recommendation",
      website: "https://internlink-sih.netlify.app",
    },
  ]);

  // Education
  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      degree: "Secondary Education",
      institution: "K.T.P.P. High School (H.S)",
      startYear: 2016,
      endYear: 2022,
    },
    {
      id: "2",
      degree: "Higher Secondary Education",
      institution: "K.T.P.P. High School (H.S)",
      startYear: 2022,
      endYear: 2024,
    },
    {
      id: "3",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Swami Vivekananda Institute Of Science and Technology",
      startYear: 2024,
      endYear: 2028,
      website: "www.svist.org",
    },
  ]);

  // Certificates
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: "1",
      title: "AI for Beginners",
      issuer: "HP LIFE",
      credentialId: "06218b60-20f3-41d3-821d-07ed564d15e2",
      link: "https://www.life-global.org/certificate/06218b60-20f3-41d3-821d-07ed564d15e2",
      issuedDate: "Mar 2025",
    },
  ]);

  // Contact
  const [contact, setContact] = useState<ContactDetail>({
    email: "sayan.official.2024@gmail.com",
    phone: "",
    location: "",
    github: "https://github.com/SayanVerse",
    linkedin: "",
  });

  // Edit states
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null,
  );
  const [editingCertificate, setEditingCertificate] =
    useState<Certificate | null>(null);

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleUpdateSkill = (id: string, updated: Skill) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, ...updated } : skill,
      ),
    );
    setEditingSkill(null);
    showSuccess("Skill updated successfully!");
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
    showSuccess("Skill deleted!");
  };

  const handleAddSkill = (skill: Skill) => {
    setSkills([...skills, { ...skill, id: Date.now().toString() }]);
    showSuccess("Skill added successfully!");
  };

  const handleUpdateProject = (id: string, updated: Project) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, ...updated } : project,
      ),
    );
    setEditingProject(null);
    showSuccess("Project updated successfully!");
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    showSuccess("Project deleted!");
  };

  const handleAddProject = (project: Project) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }]);
    showSuccess("Project added successfully!");
  };

  const handleUpdateEducation = (id: string, updated: Education) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, ...updated } : edu)),
    );
    setEditingEducation(null);
    showSuccess("Education updated successfully!");
  };

  const handleDeleteEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
    showSuccess("Education deleted!");
  };

  const handleAddEducation = (edu: Education) => {
    setEducation([...education, { ...edu, id: Date.now().toString() }]);
    showSuccess("Education added successfully!");
  };

  const handleAddCertificate = (cert: Certificate) => {
    setCertificates([...certificates, { ...cert, id: Date.now().toString() }]);
    showSuccess("Certificate added successfully!");
  };

  const handleDeleteCertificate = (id: string) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
    showSuccess("Certificate deleted!");
  };

  return (
    <div className="space-y-6 w-full">
      {successMessage && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 sticky top-24 z-40">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-green-600">{successMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center sticky top-20 bg-background/95 backdrop-blur p-4 rounded-lg z-30">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-1 mb-6">
          <TabsTrigger value="about" className="text-xs md:text-sm">
            About
          </TabsTrigger>
          <TabsTrigger value="skills" className="text-xs md:text-sm">
            Skills
          </TabsTrigger>
          <TabsTrigger value="projects" className="text-xs md:text-sm">
            Projects
          </TabsTrigger>
          <TabsTrigger value="education" className="text-xs md:text-sm">
            Education
          </TabsTrigger>
          <TabsTrigger value="certificates" className="text-xs md:text-sm">
            Certificates
          </TabsTrigger>
          <TabsTrigger value="contact" className="text-xs md:text-sm">
            Contact
          </TabsTrigger>
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Write your about section here..."
                className="w-full h-40 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <Button
                onClick={() => {
                  showSuccess("About section updated!");
                }}
                className="w-full glow-button"
              >
                <Save className="w-4 h-4 mr-2" />
                Save About Section
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Add New Skill</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AddSkillForm onAdd={handleAddSkill} />
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Current Skills</h3>
            {skills.map((skill) => (
              <Card key={skill.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingSkill?.id === skill.id ? (
                    <EditSkillForm
                      skill={editingSkill}
                      onSave={() => handleUpdateSkill(skill.id, editingSkill)}
                      onCancel={() => setEditingSkill(null)}
                      onChange={setEditingSkill}
                    />
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2 mb-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.level}%
                        </p>
                        <p className="text-sm mt-2">{skill.description}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingSkill(skill)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteSkill(skill.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Add New Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AddProjectForm onAdd={handleAddProject} />
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Current Projects</h3>
            {projects.map((project) => (
              <Card key={project.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingProject?.id === project.id ? (
                    <EditProjectForm
                      project={editingProject}
                      onSave={() =>
                        handleUpdateProject(project.id, editingProject)
                      }
                      onCancel={() => setEditingProject(null)}
                      onChange={setEditingProject}
                    />
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {(project.github || project.website) && (
                          <div className="flex gap-2 text-xs">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                GitHub
                              </a>
                            )}
                            {project.website && (
                              <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Website
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingProject(project)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Add New Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AddEducationForm onAdd={handleAddEducation} />
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Current Education</h3>
            {education.map((edu) => (
              <Card key={edu.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingEducation?.id === edu.id ? (
                    <EditEducationForm
                      education={editingEducation}
                      onSave={() =>
                        handleUpdateEducation(edu.id, editingEducation)
                      }
                      onCancel={() => setEditingEducation(null)}
                      onChange={setEditingEducation}
                    />
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-sm mt-1">
                          {edu.startYear} - {edu.endYear}
                        </p>
                        {edu.website && (
                          <p className="text-sm text-primary">
                            <a
                              href={`https://${edu.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {edu.website}
                            </a>
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingEducation(edu)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteEducation(edu.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Add New Certificate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AddCertificateForm onAdd={handleAddCertificate} />
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Current Certificates</h3>
            {certificates.map((cert) => (
              <Card key={cert.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Issued by: {cert.issuer}
                      </p>
                      {cert.issuedDate && (
                        <p className="text-sm text-muted-foreground">
                          {cert.issuedDate}
                        </p>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {cert.credentialId}
                        </p>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline block mt-2"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteCertificate(cert.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contact.email || ""}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={contact.phone || ""}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={contact.location || ""}
                    onChange={(e) =>
                      setContact({ ...contact, location: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    GitHub Profile URL
                  </label>
                  <input
                    type="url"
                    value={contact.github || ""}
                    onChange={(e) =>
                      setContact({ ...contact, github: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={contact.linkedin || ""}
                    onChange={(e) =>
                      setContact({ ...contact, linkedin: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <Button
                onClick={() => showSuccess("Contact information updated!")}
                className="w-full glow-button"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Contact Information
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Form Components
function AddSkillForm({ onAdd }: { onAdd: (skill: Skill) => void }) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(50);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onAdd({
        id: "",
        name,
        level,
        description,
      });
      setName("");
      setLevel(50);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skill name (e.g., React, Python)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <div>
        <label className="text-sm text-muted-foreground block mb-2">
          Level: {level}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Skill description"
        className="w-full h-20 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
        required
      />
      <Button type="submit" className="w-full glow-button">
        <Plus className="w-4 h-4 mr-2" />
        Add Skill
      </Button>
    </form>
  );
}

function EditSkillForm({
  skill,
  onSave,
  onCancel,
  onChange,
}: {
  skill: Skill;
  onSave: () => void;
  onCancel: () => void;
  onChange: (skill: Skill) => void;
}) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={skill.name}
        onChange={(e) => onChange({ ...skill, name: e.target.value })}
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div>
        <label className="text-sm text-muted-foreground">
          Level: {skill.level}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={skill.level}
          onChange={(e) =>
            onChange({ ...skill, level: parseInt(e.target.value) })
          }
          className="w-full"
        />
      </div>
      <textarea
        value={skill.description}
        onChange={(e) => onChange({ ...skill, description: e.target.value })}
        className="w-full h-16 p-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
      />
      <div className="flex gap-2">
        <Button size="sm" onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button size="sm" variant="outline" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
      </div>
    </div>
  );
}

function AddProjectForm({ onAdd }: { onAdd: (project: Project) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onAdd({
        id: "",
        title,
        description,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        github,
        website,
      });
      setTitle("");
      setDescription("");
      setTags("");
      setGithub("");
      setWebsite("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project description"
        className="w-full h-20 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
        required
      />
      <input
        type="url"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        placeholder="GitHub URL"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="url"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Website URL"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button type="submit" className="w-full glow-button">
        <Plus className="w-4 h-4 mr-2" />
        Add Project
      </Button>
    </form>
  );
}

function EditProjectForm({
  project,
  onSave,
  onCancel,
  onChange,
}: {
  project: Project;
  onSave: () => void;
  onCancel: () => void;
  onChange: (project: Project) => void;
}) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={project.title}
        onChange={(e) => onChange({ ...project, title: e.target.value })}
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <textarea
        value={project.description}
        onChange={(e) => onChange({ ...project, description: e.target.value })}
        className="w-full h-16 p-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
      />
      <input
        type="url"
        value={project.github || ""}
        onChange={(e) => onChange({ ...project, github: e.target.value })}
        placeholder="GitHub URL"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="url"
        value={project.website || ""}
        onChange={(e) => onChange({ ...project, website: e.target.value })}
        placeholder="Website URL"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div className="flex gap-2">
        <Button size="sm" onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button size="sm" variant="outline" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
      </div>
    </div>
  );
}

function AddEducationForm({
  onAdd,
}: {
  onAdd: (education: Education) => void;
}) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startYear, setStartYear] = useState(new Date().getFullYear() - 4);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (degree && institution) {
      onAdd({
        id: "",
        degree,
        institution,
        startYear,
        endYear,
        website,
      });
      setDegree("");
      setInstitution("");
      setStartYear(new Date().getFullYear() - 4);
      setEndYear(new Date().getFullYear());
      setWebsite("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="Degree or qualification"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <input
        type="text"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        placeholder="Institution name"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <div className="flex gap-4">
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(parseInt(e.target.value))}
          placeholder="Start year"
          className="flex-1 px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <input
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(parseInt(e.target.value))}
          placeholder="End year"
          className="flex-1 px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Institution website (optional)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button type="submit" className="w-full glow-button">
        <Plus className="w-4 h-4 mr-2" />
        Add Education
      </Button>
    </form>
  );
}

function EditEducationForm({
  education,
  onSave,
  onCancel,
  onChange,
}: {
  education: Education;
  onSave: () => void;
  onCancel: () => void;
  onChange: (education: Education) => void;
}) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={education.degree}
        onChange={(e) => onChange({ ...education, degree: e.target.value })}
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="text"
        value={education.institution}
        onChange={(e) =>
          onChange({ ...education, institution: e.target.value })
        }
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div className="flex gap-2">
        <Button size="sm" onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button size="sm" variant="outline" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
      </div>
    </div>
  );
}

function AddCertificateForm({
  onAdd,
}: {
  onAdd: (certificate: Certificate) => void;
}) {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [link, setLink] = useState("");
  const [issuedDate, setIssuedDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && issuer) {
      onAdd({
        id: "",
        title,
        issuer,
        credentialId,
        link,
        issuedDate,
      });
      setTitle("");
      setIssuer("");
      setCredentialId("");
      setLink("");
      setIssuedDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Certificate title"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <input
        type="text"
        value={issuer}
        onChange={(e) => setIssuer(e.target.value)}
        placeholder="Issued by"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      />
      <input
        type="text"
        value={credentialId}
        onChange={(e) => setCredentialId(e.target.value)}
        placeholder="Credential ID (optional)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Certificate link (optional)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <input
        type="text"
        value={issuedDate}
        onChange={(e) => setIssuedDate(e.target.value)}
        placeholder="Issued date (e.g., Mar 2025)"
        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <Button type="submit" className="w-full glow-button">
        <Plus className="w-4 h-4 mr-2" />
        Add Certificate
      </Button>
    </form>
  );
}
