import { Card } from '@/components/ui/card';
import { GraduationCap, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Your Degree",
      institution: "College or university",
      period: "2023 – 2027",
      grade: "Grade"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "name",
      period: "2023",
      grade: "grade"
    },
    {
      degree: "Secondary School (X)",
      institution: "name",
      period: "2021",
      grade: "Grade"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Career Objective */}
          <div className="animate-slide-up">
            <Card className="glass-card p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Career Objective</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A highly motivated and curious student seeking opportunities to gain real-world experience, 
                improve my problem-solving skills, and grow in a dynamic space. I'm passionate about 
                building innovative web solutions and exploring the frontiers of Generative AI.
              </p>
            </Card>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="text-primary font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;