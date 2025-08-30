import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Your Project Name",
      description: "Project Description",
      tech: ["Tech stack used"],
      liveUrl: "Your Project url",
      featured: true
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`glass-card group hover:shadow-glow transition-all duration-500 overflow-hidden animate-scale-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="icon" className="glass-card">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="outline" className="glass-card btn-hero" onClick={() => window.open('https://github.com/RithvikAavula', '_blank')}>
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
