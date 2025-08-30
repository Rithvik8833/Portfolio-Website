import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rithvik Aavula
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-4 text-muted-foreground font-medium">
            Aspiring Full Stack Developer | Generative AI Enthusiast
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-accent font-medium">
            "Building the web, one project at a time!"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={20} />
              <span>rithvikaavula12@gmail.com</span>
            </div>
            <div className="text-muted-foreground hidden sm:block">•</div>
            <div className="text-muted-foreground">
              📍 Hyderabad, India
            </div>
            <div className="text-muted-foreground hidden sm:block">•</div>
            <div className="text-muted-foreground">
              📞 +91 7XXXXXXX
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            
            
            <div className="flex gap-4">
              <a href="your github url" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="glass-card hover:shadow-glow transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="your linkedin url" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="glass-card hover:shadow-glow transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="animate-pulse">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;