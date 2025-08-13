import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Sun,
  Moon,
  ExternalLink as LinkIcon,
  Instagram,
  Phone,
  Code,
  Copy,
  Check,
  Home,
  User,
  Wrench,
  FolderOpen,
  Briefcase,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const roles = [
    'Backend Developer', 
    'Blockchain Developer',
    'Frontend Developer',
     
  ];
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
         if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
           setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
         if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
           setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting, roles]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('alex@example.com');
     alert('Email copied to clipboard!');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
     alert('Failed to copy email. Please try again.');
    }
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getNavIcon = (section: string) => {
    switch (section) {
      case 'home': return <Home size={18} />;
      case 'about': return <User size={18} />;
      case 'Education': return <User size={18} />;
      case 'skills': return <Wrench size={18} />;
      case 'projects': return <FolderOpen size={18} />;
      case 'experience': return <Briefcase size={18} />;
      case 'contact': return <MessageCircle size={18} />;
      default: return null;
    }
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode 
    ? 'bg-slate-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-slate-800/50 border-slate-700'
    : 'bg-white/80 border-gray-200';

  const allTechnologies = [
     
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', url: 'https://expressjs.com' },
      { name: 'EJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ejs/ejs-original.svg', url: 'https://ejs.co' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', url: 'https://aws.amazon.com' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://www.java.com' },
       { name: 'Neo4j', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg', url: 'https://neo4j.com/' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://reactjs.org' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {name: 'AWS',logo:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',url: 'https://aws.amazon.com'},
    {name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', url: 'https://numpy.org' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', url: 'https://pandas.pydata.org' },
    { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', url: 'https://jquery.com' },
    
  ];

  const projects = [
    {
      title: 'Hive Mind',
      description: 'A collaborative platform for real-time idea exchange, discussions, and Q&A. Built with a chat interface, reputation system, and upvote/downvote mechanism, HiveMind encourages decentralized knowledge sharing in communities.',
      image: 'hivemind.jpeg.avif',
      tech: ['React', 'Node.js', 'Express.js','MongoDB','WebSockets'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Nexa Health Ai',
      description: 'A real-time platform for discussions and Q&A, with chat, reputation, and voting to support decentralized community knowledge sharing',
      image: 'nexa.jpeg',
      tech: ['React', 'Node.js', 'Express.js','MongoDB','AI/ML'],
      demo: '#',
      github: '#'
    },
    {
      title: 'InstaMark',
      description: 'A secure attendance system using facial recognition and QR codes, with IP fraud detection, spoofing alerts, and cloud-based tracking.',
      image: 'instamark.jpeg',
      tech: ['React', 'Node.js', 'Express.js','MongoDB','AI/ML','Python (OpenCV)'],
      demo: '#',
      github: '#'
    }
  ];

  const experience = [
    {
      title: 'Core Member',
      company: 'Codex',
      period: 'Jan 2024-Present',
      description: 'Worked with Codex, the official coding club of our college, contributing to hackathons, open-source projects, and technical workshops.'
    },
    {
      title: 'Campus Ambassador',
      company: 'Physics Wallah',
      period: 'March 2025 - Present',
      description: 'Served as a PW Campus Ambassador, promoting tech initiatives, coordinating events, and building peer engagement for Physics Wallah’s campus programs'
    },
    {
      title: 'Contributor',
      company: 'GirlScript Summer of Code (GSSoC)',
      period: 'July-2025-Present',
      description: 'Contributed to open-source projects by resolving issues, improving features, and collaborating with maintainers during the summer coding program.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-gray-200'
      } border-b`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
            >
              My Resume
              <ExternalLink size={16} className="text-blue-500" />
            </a>
            
             <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-500 ${
                    activeSection === item ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

             <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

           {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700 bg-slate-900/95 backdrop-blur-md">
               {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`flex items-center gap-3 w-full text-left py-3 px-4 capitalize hover:text-blue-500 transition-all duration-200 hover:bg-slate-800/50 rounded-lg mx-2 ${
                    activeSection === item ? 'text-blue-500 bg-slate-800/30' : ''
                  }`}
                >
                  {getNavIcon(item)}
                  <span>{item}</span>
                </button>
              ))}
            </div>
          )}

           <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className={`flex items-center justify-around py-2 px-4 backdrop-blur-md border-t ${
              isDarkMode 
                ? 'bg-slate-900/95 border-slate-700' 
                : 'bg-white/95 border-gray-200'
            }`}>
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-[50px] ${
                    activeSection === item 
                      ? 'text-blue-500 bg-blue-500/10 scale-110' 
                      : 'text-gray-500 hover:text-blue-500 hover:bg-slate-800/30'
                  }`}
                >
                  <div className={`transition-all duration-200 ${
                    activeSection === item ? 'scale-125' : ''
                  }`}>
                    {getNavIcon(item)}
                  </div>
                  <span className="text-xs mt-1 font-medium capitalize">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
  id="home"
  className="min-h-screen flex items-center justify-center relative overflow-hidden"
>
  {/* Animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-500/20 animate-gradient-x"></div>

  {/* Floating & rotating blobs */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow rotate-animation"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float rotate-animation-delayed"></div>
    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
  </div>

  {/* Orbiting particles */}
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/40 rounded-full animate-orbit"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
        }}
      ></div>
    ))}
  </div>

  {/* Main content */}
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="max-w-4xl mx-auto">
      {/* Heading with shimmer + sparkles */}
      <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent shimmer-animation">
        Blockchain Developer
        {/* Sparkles */}
        <span className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></span>
          ))}
        </span>
      </h1>

      <div className="text-xl md:text-2xl mb-8 opacity-90 h-10 flex items-center justify-center">
        <span className="mr-2">I am a</span>
        <span className="inline-flex items-center min-w-[280px] text-left">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
            {displayText}
          </span>
          <span className="ml-1 w-0.5 h-6 bg-blue-500 typing-cursor"></span>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection("projects")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`px-8 py-3 border rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
            isDarkMode
              ? "border-slate-600 hover:border-blue-500 hover:bg-slate-800"
              : "border-gray-300 hover:border-blue-500 hover:bg-gray-50"
          }`}
        >
          Get In Touch
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Down Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown size={32} className="opacity-60" />
  </div>
</section>

       <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-green-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 animate-shimmer"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="public/hari.jpeg"
                  alt="Profile"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Passionate Developer and Problem Slover</h3>
                <p className="text-lg mb-6 opacity-90">
                A passionate and curious individual with a drive to build, learn, and solve real-world problems through technology.
                I enjoy exploring new ideas, collaborating on meaningful projects, and continuously improving my skills.
                </p>
                 <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <Mail size={20} className="text-blue-500" />
                    <span className="text-lg font-medium">suryakantapani2004@gmail.com</span>
                    <button
                      onClick={copyEmail}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        emailCopied
                          ? 'bg-green-500 text-white'
                          : isDarkMode 
                            ? 'bg-slate-700 hover:bg-slate-600 text-blue-400' 
                            : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
                      }`}
                    >
                      {emailCopied ? (
                        <>
                          <Check size={14} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy Email
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href="mailto:suryakantapani2004@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Mail size={16} />
                    Shoot Email
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma'].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-slate-800 text-blue-400' 
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
 

       

       <section id="skills" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/5 via-red-500/8 to-pink-500/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-400/5 rounded-full blur-2xl animate-spin-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-400/5 rounded-full blur-2xl animate-bounce-slow"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
            
             <div className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm border mb-16 ${cardClasses}`}>
              <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 sm:gap-6">
                {allTechnologies.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-xl border transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/40 border-slate-600 hover:border-blue-400 hover:from-slate-600/80 hover:to-slate-700/60 backdrop-blur-sm' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200 hover:border-blue-400 hover:from-blue-50/90 hover:to-white/90 backdrop-blur-sm'
                    } animate-tech-float`}
                    title={`Visit ${tech.name} website`}
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  >
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 animate-pulse-glow"></div>
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 mb-2 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 filter group-hover:drop-shadow-lg relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-center leading-tight transition-all duration-300 group-hover:text-blue-500 group-hover:font-semibold relative z-10">{tech.name}</span>
                    </div>
                    
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                      <LinkIcon size={12} className="text-blue-500 animate-bounce" />
                    </div>
                    
                     <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
        <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/8 via-indigo-500/12 to-blue-500/8"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-violet-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative rounded-xl overflow-hidden shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[400px] ${cardClasses}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 ${
                    isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
                  }`}>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-base opacity-90 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                            isDarkMode 
                              ? 'bg-slate-700 text-blue-400' 
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a
                        href={project.github}
                        className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium transition-colors duration-200 ${
                          isDarkMode 
                            ? 'border-slate-600 hover:border-blue-500 hover:bg-slate-700' 
                            : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'
                        }`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                  
                   <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-3 truncate">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                            isDarkMode 
                              ? 'bg-slate-700 text-blue-400' 
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-slate-700 text-slate-400' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section id="experience" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-l from-amber-500/8 via-yellow-500/12 to-orange-500/8"></div>
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-amber-300/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-yellow-300/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-orange-300/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-2000"></div>
        </div>
        
         <div className="absolute left-1/2 top-32 bottom-20 w-1 bg-gradient-to-b from-amber-400/50 via-yellow-400/50 to-orange-400/50 transform -translate-x-1/2 hidden lg:block">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-1/2 animate-timeline-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 animate-timeline-pulse animation-delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-4 h-4 bg-orange-400 rounded-full transform -translate-x-1/2 animate-timeline-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-text-reveal">
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="grid gap-8 lg:gap-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`group relative rounded-2xl shadow-xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] animate-experience-glow ${
                    index % 2 === 0 ? 'animate-slide-in-left lg:mr-12' : 'animate-slide-in-right lg:ml-12'
                  } ${cardClasses}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  { }
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  
                  { }
                  <div className={`absolute top-8 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 hidden lg:block ${
                    index % 2 === 0 ? '-right-8' : '-left-8'
                  }`}></div>
                  
                  {}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative p-8">
                    {}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                      <Code size={20} className="text-white" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors duration-300 animate-text-reveal" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300 animate-text-reveal" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                          {exp.company}
                        </h4>
                      </div>
                      <div className="mt-4 md:mt-0 animate-text-reveal" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border transition-all duration-300 group-hover:scale-105 ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-amber-400 border-slate-500 group-hover:from-amber-500/20 group-hover:to-orange-500/20 group-hover:border-amber-400' 
                            : 'bg-gradient-to-r from-amber-50/80 to-yellow-50/80 text-amber-700 border-amber-200 group-hover:from-amber-100/80 group-hover:to-yellow-100/80 group-hover:border-amber-400'
                        }`}>
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                     <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <p className="text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:pl-6 animate-text-reveal" style={{ animationDelay: `${index * 0.2 + 0.4}s` }}>
                        {exp.description}
                      </p>
                    </div>
                    
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/8 via-pink-500/12 to-fuchsia-500/8"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-rose-400/30 transform rotate-45 animate-spin"></div>
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-pink-400/30 transform rotate-45 animate-spin animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-fuchsia-400/30 transform rotate-45 animate-spin animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg mb-12 opacity-80">
              Have a project in mind? Let's create something amazing together.
            </p>
            
            <div className="flex justify-center items-center gap-8 mb-12">
              <a
                href="mailto:alex@example.com"
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-xl ${cardClasses}`}
              >
                <Mail size={20} className="text-blue-500" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/suryakanta-pani-19a544294/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-xl ${cardClasses}`}
              >
                <Linkedin size={20} className="text-blue-500" />
              </a>
              
              <a
                href="https://github.com/Suryakantapani"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-xl ${cardClasses}`}
              >
                <Github size={20} className="text-blue-500" />
              </a>
              
              <a
                href="https://www.instagram.com/pani_suryakanta/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-xl ${cardClasses}`}
              >
                <Instagram size={20} className="text-blue-500" />
              </a>
              
              <a
                href="+91 8658806552"
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-xl ${cardClasses}`}
              >
                <Phone size={20} className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

       <footer className={`py-8 border-t relative overflow-hidden ${
        isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-gray-200 bg-gray-100'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 via-gray-600/8 to-slate-600/5"></div>
        <div className="container mx-auto px-6 text-center pb-16 md:pb-0">
          <p className="opacity-60">
            © 2025 Suryakanta Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;