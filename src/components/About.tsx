import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing my Bachelor's in Computer Applications, driven by curiosity 
            and a passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <Card className="card-glow hover-glow animate-fade-in-left">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Academic Journey</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground">2nd Year Student</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground">1st Year CGPA</p>
                  <p className="text-2xl font-bold text-primary">8.07/10</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Location Card */}
          <Card className="card-glow hover-glow animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-muted-foreground">Where I'm Based</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold">Vadodara</p>
                  <p className="text-muted-foreground">Gujarat, India</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to remote opportunities and collaborations
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements Card */}
          <Card className="card-glow hover-glow animate-fade-in-right md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Focus Areas</h3>
                  <p className="text-muted-foreground">What Drives Me</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-primary">Current Learning</p>
                  <p className="text-muted-foreground">Web Development & DSA</p>
                </div>
                <div>
                  <p className="font-medium text-accent">Future Goals</p>
                  <p className="text-muted-foreground">AI/ML, Cybersecurity, Crypto</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;