import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Github, Linkedin, Download, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rithvikaavula12@gmail.com",
      href: "mailto:rithvikaavula12@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7XXXXXXX",
      href: "tel:+917XXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "github url",
      username: "your username"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "linkedin url",
      username: "your username"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-lg font-medium hover:text-primary transition-colors duration-200 link-hover"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold">Connect on Social</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg border border-glass-border hover:border-primary/50 transition-all duration-300 group"
                      >
                        <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors duration-200">
                            {social.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {social.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <Button 
                className="w-full btn-hero group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume-rithvik-aavula.pdf';
                  link.download = 'Rithvik_Aavula_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download My Resume
              </Button>
            </Card>
          </div>

          {/* Professional Summary */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">Let's Collaborate</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-3 text-lg">Open for Opportunities</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm actively seeking internships and entry-level positions where I can apply my 
                    skills in full-stack development and contribute to meaningful projects.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Front-end development with React & TypeScript</li>
                    <li>• Backend development with Supabase</li>
                    <li>• Database design and management</li>
                    <li>• Prompt engineering and AI integration</li>
                  </ul>
                </div>

                <div className="p-6 bg-secondary/30 rounded-lg border border-glass-border">
                  <h4 className="font-semibold mb-3">Current Focus</h4>
                  <p className="text-muted-foreground">
                    Completing Full Stack Web Development training at NextWave while building 
                    real-world projects and contributing to the GDG VBIT community website.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-secondary/20 to-primary/10 rounded-lg border border-glass-border">
                  <h4 className="font-semibold mb-3">Quick Response Promise</h4>
                  <p className="text-muted-foreground">
                    I typically respond to professional inquiries within 24 hours. Feel free to 
                    reach out via email or connect with me on LinkedIn for opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-8 glass-card rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">
              Ready to Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing?</span>
            </h4>
            <p className="text-muted-foreground mb-6 max-w-md">
              Whether it's a web application, AI project, or innovative solution, 
              let's turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" onClick={() => {
                window.location.href = 'mailto:rithvikaavula42@gmail.com';
              }}>
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                className="glass-card"
                asChild
              >
                <a
                  href="your github url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;