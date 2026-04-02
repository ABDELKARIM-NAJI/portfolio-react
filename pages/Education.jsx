import { TbSchool, TbCalendar, TbMedal } from "react-icons/tb"

export default function Education() {
  const education = [
    {
      school: "Faculté des Sciences et Technique Settat",
      degree: "Licence en Ingénierie Industrielle",
      period: "2019",
      description: "Completed higher education degree focused on industrial engineering, manufacturing processes, and operational management.",
      achievements: ["Industrial Engineering", "Manufacturing Optimization", "Technical Management"]
    },
    {
      school: "Institut Supérieur Industriel Casablanca",
      degree: "Technicien Spécialisé en Maintenance des Machines",
      period: "2016 - 2018",
      description: "Specialized technical training program in industrial machine maintenance, focusing on mechanical repairs, troubleshooting, and equipment management.",
      achievements: ["Machine Maintenance", "Technical Diagnostics", "Equipment Repair"]
    },
    {
      school: "Lycée Prince Moulay Abdellah",
      degree: "Baccalauréat en Sciences de la Vie et Terre (SVT)",
      period: "2016",
      description: "Secondary education with focus on science and life sciences, providing foundational knowledge in natural sciences and analytical thinking.",
      achievements: ["Science Foundation", "Critical Thinking", "Natural Sciences"]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Education</h1>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition border-l-4 border-blue-400">
            <div className="flex items-start gap-4 mb-4">
              <TbSchool className="text-3xl text-blue-400 flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                <p className="text-blue-400 text-lg font-semibold">{edu.school}</p>
                <div className="flex items-center gap-2 text-gray-400 mt-2">
                  <TbCalendar className="text-lg" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {edu.description}
            </p>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TbMedal className="text-yellow-400" />
                Achievements
              </h4>
              <ul className="space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
