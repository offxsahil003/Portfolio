import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/offx.sahil',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/offx_sahil',
      icon: MessageCircle,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:sahilshah786007@gmail.com',
      icon: Mail,
      color: 'hover:text-accent'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <span className="text-xl font-bold gradient-text">Sahil Shah</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Freelance Web Developer passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-secondary/50 text-muted-foreground transition-all duration-300 hover:bg-secondary hover-lift ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:sahilshah786007@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>sahilshah786007@gmail.com</span>
              </a>
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center">
              © {currentYear} Sahil Shah. Made with 
              <Heart size={16} className="mx-1 text-red-500 animate-pulse-custom" />
              and lots of coffee.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;