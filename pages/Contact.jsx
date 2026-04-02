import { useState } from "react"
import { TbMail, TbPhone, TbMapPin } from "react-icons/tb"
import Button from "../src/components/ui/Button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      icon: TbMail,
      label: "Email",
      value: "karimakn37@gmail.com",
      link: "mailto:karimakn37@gmail.com"
    },
    {
      icon: TbPhone,
      label: "Phone",
      value: "+212 660023478",
      link: "tel:+212660023478"
    },
    {
      icon: TbMapPin,
      label: "Location",
      value: "Bouskoura, Casablanca",
      link: "#"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-gray-400 text-lg mb-12">Have a project in mind? Let's work together!</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          {contactMethods.map(({ icon: Icon, label, value, link }) => (
            <a
              key={label}
              href={link}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition flex items-start gap-4"
            >
              <Icon className="text-3xl text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-400 text-sm font-semibold">{label}</p>
                <p className="text-white text-lg font-semibold hover:text-blue-400 transition">
                  {value}
                </p>
              </div>
            </a>
          ))}

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Me</h3>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 transition rounded-lg px-4 py-2 font-semibold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </Button>

            {submitted && (
              <div className="bg-green-900 text-green-200 rounded-lg p-4 text-center">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
