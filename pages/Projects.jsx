import { TbExternalLink, TbBrandGithub } from "react-icons/tb"
import Button from "../src/components/ui/Button"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      image: "🛍️",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "✅",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with real-time statistics.",
      image: "📊",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Application",
      description: "Beautiful weather app with location-based forecasts and weather alerts.",
      image: "🌤️",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "Blog Platform",
      description: "A CMS blog platform with markdown support, SEO optimization, and comment system.",
      image: "📝",
      technologies: ["Next.js", "Markdown", "PostgreSQL", "Vercel"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills with smooth animations.",
      image: "💼",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            {/* Project Image */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-40 flex items-center justify-center">
              <span className="text-7xl">{project.image}</span>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                    Live Demo
                    <TbExternalLink />
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white flex items-center justify-center gap-2 py-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                    Code
                    <TbBrandGithub />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
