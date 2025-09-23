import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 lg:mb-6">
            About Me
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Currently pursuing my Bachelor's in Computer Applications, driven by curiosity 
            and a passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Education Card */}
          <Card className="card-glow hover:shadow-lg transition-all duration-300 animate-fade-in-left">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="p-2 lg:p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Journey</p>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-3 text-sm">
                <div>
                  <p className="font-medium text-sm lg:text-base">Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">2nd Year Student</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-muted-foreground text-xs lg:text-sm">1st Year CGPA</p>
                  <p className="text-xl lg:text-2xl font-bold text-primary">8.07/10</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Location Card */}
          <Card className="card-glow hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="p-2 lg:p-3 bg-accent/20 rounded-lg">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">Where I'm Based</p>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-3">
                <div>
                  <p className="text-xl lg:text-2xl font-bold">Vadodara</p>
                  <p className="text-muted-foreground text-sm lg:text-base">Gujarat, India</p>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Open to remote opportunities and collaborations
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Focus Areas Card */}
          <Card className="card-glow hover:shadow-lg transition-all duration-300 animate-fade-in-right sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="p-2 lg:p-3 bg-primary/20 rounded-lg">
                  <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold">Focus Areas</h3>
                  <p className="text-sm text-muted-foreground">What Drives Me</p>
                </div>
              </div>
              <div className="space-y-2 lg:space-y-3 text-sm">
                <div>
                  <p className="font-medium text-primary text-sm lg:text-base">Current Learning</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">Web Development & DSA</p>
                </div>
                <div>
                  <p className="font-medium text-accent text-sm lg:text-base">Future Goals</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">AI/ML, Cybersecurity, Crypto</p>
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