import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and secure payment processing.',
      image: '/images/profile_1.webp', // Using available image as placeholder
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'User Authentication & Authorization',
        'Payment Gateway Integration',
        'Admin Dashboard',
        'Responsive Design',
        'Real-time Order Tracking'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task manager with drag-and-drop functionality, real-time updates, and collaborative features. Built with modern React patterns and local storage for data persistence.',
      image: '/images/profile_1.webp',
      technologies: ['React', 'CSS', 'LocalStorage', 'Drag & Drop API'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Drag & Drop Interface',
        'Real-time Updates',
        'Task Categories',
        'Progress Tracking',
        'Responsive Design'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website with smooth animations, responsive design, and modern UI. Features include project showcase, contact form, and optimized performance.',
      image: '/images/profile_1.webp',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Smooth Animations',
        'Responsive Design',
        'Contact Form',
        'SEO Optimized',
        'Fast Loading'
      ]
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return Code;
      case 'Frontend': return Palette;
      case 'Backend': return Database;
      default: return Zap;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's a showcase of my recent work. Each project represents a unique challenge 
            and demonstrates different aspects of my development skills.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`hover-lift ${
                selectedCategory === category 
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                  : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <Card 
                key={project.id}
                className={`group hover-lift hover-glow bg-card/50 border-border/50 overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 text-foreground">
                        <CategoryIcon size={14} className="mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="flex-1 hover-glow bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
            <p className="text-muted-foreground">A deep dive into my most comprehensive project</p>
          </div>

          <Card className="hover-glow bg-card/50 border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src="/images/profile_1.webp"
                    alt="Featured Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <Badge variant="outline" className="border-accent text-accent mb-4">
                    <Code size={14} className="mr-1" />
                    Featured Project
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">
                    Advanced E-commerce Platform
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A comprehensive e-commerce solution built with modern technologies. 
                    This project showcases advanced features like real-time inventory management, 
                    AI-powered recommendations, and seamless payment processing.
                  </p>

                  {/* Detailed Features */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Responsive design with mobile-first approach</li>
                        <li>• Advanced search and filtering capabilities</li>
                        <li>• Real-time cart updates and wishlist functionality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• RESTful API with comprehensive documentation</li>
                        <li>• Secure authentication and authorization</li>
                        <li>• Payment gateway integration with multiple providers</li>
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'AWS'].map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button className="hover-glow bg-accent text-accent-foreground hover:bg-accent/90">
                      <ExternalLink size={18} className="mr-2" />
                      View Live Project
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Github size={18} className="mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="hover-glow bg-gradient-to-r from-card/50 to-secondary/30 border-border/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Have a Project in Mind?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and bring innovative ideas to life. 
                Let's discuss how we can collaborate to create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-glow bg-accent text-accent-foreground hover:bg-accent/90">
                  Start a Project
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  View More Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;