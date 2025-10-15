import React, { useEffect, useState } from 'react';
import { Code, Coffee, Music, Camera, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const interests = [
    { icon: Code, name: 'Coding', description: 'Building innovative solutions' },
    { icon: Coffee, name: 'Coffee', description: 'Fuel for creativity' },
    { icon: Music, name: 'Music', description: 'Inspiration while coding' },
    { icon: Camera, name: 'Photography', description: 'Capturing moments' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Freelance Web Developer',
      description: 'Started my journey as a freelance developer, working with various clients to create modern web applications.'
    },
    {
      year: '2022',
      title: 'Full Stack Development',
      description: 'Mastered the MERN stack and began building complete web applications from frontend to backend.'
    },
    {
      year: '2021',
      title: 'Frontend Specialization',
      description: 'Focused on React.js and modern frontend technologies to create engaging user interfaces.'
    },
    {
      year: '2020',
      title: 'Web Development Journey',
      description: 'Started learning web development with HTML, CSS, and JavaScript fundamentals.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer who loves creating digital experiences that make a difference. 
            Here's my story and what drives me every day.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Profile Image and Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="overflow-hidden hover-glow bg-card/50 border-border/50">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src="/images/sahil_profile.jpg"
                    alt="Sahil Shah"
                    className="w-full h-full object-cover hover-scale transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "/images/profile_1.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Sahil Shah</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <MapPin size={18} className="text-accent" />
                      <span>Based in India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar size={18} className="text-accent" />
                      <span>3+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code size={18} className="text-accent" />
                      <span>Full Stack Developer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Sahil Shah, a passionate freelance web developer with a love for creating 
                  beautiful, functional, and user-friendly web experiences. My journey in web development 
                  started with curiosity and has evolved into a full-fledged career.
                </p>
                <p>
                  I specialize in both frontend and backend development, with expertise in modern 
                  technologies like React.js, Node.js, Express.js, and MongoDB. I believe in writing 
                  clean, maintainable code and creating applications that not only look great but 
                  perform exceptionally well.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while planning my next project. 
                  I'm always eager to learn and take on new challenges that push my skills to the next level.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python'].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-secondary/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card 
                  key={interest.name}
                  className={`group hover-lift hover-glow bg-card/50 border-border/50 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{interest.name}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">My Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex items-start mb-12 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="hover-lift bg-card/50 border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="outline" className="border-accent text-accent">
                            {item.year}
                          </Badge>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;