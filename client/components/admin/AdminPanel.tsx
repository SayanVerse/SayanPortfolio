import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Edit, LogOut, Save, X, CheckCircle } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { supabase } from "@/lib/supabaseClient";

interface Skill {
  id?: string;
  name: string;
  level: number;
  description: string;
}

interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
}

interface Education {
  id?: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  website?: string;
}

export function AdminPanel() {
  const { logout, isAdmin } = useAdminAuth();
  const [activeTab, setActiveTab] = useState("skills");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [about, setAbout] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Skills management
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [newSkill, setNewSkill] = useState<Skill>({
    name: "",
    level: 50,
    description: "",
  });

  // Projects management
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Project>({
    title: "",
    description: "",
    tags: [],
    github: "",
    website: "",
  });

  // Education management
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null,
  );
  const [newEducation, setNewEducation] = useState<Education>({
    degree: "",
    institution: "",
    startYear: new Date().getFullYear() - 4,
    endYear: new Date().getFullYear(),
    website: "",
  });

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Skills handlers
  const handleAddSkill = () => {
    if (newSkill.name && newSkill.description) {
      setSkills([...skills, { ...newSkill, id: Date.now().toString() }]);
      setNewSkill({ name: "", level: 50, description: "" });
      showSuccess("Skill added successfully!");
    }
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

  const handleDeleteSkill = (id: string | undefined) => {
    if (id) {
      setSkills(skills.filter((skill) => skill.id !== id));
      showSuccess("Skill deleted successfully!");
    }
  };

  // Projects handlers
  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now().toString() }]);
      setNewProject({
        title: "",
        description: "",
        tags: [],
        github: "",
        website: "",
      });
      showSuccess("Project added successfully!");
    }
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

  const handleDeleteProject = (id: string | undefined) => {
    if (id) {
      setProjects(projects.filter((project) => project.id !== id));
      showSuccess("Project deleted successfully!");
    }
  };

  // Education handlers
  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      setEducation([
        ...education,
        { ...newEducation, id: Date.now().toString() },
      ]);
      setNewEducation({
        degree: "",
        institution: "",
        startYear: new Date().getFullYear() - 4,
        endYear: new Date().getFullYear(),
        website: "",
      });
      showSuccess("Education entry added successfully!");
    }
  };

  const handleUpdateEducation = (id: string, updated: Education) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, ...updated } : edu)),
    );
    setEditingEducation(null);
    showSuccess("Education entry updated successfully!");
  };

  const handleDeleteEducation = (id: string | undefined) => {
    if (id) {
      setEducation(education.filter((edu) => edu.id !== id));
      showSuccess("Education entry deleted successfully!");
    }
  };

  // About handler
  const handleUpdateAbout = async () => {
    try {
      // Save to Supabase
      const { error } = await supabase.from("portfolio_content").upsert(
        {
          id: "about",
          content: about,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      );

      if (error) throw error;

      showSuccess("About section updated successfully!");
    } catch (err) {
      console.error("Failed to update about:", err);
      showSuccess("Error updating about section");
    }
  };

  if (!isAdmin) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          You need to be logged in to access the admin panel.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      {successMessage && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-green-600">{successMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <Button
          variant="destructive"
          onClick={() => {
            logout();
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
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
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>About Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Write your about section here..."
                className="w-full h-32 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleUpdateAbout}
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
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) =>
                  setNewSkill({ ...newSkill, name: e.target.value })
                }
                placeholder="Skill name (e.g., React, Python)"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm text-muted-foreground">
                    Level: {newSkill.level}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.level}
                    onChange={(e) =>
                      setNewSkill({
                        ...newSkill,
                        level: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>
              <textarea
                value={newSkill.description}
                onChange={(e) =>
                  setNewSkill({ ...newSkill, description: e.target.value })
                }
                placeholder="Skill description"
                className="w-full h-20 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button onClick={handleAddSkill} className="w-full glow-button">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </CardContent>
          </Card>

          {/* Skills List */}
          <div className="space-y-2">
            {skills.map((skill) => (
              <Card key={skill.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingSkill?.id === skill.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editingSkill.name}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={editingSkill.level}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            level: parseInt(e.target.value),
                          })
                        }
                      />
                      <textarea
                        value={editingSkill.description}
                        onChange={(e) =>
                          setEditingSkill({
                            ...editingSkill,
                            description: e.target.value,
                          })
                        }
                        className="w-full h-16 p-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleUpdateSkill(skill.id!, editingSkill)
                          }
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingSkill(null)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.level}%
                        </p>
                        <p className="text-sm mt-2">{skill.description}</p>
                      </div>
                      <div className="flex gap-2">
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
              <input
                type="text"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                placeholder="Project title"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                placeholder="Project description"
                className="w-full h-20 p-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={newProject.github}
                onChange={(e) =>
                  setNewProject({ ...newProject, github: e.target.value })
                }
                placeholder="GitHub URL"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={newProject.website}
                onChange={(e) =>
                  setNewProject({ ...newProject, website: e.target.value })
                }
                placeholder="Website URL"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={newProject.tags.join(", ")}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    tags: e.target.value.split(",").map((t) => t.trim()),
                  })
                }
                placeholder="Tags (comma separated)"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button onClick={handleAddProject} className="w-full glow-button">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </CardContent>
          </Card>

          {/* Projects List */}
          <div className="space-y-2">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingProject?.id === project.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            title: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <textarea
                        value={editingProject.description}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            description: e.target.value,
                          })
                        }
                        className="w-full h-16 p-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleUpdateProject(project.id!, editingProject)
                          }
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingProject(null)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
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
                      </div>
                      <div className="flex gap-2">
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
              <CardTitle>Add New Education Entry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="text"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
                placeholder="Degree or qualification"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={newEducation.institution}
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    institution: e.target.value,
                  })
                }
                placeholder="Institution name"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="flex gap-4">
                <input
                  type="number"
                  value={newEducation.startYear}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      startYear: parseInt(e.target.value),
                    })
                  }
                  placeholder="Start year"
                  className="flex-1 px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="number"
                  value={newEducation.endYear}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      endYear: parseInt(e.target.value),
                    })
                  }
                  placeholder="End year"
                  className="flex-1 px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <input
                type="text"
                value={newEducation.website}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, website: e.target.value })
                }
                placeholder="Institution website (optional)"
                className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleAddEducation}
                className="w-full glow-button"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Education Entry
              </Button>
            </CardContent>
          </Card>

          {/* Education List */}
          <div className="space-y-2">
            {education.map((edu) => (
              <Card key={edu.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  {editingEducation?.id === edu.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editingEducation.degree}
                        onChange={(e) =>
                          setEditingEducation({
                            ...editingEducation,
                            degree: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <input
                        type="text"
                        value={editingEducation.institution}
                        onChange={(e) =>
                          setEditingEducation({
                            ...editingEducation,
                            institution: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleUpdateEducation(edu.id!, editingEducation)
                          }
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingEducation(null)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-sm">
                          {edu.startYear} - {edu.endYear}
                        </p>
                      </div>
                      <div className="flex gap-2">
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
      </Tabs>
    </div>
  );
}
