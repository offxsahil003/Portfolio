import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML', level: 95, category: 'Frontend', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 88, category: 'Frontend', color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 85, category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 80, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', level: 78, category: 'Backend', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', level: 75, category: 'Database', color: 'from-green-600 to-green-800' },
    { name: 'Python', level: 70, category: 'Backend', color: 'from-blue-600 to-yellow-500' }
  ];

  const categories = ['Frontend', 'Backend', 'Database'];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills one by one
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, skill.name]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const CircularProgress = ({ skill, isAnimated }: { skill: typeof skills[0], isAnimated: boolean }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = isAnimated ? circumference - (skill.level / 100) * circumference : circumference;

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold gradient-text">
            {isAnimated ? skill.level : 0}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            I'm always learning and expanding my skill set.
          </p>
        </div>

        {/* Skills by Category */}
        <div ref={skillsRef} className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">{category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
              </div>

              {/* Circular Progress Bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {getSkillsByCategory(category).map((skill, index) => (
                  <Card 
                    key={skill.name}
                    className={`group hover-lift hover-glow bg-card/50 border-border/50 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1}s` }}
                  >
                    <CardContent className="p-8 text-center">
                      <CircularProgress 
                        skill={skill} 
                        isAnimated={animatedSkills.includes(skill.name)} 
                      />
                      <h3 className="text-xl font-semibold mt-4 mb-2">{skill.name}</h3>
                      <Badge variant="outline" className="border-accent text-accent">
                        {skill.category}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Linear Progress Bars */}
              <div className="space-y-6">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div 
                    key={`linear-${skill.name}`}
                    className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1 + 0.5}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">
                        {animatedSkills.includes(skill.name) ? skill.level : 0}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-2000 ease-out ${
                            animatedSkills.includes(skill.name) ? '' : 'w-0'
                          }`}
                          style={{ 
                            width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%' 
                          }}
                        ></div>
                      </div>
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 h-full bg-gradient-to-r from-accent to-primary rounded-full opacity-50 blur-sm transition-all duration-2000 ease-out ${
                          animatedSkills.includes(skill.name) ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Skills</h2>
            <p className="text-muted-foreground">Other technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Version Control', skills: ['Git', 'GitHub', 'GitLab'] },
              { title: 'Design Tools', skills: ['Figma', 'Adobe XD', 'Photoshop'] },
              { title: 'Development Tools', skills: ['VS Code', 'Postman', 'Chrome DevTools'] }
            ].map((category, index) => (
              <Card 
                key={category.title}
                className={`hover-lift hover-glow bg-card/50 border-border/50 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2 + 1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-20 text-center">
          <Card className="hover-glow bg-gradient-to-r from-card/50 to-secondary/30 border-border/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Always Learning</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Technology evolves rapidly, and I believe in continuous learning. I'm currently exploring 
                new frameworks, improving my existing skills, and staying up-to-date with industry trends.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS'].map((tech) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-base px-4 py-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;