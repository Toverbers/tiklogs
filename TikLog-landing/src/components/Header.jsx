import { useState } from 'react'
import { Store, User, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logo } from '@/icon/Icons'

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = ["contact", "terms Page", "about", "services"]

  const SignUpDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#1F1F76] text-white hover:bg-[#4154BE]/90 w-full md:w-auto">
          Sign Up / Login
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[350px] p-4" align="end">
        <DropdownMenuItem className="flex flex-col items-start p-2 focus:bg-slate-100 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
            <User className="h-5 w-5 text-[#4154BE]" />
            <span className="font-medium">
              Sign up/ Login to be a <span className="text-[#4154BE]">Customer</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground pl-7">
            Create your account or log in to schedule and track deliveries with ease.
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col items-start p-2 focus:bg-slate-100 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
            <Store className="h-5 w-5 text-[#4154BE]" />
            <span className="font-medium">
              Sign up/ Login to be a <span className="text-[#4154BE]">Vendor</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground pl-7">
            Join Tiklog by signing up or logging into manage orders, streamline deliveries, and grow your business.
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex flex-col items-start p-2 focus:bg-slate-100 cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
            <Store className="h-5 w-5 text-[#4154BE]" />
            <span className="font-medium">
              Sign up/ Login to be a <span className="text-[#4154BE]">Rider</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground pl-7">
            Become a rider by signing up or logging to start earning by delivering packages on your schedule.
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="mr-8">
            <Logo />
          </a>

          {/* Navigation Items - Desktop */}
          <nav className="hidden md:flex flex-1 items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`/${item}`}
                className="text-sm font-medium text-black transition-colors hover:text-[#4154BE]"
              >
                <p className='capitalize'>
                {item}
                </p>        
              </a>
            ))}
          </nav>

          {/* Sign Up/Login Dropdown - Desktop */}
          <div className="hidden md:block">
            <SignUpDropdown />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-medium text-black transition-colors hover:text-[#4154BE]"
              >
                {item}
              </a>
            ))}
            <SignUpDropdown />
          </nav>
        </div>
      )}
    </header>
  )
}

