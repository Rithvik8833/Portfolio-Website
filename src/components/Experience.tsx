import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Code, Palette } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: Code,
      title: "Website Maintenance",
      description: "Maintained and enhanced the GDG VBIT community website with modern web technologies"
    },
    {
      icon: Users,
      title: "Team Profiles",
      description: "Built comprehensive team profile pages showcasing community members and their contributions"
    },
    {
      icon: Building2,
      title: "Event Pages",
      description: "Created dynamic event pages and announcements system for community engagement"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Applied responsive design principles and best practices for optimal user experience"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience building and maintaining community-driven web platforms
          </p>
        </div>

        {/* Main Experience Card */}
        <Card className="glass-card p-8 mb-12 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Web Developer</h3>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    Current Position
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <h4 className="text-xl font-semibold text-primary">GDG VBIT</h4>
                <p className="text-muted-foreground">Google Developer Groups</p>
                <p className="text-muted-foreground">Vignana Bharathi Institute of Technology</p>
                <p className="text-sm text-accent font-medium">2023 - Present</p>
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg border border-glass-border">
                <h5 className="font-semibold mb-2 text-primary">Key Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "TypeScript", "Supabase", "Lovable", "Vercel"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary/50 text-xs rounded-full border border-glass-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h4 className="text-xl font-bold mb-6 text-foreground">Key Responsibilities & Achievements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {responsibilities.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 bg-secondary/20 rounded-lg border border-glass-border hover:border-primary/30 transition-colors duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <h5 className="font-bold text-lg mb-3 text-primary">Impact & Results</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Enhanced community website performance and user engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Implemented responsive design principles for mobile-first experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Collaborated with team members to deliver high-quality web solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Applied modern development practices and version control workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;