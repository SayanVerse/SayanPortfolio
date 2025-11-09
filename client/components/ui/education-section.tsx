import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Globe, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  website?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Secondary Education",
    institution: "K.T.P.P. High School (H.S)",
    startYear: 2016,
    endYear: 2022,
  },
  {
    degree: "Higher Secondary Education",
    institution: "K.T.P.P. High School (H.S)",
    startYear: 2022,
    endYear: 2024,
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Swami Vivekananda Institute Of Science and Technology",
    startYear: 2024,
    endYear: 2028,
    website: "www.svist.org",
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 fade-in-up relative overflow-hidden animated-bg"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up stagger-2">
          {educationData.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {item.startYear} - {item.endYear}
                    </span>
                  </div>
                  {item.website && (
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <a
                        href={`https://${item.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 transition-colors underline"
                      >
                        {item.website}
                      </a>
                    </div>
                  )}
                </div>

                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {item.endYear - item.startYear} years
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
