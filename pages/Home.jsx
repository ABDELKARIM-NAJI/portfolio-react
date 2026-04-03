import { Link } from "react-router-dom"
import { TbArrowRight } from "react-icons/tb"
import Button from "../src/components/ui/Button"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-400 font-semibold">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Naji Abdelkarim</span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Commercial & Operations Professional with diverse experience in hospitality, retail management, and customer service. 
            Dedicated to delivering excellence through teamwork, reliability, and a customer-first approach.
          </p>

          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2">
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <TbArrowRight />
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-sm">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-75 -z-10"></div>
            
            {/* Image container with border */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl overflow-hidden w-full aspect-square flex items-center justify-center">
                <img 
                  src="/images/DSC_9240 copie.jpg"
                  alt="Naji Abdelkarim" 
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-6 py-12 border-y border-gray-700">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400"></p>
          <p className="text-gray-400">Years Professional Experience</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400"></p>
          <p className="text-gray-400">Companies Worked With</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">4</p>
          <p className="text-gray-400">Languages</p>
        </div>
      </div>
    </div>
  )
}
