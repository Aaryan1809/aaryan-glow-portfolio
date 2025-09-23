import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Timer } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AnnDaan",
      description: "A comprehensive platform connecting food donors with NGOs to help feed the poor. Features include donation tracking, rider employment system, and real-time coordination between restaurants, individuals, and charitable organizations.",
      tags: ["Web Development", "Social Impact", "Full Stack"],
      features: [
        "Food donation management",
        "NGO partnership system", 
        "Rider employment platform",
        "Real-time tracking"
      ],
      icon: Heart,
      color: "primary"
    },
    {
      title: "Bubble Pop Game",
      description: "An interactive browser-based game with a 60-second time challenge. Players must pop bubbles containing target numbers that dynamically reorder after each successful hit, testing speed and accuracy.",
      tags: ["JavaScript", "Game Development", "UI/UX"],
      features: [
        "60-second time challenge",
        "Dynamic number targeting",
        "Score tracking system",
        "Responsive design"
      ],
      icon: Timer,
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that reflect my learning journey and passion for creating meaningful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={project.title}
                className={`card-glow hover-glow ${isEven ? 'animate-fade-in-left' : 'animate-fade-in-right'} overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}/10 rounded-full blur-2xl`}></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 bg-${project.color}/20 rounded-lg shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects Note */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            More projects in development...
          </p>
          <Button variant="outline" size="lg" className="hover:bg-secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;