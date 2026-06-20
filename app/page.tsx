"use client"

import { useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Car,
  BookOpen,
  Utensils,
  Cloud,
  ParkingCircle,
  CheckSquare,
  Palette,
  ArrowRight,
  Recycle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projects = [
    {
      title: "WasteLink",
      emoji: "♻️",
      description:
        "Kenya's recycling marketplace connecting waste sellers with nearby recyclers, powered by ML pricing and AI image verification.",
      detailedDescription:
        "Full-stack recycling marketplace with ML-powered dynamic pricing, computer vision waste classification, and geolocation-based recycler matching.",
      tech: ["React", "Supabase", "Python", "Flask", "Machine Learning", "Computer Vision", "Leaflet.js"],
      features: [
        "AI image verification for waste classification",
        "ML-powered dynamic pricing engine",
        "Geolocation-based recycler matching with Leaflet maps",
        "Seller & Recycler role auth via Supabase",
      ],
      liveLink: "https://wastelink-five.vercel.app/",
      githubLink: "https://github.com/yvonnegat/wastelink",
      extraLinks: [
        { label: "Backend", url: "https://github.com/yvonnegat/wastelink-backend-" },
        { label: "ML Model", url: "https://github.com/yvonnegat/wastelinkml" },
      ],
      icon: Recycle,
      color: "bg-emerald-200",
      accent: "bg-emerald-500",
      shape: "square",
      featured: true,
    },
    {
      title: "Library Management System",
      emoji: "📚",
      description:
        "A comprehensive library management system built with Python and Django, featuring book cataloging, user management, and borrowing tracking.",
      detailedDescription:
        "Complete library management solution with advanced cataloging and user management capabilities.",
      tech: ["Python", "Django", "SQLite", "HTML/CSS", "Bootstrap"],
      features: [
        "Book cataloging and search functionality",
        "User registration and management",
        "Borrowing and return tracking",
        "Admin dashboard for library management",
      ],
      liveLink: "https://yvonnega2wiri.pythonanywhere.com/",
      githubLink: null,
      extraLinks: [],
      icon: BookOpen,
      color: "bg-pink-200",
      accent: "bg-pink-400",
      shape: "circle",
      featured: false,
    },
    {
      title: "MEDIGO Healthcare Platform",
      emoji: "🏥",
      description:
        "Healthcare platform providing medical information and services with a user-friendly interface and responsive design.",
      detailedDescription:
        "Modern healthcare platform with intuitive design and comprehensive medical service integration.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
      features: [
        "Responsive medical service interface",
        "User-friendly navigation system",
        "Medical information portal",
        "Cross-platform compatibility",
      ],
      liveLink: "https://yvonnegat.github.io/MEDIGO/",
      githubLink: "https://github.com/yvonnegat/MEDIGO",
      extraLinks: [],
      icon: Smartphone,
      color: "bg-blue-200",
      accent: "bg-blue-400",
      shape: "triangle",
      featured: false,
    },
    {
      title: "Smart Parking System",
      emoji: "🚗",
      description:
        "Intelligent parking management system with real-time availability tracking and user-friendly booking interface.",
      detailedDescription:
        "Real-time parking slot management platform with advanced booking and tracking capabilities.",
      tech: ["JavaScript", "HTML5", "CSS3", "Web APIs", "Local Storage"],
      features: [
        "Real-time parking slot availability",
        "Interactive booking interface",
        "User-friendly dashboard",
        "Responsive design for mobile use",
      ],
      liveLink: "https://yvonnegat.github.io/cypark-smartparking/",
      githubLink: "https://github.com/yvonnegat/cypark-smartparking",
      extraLinks: [],
      icon: ParkingCircle,
      color: "bg-green-200",
      accent: "bg-green-400",
      shape: "square",
      featured: false,
    },
    {
      title: "Recipe Finder App",
      emoji: "🍳",
      description:
        "Discover delicious recipes with this intuitive recipe finder application featuring search and filtering capabilities.",
      detailedDescription: "Advanced recipe discovery platform with API integration and smart search functionality.",
      tech: ["JavaScript", "Recipe API", "HTML5", "CSS3", "Fetch API"],
      features: [
        "Recipe search and filtering",
        "API integration for recipe data",
        "Ingredient-based search",
        "Responsive recipe cards",
      ],
      liveLink: "https://yvonnegat.github.io/recipeFinder/",
      githubLink: "https://github.com/yvonnegat/recipeFinder",
      extraLinks: [],
      icon: Utensils,
      color: "bg-orange-200",
      accent: "bg-orange-400",
      shape: "circle",
      featured: false,
    },
    {
      title: "ToDo Manager",
      emoji: "✅",
      description: "A clean and efficient task management application with local storage and intuitive user interface.",
      detailedDescription: "Streamlined task management solution with persistent storage and clean UI design.",
      tech: ["JavaScript", "Local Storage", "HTML5", "CSS3", "DOM Manipulation"],
      features: [
        "Add, edit, and delete tasks",
        "Local storage persistence",
        "Task completion tracking",
        "Clean, minimalist interface",
      ],
      liveLink: "https://yvonnegat.github.io/ToDo_App/",
      githubLink: "https://github.com/yvonnegat/ToDo_App",
      extraLinks: [],
      icon: CheckSquare,
      color: "bg-purple-200",
      accent: "bg-purple-400",
      shape: "triangle",
      featured: false,
    },
    {
      title: "Elevator Control System",
      emoji: "🏢",
      description:
        "Sophisticated elevator control system simulation with multiple floors and efficient scheduling algorithms.",
      detailedDescription: "Advanced elevator simulation with intelligent scheduling and multi-floor management.",
      tech: ["Python", "Object-Oriented Programming", "Algorithms", "Data Structures"],
      features: [
        "Multi-floor elevator simulation",
        "Efficient scheduling algorithms",
        "Object-oriented design patterns",
        "Real-time floor tracking",
      ],
      liveLink: null,
      githubLink: "https://github.com/yvonnegat/Elevator-System-",
      extraLinks: [],
      icon: Code,
      color: "bg-cyan-200",
      accent: "bg-cyan-400",
      shape: "square",
      featured: false,
    },
    {
      title: "Car Inventory System",
      emoji: "🚙",
      description:
        "Comprehensive vehicle inventory management system built with Python, featuring CRUD operations and data management.",
      detailedDescription:
        "Professional vehicle inventory management with comprehensive CRUD operations and data processing.",
      tech: ["Python", "File I/O", "Data Management", "CSV Processing"],
      features: [
        "Vehicle inventory tracking",
        "CRUD operations for car data",
        "File-based data persistence",
        "Inventory reporting system",
      ],
      liveLink: null,
      githubLink: "https://github.com/yvonnegat/Car-Inventory-System",
      extraLinks: [],
      icon: Car,
      color: "bg-yellow-200",
      accent: "bg-yellow-400",
      shape: "triangle",
      featured: false,
    },
    {
      title: "Inventory Management System",
      emoji: "📦",
      description:
        "Professional inventory management system built with Flask and MySQL, featuring comprehensive stock tracking and management capabilities.",
      detailedDescription:
        "Full-stack inventory management solution with Flask backend, MySQL database, and Docker containerization for scalable deployment.",
      tech: ["Flask", "Python", "MySQL", "Docker", "HTML/CSS", "JavaScript"],
      features: [
        "Complete inventory tracking and management",
        "MySQL database for reliable data storage",
        "Docker containerization for easy deployment",
        "RESTful API design with Flask",
      ],
      liveLink: null,
      githubLink: "https://github.com/yvonnegat/inventory-management",
      extraLinks: [],
      icon: Database,
      color: "bg-emerald-200",
      accent: "bg-emerald-400",
      shape: "square",
      featured: false,
    },
    {
      title: "Acrylic Alchemy Shop",
      emoji: "🎨",
      description: "E-commerce platform for painting supplies with shopping cart functionality and product catalog.",
      detailedDescription: "Complete e-commerce solution for art supplies with shopping cart and product management.",
      tech: ["HTML5", "CSS3", "JavaScript", "E-commerce", "Shopping Cart"],
      features: [
        "Product catalog and browsing",
        "Shopping cart functionality",
        "Product search and filtering",
        "Responsive e-commerce design",
      ],
      liveLink: null,
      githubLink: "https://github.com/yvonnegat/Acrylic-alchemy",
      extraLinks: [],
      icon: Palette,
      color: "bg-rose-200",
      accent: "bg-rose-400",
      shape: "circle",
      featured: false,
    },
    {
      title: "Weather Forecast App",
      emoji: "🌤️",
      description: "Real-time weather application with location-based forecasts and clean, intuitive user interface.",
      detailedDescription: "Modern weather application with geolocation support and comprehensive forecast data.",
      tech: ["JavaScript", "Weather API", "Geolocation API", "CSS3", "Fetch API"],
      features: [
        "Real-time weather data",
        "Location-based forecasts",
        "Geolocation integration",
        "Clean, responsive interface",
      ],
      liveLink: null,
      githubLink: "https://github.com/yvonnegat/weather-app",
      extraLinks: [],
      icon: Cloud,
      color: "bg-indigo-200",
      accent: "bg-indigo-400",
      shape: "square",
      featured: false,
    },
  ]

  const skills = [
    { name: "Python", level: 90, color: "bg-pink-300" },
    { name: "JavaScript", level: 85, color: "bg-blue-300" },
    { name: "React", level: 80, color: "bg-green-300" },
    { name: "Django", level: 85, color: "bg-orange-300" },
    { name: "HTML/CSS", level: 90, color: "bg-purple-300" },
    { name: "Node.js", level: 75, color: "bg-cyan-300" },
    { name: "SQL", level: 80, color: "bg-rose-300" },
    { name: "Git", level: 85, color: "bg-yellow-300" },
    { name: "Flask", level: 80, color: "bg-emerald-300" },
    { name: "Supabase", level: 75, color: "bg-teal-300" },
    { name: "Machine Learning", level: 70, color: "bg-violet-300" },
    { name: "Docker", level: 75, color: "bg-indigo-300" },
    { name: "MySQL", level: 80, color: "bg-pink-400" },
  ]

  const getShapeClasses = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full"
      case "triangle":
        return "rounded-none transform rotate-45"
      case "square":
        return "rounded-lg"
      default:
        return "rounded-lg"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Floating Memphis shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-60"
          style={{
            top: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute w-16 h-16 bg-blue-300 transform rotate-45 opacity-60"
          style={{
            top: "20%",
            right: "10%",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px) rotate(45deg)`,
          }}
        />
        <div
          className="absolute w-12 h-12 bg-yellow-300 rounded-full opacity-60"
          style={{
            bottom: "30%",
            left: "15%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
        <div
          className="absolute w-24 h-24 bg-green-300 opacity-60"
          style={{
            bottom: "20%",
            right: "5%",
            borderRadius: "0 50% 0 50%",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-400 rounded-full" />
              <h1 className="text-xl font-light tracking-wide text-gray-900">Yvonne Gatwiri</h1>
            </div>
            <div className="flex space-x-8 text-sm font-light">
              <a href="#about" className="hover:text-pink-500 transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-green-500 transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-12 relative">
            <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full shadow-lg flex items-center justify-center relative">
              <Code size={48} className="text-gray-700" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 transform rotate-45" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-extralight mb-6 text-gray-900 tracking-tight">Yvonne</h1>
          <div className="relative inline-block mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-2">Full Stack Web Developer</h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 rounded-full" />
          </div>

          <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating elegant digital solutions with clean code and thoughtful design
          </p>

          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white font-light px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light px-8 py-3 rounded-full bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-3 h-20 bg-yellow-400 rounded-full opacity-80" />
        <div className="absolute bottom-1/4 right-10 w-20 h-3 bg-blue-400 rounded-full opacity-80" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-pink-400 rounded-full" />
                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">About Me</h2>
                <div className="w-3 h-3 bg-blue-400 transform rotate-45" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  I'm a passionate full-stack web developer who believes in the power of clean, functional design. My
                  approach combines technical expertise with creative problem-solving to build digital experiences that
                  matter.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  With experience across the full development stack, I enjoy working with modern technologies to create
                  solutions that are both beautiful and functional.
                </p>
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full bg-transparent"
                    onClick={() => window.open("https://github.com/yvonnegat", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/yvonne-gatwiri-mwita/", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-white rounded-3xl shadow-xl flex items-center justify-center relative">
                  <Database size={120} className="text-gray-400" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-400 transform rotate-45" />
                  <div className="absolute top-4 left-4 w-6 h-6 bg-purple-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Projects</h2>
              <div className="w-3 h-3 bg-orange-400 transform rotate-45" />
            </div>
            <p className="text-lg font-light text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore a selection of my work across web development, machine learning, and full-stack applications
            </p>
          </div>

          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.title} className="mb-20 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 shadow-lg">
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-5xl">{project.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-extralight text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">{project.detailedDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm font-light">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((f) => (
                          <li key={f} className="text-gray-600 font-light flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      {project.liveLink && (
                        <Button
                          className="bg-emerald-500 hover:bg-emerald-600 text-white font-light px-6 py-2 rounded-full flex items-center gap-2"
                          onClick={() => window.open(project.liveLink, "_blank")}
                        >
                          <ExternalLink size={16} />
                          View Live App
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          variant="outline"
                          className="border-emerald-500 text-emerald-700 hover:bg-emerald-50 rounded-full bg-transparent font-light"
                          onClick={() => window.open(project.githubLink, "_blank")}
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </Button>
                      )}
                      {project.extraLinks && project.extraLinks.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 rounded-full bg-transparent font-light text-xs"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project) => {
              const Icon = project.icon
              return (
                <div
                  key={project.title}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group"
                >
                  <div className={`h-40 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl opacity-80">{project.emoji}</div>
                    <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-extralight text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className={`px-2 py-1 ${project.accent} text-white rounded-full text-xs font-light`}>
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-xs font-light">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.liveLink ? (
                        <Button
                          size="sm"
                          className={`flex-1 ${project.accent} hover:opacity-90 text-white font-light rounded-full text-sm`}
                          onClick={() => window.open(project.liveLink, "_blank")}
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Live
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="flex-1 bg-gray-200 text-gray-600 font-light rounded-full text-sm"
                        >
                          Coming Soon
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 border-2 text-gray-700 hover:${project.color} rounded-full text-sm font-light bg-transparent`}
                          onClick={() => window.open(project.githubLink, "_blank")}
                        >
                          <Github size={14} className="mr-1" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-purple-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Skills</h2>
              <div className="w-3 h-3 bg-cyan-400 transform rotate-45" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-light text-gray-900">{skill.name}</span>
                    <span className="text-sm font-light text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-rose-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">Let's Connect</h2>
              <div className="w-3 h-3 bg-yellow-400 transform rotate-45" />
            </div>

            <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear about your ideas and explore how we can bring
              them to life together.
            </p>

            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-pink-400 hover:bg-pink-500 text-white font-light px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://github.com/yvonnegat", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                size="lg"
                className="bg-blue-400 hover:bg-blue-500 text-white font-light px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://www.linkedin.com/in/yvonne-gatwiri-mwita/", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full" />
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>
          <p className="text-gray-500 font-light">© 2024 Yvonne Gatwiri Mwita. Crafted with care.</p>
        </div>
      </footer>
    </div>
  )
}
