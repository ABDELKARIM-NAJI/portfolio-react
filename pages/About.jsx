import { TbCode, TbDatabase, TbChartBar } from "react-icons/tb"

export default function About() {
  const skills = [
    {
      category: "Professional Skills",
      icon: TbCode,
      items: ["Team Collaboration", "Customer Service", "Leadership"]
    },
    {
      category: "Languages",
      icon: TbDatabase,
      items: ["Arabic (Native)", "French (Fluent)", "English"]
    },
    {
      category: "Interests",
      icon: TbChartBar,
      items: ["Football", "Coaching", "Community Work"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* About Section */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Professional with diverse experience in hospitality, commercial operations, and retail management. Strong background in customer service, team leadership, and operational excellence.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Driven by reliability, teamwork, and punctuality. Passionate about client satisfaction and community contribution.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-8 shadow-2xl">
            <div className="bg-gray-900 rounded-lg h-80 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/profile.jpg.webp" 
                alt="Naji Abdelkarim" 
                className="w-full h-full object-cover"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.category} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-3xl text-blue-400" />
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
