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
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 lg:mb-6">
            Featured Projects
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A showcase of projects that reflect my learning journey and passion for creating meaningful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={project.title}
                className={`card-glow hover:shadow-lg transition-all duration-300 ${isEven ? 'animate-fade-in-left' : 'animate-fade-in-right'} overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="relative p-4 lg:p-6">
                  <div className={`absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-${project.color}/10 rounded-full blur-xl lg:blur-2xl`}></div>
                  <div className="flex items-start gap-3 lg:gap-4 relative z-10">
                    <div className={`p-2 lg:p-3 bg-${project.color}/20 rounded-lg shrink-0`}>
                      <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 text-${project.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg lg:text-2xl mb-2 leading-tight">{project.title}</CardTitle>
                      <CardDescription className="text-sm lg:text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2 lg:mb-3 text-xs lg:text-sm uppercase tracking-wider text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5 lg:space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs lg:text-sm">
                          <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full shrink-0`}></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 lg:mb-3 text-xs lg:text-sm uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary/80 transition-colors text-xs px-2 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 lg:gap-3 pt-2 lg:pt-4">
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-secondary text-xs lg:text-sm py-2">
                      <Github className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-secondary text-xs lg:text-sm py-2">
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
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