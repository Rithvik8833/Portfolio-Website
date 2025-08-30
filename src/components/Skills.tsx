import { Card } from '@/components/ui/card';
import { Code2, Database, Lightbulb, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["HTML", "CSS", "Python", "C Programming"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "Supabase"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "AI & Innovation",
      skills: ["Generative AI Tools", "Prompt Engineering"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Development Focus",
      skills: ["Full Stack Web Development", "Real-world Projects", "Logic Development"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies and tools that power my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 group hover:shadow-glow transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${category.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm border border-glass-border hover:border-primary/50 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certification Section */}
        <div className="mt-20 animate-fade-in">
          <Card className="glass-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Current <span className="bg-gradient-primary bg-clip-text text-transparent">Training</span>
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-secondary/30 rounded-xl p-6 border border-glass-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-2">Full Stack Web Development</h4>
                    <p className="text-lg text-accent font-medium mb-2">NextWave</p>
                    <p className="text-muted-foreground">Dec 2023 – Present</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-sm text-muted-foreground mb-2">Progress</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">HTML, CSS, MySQL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Python (In Progress)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-glass-border">
                  <p className="text-muted-foreground">
                    <strong>Focus:</strong> Real-world project building and strong logic development
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;