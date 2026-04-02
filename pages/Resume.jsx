import { TbDownload, TbFileText } from "react-icons/tb"
import Button from "../src/components/ui/Button"

export default function Resume() {
  // You can update this with your actual CV information
  const resumeData = {
    name: "Naji Abdelkarim",
    title: "Commercial & Operations Professional",
    email: "karimakn37@gmail.com",
    phone: "+212 660023478",
    location: "Diyar bouskoura 2, Imm 6 N°4, Bouskoura Casablanca",
    summary: "Professional with diverse experience in hospitality, commercial, retail management, and industrial maintenance. Dedicated team player with strong customer service skills and proven leadership abilities.",
    cvPdfUrl: "https://github.com/ABDELKARIM-NAJI/work-1/raw/main/src/CV_2025100614061881.pdf"
  }

  const sections = [
    {
      title: "Professional Summary",
      content: resumeData.summary
    },
    {
      title: "Contact Information",
      items: [
        { label: "Email", value: resumeData.email },
        { label: "Phone", value: resumeData.phone },
        { label: "Location", value: resumeData.location }
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12 pb-8 border-b border-gray-700">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="text-5xl font-bold mb-2">{resumeData.name}</h1>
            <p className="text-xl text-blue-400 font-semibold">{resumeData.title}</p>
          </div>
          <a
            href={resumeData.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <TbDownload />
            Download PDF
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TbFileText className="text-blue-400" />
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {resumeData.summary}
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm font-semibold">Email</p>
              <a href={`mailto:${resumeData.email}`} className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
                {resumeData.email}
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm font-semibold">Phone</p>
              <a href={`tel:${resumeData.phone}`} className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
                {resumeData.phone}
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm font-semibold">Location</p>
              <p className="text-white text-lg font-semibold">
                {resumeData.location}
              </p>
            </div>
          </div>
        </section>

        {/* PDF Viewer Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Full Resume</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-700 px-6 py-3 flex items-center justify-between">
              <p className="font-semibold flex items-center gap-2">
                <TbFileText className="text-blue-400" />
                CV_2025100614061881.pdf
              </p>
              <a
                href={resumeData.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Open PDF
              </a>
            </div>
            <div className="p-6 h-96 bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <TbFileText className="text-6xl text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">PDF Preview</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                  <a href={resumeData.cvPdfUrl} target="_blank" rel="noopener noreferrer">
                    Download Full Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="mt-12 bg-blue-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
          <h3 className="text-lg font-bold mb-2">📝 Update Your Resume</h3>
          <p className="text-gray-300">
            To customize this Resume page with your actual information:
          </p>
          <ol className="text-gray-300 mt-3 space-y-2 ml-4 list-decimal">
            <li>Edit <code className="bg-gray-800 px-2 py-1 rounded">pages/Resume.jsx</code></li>
            <li>Update the <code className="bg-gray-800 px-2 py-1 rounded">resumeData</code> object with your details</li>
            <li>Update your CV PDF URL in the <code className="bg-gray-800 px-2 py-1 rounded">cvPdfUrl</code> field</li>
            <li>Add your experience, education, and skills sections below</li>
          </ol>
        </section>
      </div>
    </div>
  )
}
