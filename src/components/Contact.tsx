import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or just chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-left">
              <Card className="card-glow hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Email</h3>
                      <p className="text-muted-foreground">Drop me a line</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:abc@gmail.com" 
                    className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    abc@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="card-glow hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Location</h3>
                      <p className="text-muted-foreground">Where I'm based</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">
                    Vadodara, Gujarat, India
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Let's Talk</h3>
                      <p className="text-muted-foreground">Open to opportunities</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm interested in internships, freelance projects, 
                    and collaboration opportunities in web development.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="hover:bg-secondary">
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-secondary">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form / Call to Action */}
            <div className="animate-fade-in-right">
              <Card className="card-glow hover-glow h-full">
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="text-center space-y-6">
                    <div className="p-4 bg-gradient-primary/20 rounded-full w-fit mx-auto">
                      <MessageCircle className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Whether you have a project in mind, want to discuss opportunities, 
                        or just want to say hello, I'd love to hear from you!
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium hover-glow"
                        onClick={() => window.location.href = 'mailto:abc@gmail.com'}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send an Email
                      </Button>
                      
                      <p className="text-sm text-muted-foreground">
                        Or connect with me on social media
                      </p>
                      
                      <div className="flex gap-3 justify-center">
                        <Button variant="outline" size="sm" className="hover:bg-secondary">
                          LinkedIn
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-secondary">
                          GitHub
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-secondary">
                          Twitter
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in-up">
          <p className="text-muted-foreground">
            © 2024 Aaryan Soni. Currently learning and growing in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;