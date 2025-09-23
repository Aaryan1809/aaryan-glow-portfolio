import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
                Aaryan Soni
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                BCA Student & <span className="text-primary">Web Developer</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A passionate 2nd-year BCA student from Vadodara, exploring the world of 
              technology through code, creativity, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 hover-glow">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary px-8 py-3">
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Aaryan Soni - BCA Student & Web Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 hover-glow transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;