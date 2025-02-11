import { Facebook, Instagram, Apple } from 'lucide-react'
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

export function AppFooter() {
  const navItems = ["Nav Item 1", "Nav Item 2", "Nav Item 3", "Nav Item 4", "Nav Item 5"]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full rounded-t-md p-4 bg-[#1F1F76] text-white h-[10%]">
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo and Text */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold">TIKLOG</a>
            <p className="mt-2 text-gray-400">XXXXXXX</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-medium hover:text-[#4154BE] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Tiklog
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-[#4154BE] transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-[#4154BE] transition-colors">
              <FaGoogle className="h-6 w-6"/>
            </a>
            <a href="#" className="text-white hover:text-[#4154BE] transition-colors">
              <FaApple className="h-6 w-6"/>
            </a>
            <a href="#" className="text-white hover:text-[#4154BE] transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

