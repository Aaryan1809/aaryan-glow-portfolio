import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Cpu, Video, Zap, Shield } from "lucide-react";

const Skills = () => {
  const currentSkills = [
    { name: "C++", level: "Intermediate", icon: Code2 },
    { name: "Frontend Development", level: "Proficient", icon: Globe },
    { name: "Data Structures & Algorithms", level: "Learning", icon: Cpu },
    { name: "Node.js", level: "Beginner", icon: Zap },
    { name: "Python", level: "Intermediate", icon: Code2 },
    { name: "Video Editing", level: "Proficient", icon: Video },
  ];

  const futureInterests = [
    { name: "Artificial Intelligence", icon: Cpu },
    { name: "Machine Learning", icon: Zap },
    { name: "Cryptocurrency", icon: Code2 },
    { name: "Cybersecurity", icon: Shield },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Proficient":
        return "bg-primary/20 text-primary border-primary/30";
      case "Intermediate":
        return "bg-accent/20 text-accent border-accent/30";
      case "Learning":
        return "bg-muted/20 text-muted-foreground border-muted/30";
      default:
        return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    }
  };

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 lg:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Technologies I work with and areas I'm passionate about exploring
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Current Skills */}
          <Card className="card-glow hover:shadow-lg transition-all duration-300 animate-fade-in-left">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl text-center">
                <span className="gradient-text">Current Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4">
              {currentSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 lg:p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="p-1.5 lg:p-2 bg-primary/20 rounded-lg">
                        <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                    </div>
                    <Badge className={`${getLevelColor(skill.level)} text-xs px-2 py-1`}>
                      {skill.level}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Future Interests */}
          <Card className="card-glow hover:shadow-lg transition-all duration-300 animate-fade-in-right">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl text-center">
                <span className="gradient-text">Future Interests</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4">
              <p className="text-muted-foreground text-center mb-4 lg:mb-6 text-sm lg:text-base">
                Areas I'm excited to explore and master
              </p>
              {futureInterests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div
                    key={interest.name}
                    className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-1.5 lg:p-2 bg-accent/20 rounded-lg">
                      <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm lg:text-base">{interest.name}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground italic">
            "I believe in continuous learning and staying humble about my journey in tech"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;