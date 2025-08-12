import { Code, Briefcase, GraduationCap, Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const App = () => {
  const personalInfo = {
    name: "Alex Chen",
    title: "Senior Software Engineer",
    email: "alex.chen@example.com",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with 5+ years of experience building scalable web applications and distributed systems. Specialized in full-stack development with expertise in React, Node.js, and cloud technologies."
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2018 - 2020",
      gpa: "3.9/4.0",
      description: "Focused on distributed systems and machine learning algorithms"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      year: "2014 - 2018",
      gpa: "3.8/4.0",
      description: "Graduated with honors, member of ACM student chapter"
    }
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of a microservices architecture that improved system scalability by 40%",
        "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
        "Mentored 3 junior developers and conducted code reviews for team projects",
        "Optimized database queries resulting in 60% reduction in response time"
      ]
    },
    {
      title: "Software Engineer",
      company: "Innovate Solutions",
      period: "2019 - 2021",
      location: "San Jose, CA",
      achievements: [
        "Developed RESTful APIs serving 500k+ monthly active users",
        "Built real-time dashboard using WebSockets and React",
        "Collaborated with UX team to improve user engagement by 35%",
        "Integrated automated testing framework with 90% test coverage"
      ]
    }
  ];

  const projects = [
    {
      name: "Distributed Task Scheduler",
      description: "A scalable task scheduling system built with Go and Kubernetes that handles millions of tasks daily across multiple regions.",
      tech: ["Go", "Kubernetes", "PostgreSQL", "Redis"],
      github: "https://github.com/alexchen/task-scheduler",
      live: "https://taskscheduler-demo.com",
      image: "https://placehold.co/400x250/3b82f6/ffffff?text=Task+Scheduler"
    },
    {
      name: "AI-Powered Analytics Platform",
      description: "Machine learning platform that analyzes user behavior and provides actionable insights for product teams.",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      github: "https://github.com/alexchen/ai-analytics",
      live: "https://analytics-platform.com",
      image: "https://placehold.co/400x250/10b981/ffffff?text=AI+Analytics"
    },
    {
      name: "Real-time Collaboration Tool",
      description: "Web-based collaborative workspace with real-time editing, chat, and document sharing capabilities.",
      tech: ["TypeScript", "Node.js", "Socket.IO", "MongoDB"],
      github: "https://github.com/alexchen/collab-tool",
      live: "https://collab-tool.com",
      image: "https://placehold.co/400x250/f59e0b/ffffff?text=Collaboration+Tool"
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C++"],
    frameworks: ["React", "Node.js", "Express", "Django", "Spring Boot"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "Jenkins", "Terraform"]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexchen", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexchen", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexchen", label: "Twitter" },
    { icon: Mail, href: "mailto:alex.chen@example.com", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Alex Chen</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="about" className="text-center py-20">
          <div className="relative mb-8">
            <img
              src="https://placehold.co/200x200/3b82f6/ffffff?text=AC"
              alt="Alex Chen"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
              <Code className="h-6 w-6" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{personalInfo.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">{personalInfo.title}</p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {personalInfo.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2" />
              {personalInfo.email}
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600">Expertise across the full stack development spectrum</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 capitalize flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-600" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 mb-16">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-gray-600">Career journey and key achievements</p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600 font-medium">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-700 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Selected work that showcases technical expertise and innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 mb-16">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600">Academic background and achievements</p>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{edu.school}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600 font-medium">{edu.year}</p>
                    <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl opacity-90 mb-8">Interested in collaborating or have a project in mind?</p>
          </div>
          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
