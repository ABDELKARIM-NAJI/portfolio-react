import { TbBriefcase, TbCalendar } from "react-icons/tb"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company A",
      period: "2023 - Present",
      description: "Lead development of web applications using React and Node.js. Mentored junior developers and improved application performance by 40%.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "Tech Company B",
      period: "2021 - 2023",
      description: "Developed and maintained multiple web applications. Implemented RESTful APIs and optimized database queries.",
      technologies: ["React", "Express", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Tech Company C",
      period: "2020 - 2021",
      description: "Built responsive user interfaces using React. Collaborated with designers and product team to deliver high-quality products.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "Tech Company D",
      period: "2019 - 2020",
      description: "Started web development journey. Worked on both frontend and backend features. Learned best practices and coding standards.",
      technologies: ["JavaScript", "HTML/CSS", "jQuery", "PHP"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Work Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition border-l-4 border-blue-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <TbBriefcase className="text-2xl text-blue-400" />
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                </div>
                <p className="text-blue-400 text-lg font-semibold">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <TbCalendar className="text-xl" />
                <span className="whitespace-nowrap">{exp.period}</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
