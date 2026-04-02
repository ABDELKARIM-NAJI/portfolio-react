import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter, TbMail } from "react-icons/tb"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: TbBrandGithub, url: "#", label: "GitHub" },
    { icon: TbBrandLinkedin, url: "#", label: "LinkedIn" },
    { icon: TbBrandTwitter, url: "#", label: "Twitter" },
    { icon: TbMail, url: "#", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-gray-400">
            <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition transform hover:scale-110"
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-gray-400 text-sm">
            <p>Designed and Built by Me</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
