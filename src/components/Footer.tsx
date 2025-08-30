import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Rithvik Aavula
            </h3>
            <p className="text-muted-foreground">
              Aspiring Full Stack Developer<br />
              Generative AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="your github url"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/30 rounded-lg border border-glass-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="your linkedin url"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/30 rounded-lg border border-glass-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rithvikaavula12@gmail.com"
                className="p-2 bg-secondary/30 rounded-lg border border-glass-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              rithvikaavula12@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Rithvik Aavula. Built with 
            <Heart className="h-4 w-4 text-red-500" /> 
            using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            "Building the web, one project at a time!"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;