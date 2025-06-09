'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaBrain, 
  FaHeartbeat, 
  FaBone, 
  FaBaby, 
  FaFemale, 
  FaTooth,
  FaDna,
  FaLungs,
  FaRobot,
  FaHeart,
  FaStethoscope,
  FaSyringe,
  FaHospital,
  FaXRay,
  FaMicroscope
} from 'react-icons/fa'
import { departments } from '@/data/departments'

// Map of department slugs to their corresponding icons
const departmentIcons: { [key: string]: any } = {
  neurosciences: FaBrain,
  cardiology: FaHeartbeat,
  orthopedics: FaBone,
  'obstetrics-gynaecology': FaFemale,
  pediatrics: FaBaby,
  'surgical-oncology': FaDna,
  gastroenterology: FaLungs,
  'minimal-access-surgery': FaRobot,
  'renal-sciences': FaHeart,
  'general-medicine': FaStethoscope,
  anaesthesiology: FaSyringe,
  'critical-care': FaHospital,
  radiology: FaXRay,
  pathology: FaMicroscope,
  dentistry: FaTooth,
  'paediatrics': FaBaby,
  'gynaecology': FaFemale,
  'internal-medicine': FaStethoscope,
  'renal': FaHeart,
  'minimal-access': FaRobot,
  'oncology': FaDna
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Split departments into two columns
  const midPoint = Math.ceil(departments.length / 2)
  const leftColumn = departments.slice(0, midPoint)
  const rightColumn = departments.slice(midPoint)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Multi-speciality Hospital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Departments Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('departments')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Departments
                <FaChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === 'departments' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'departments' && (
                <div className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-in-out">
                  <div className="py-1 max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-2">
                      {/* Left Column */}
                      <div className="border-r border-gray-100">
                        {leftColumn.map((dept) => {
                          const Icon = departmentIcons[dept.slug]
                          return (
                            <Link
                              key={dept.slug}
                              href={`/departments/${dept.slug}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {Icon && <Icon className="mr-3 text-blue-600 w-4 h-4" />}
                              <span className="truncate">{dept.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                      {/* Right Column */}
                      <div>
                        {rightColumn.map((dept) => {
                          const Icon = departmentIcons[dept.slug]
                          return (
                            <Link
                              key={dept.slug}
                              href={`/departments/${dept.slug}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {Icon && <Icon className="mr-3 text-blue-600 w-4 h-4" />}
                              <span className="truncate">{dept.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Services
                <FaChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      href="/services/emergency"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Emergency
                    </Link>
                    <Link
                      href="/services/diagnostics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Diagnostics
                    </Link>
                    <Link
                      href="/services/pharmacy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Pharmacy
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/doctors" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Doctors
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/about/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Home
            </Link>
            
            {/* Mobile Departments Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('mobile-departments')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
              >
                Departments
                <FaChevronDown className={`transition-transform duration-200 ${activeDropdown === 'mobile-departments' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'mobile-departments' && (
                <div className="pl-4">
                  {departments.map((dept) => {
                    const Icon = departmentIcons[dept.slug]
                    return (
                      <Link
                        key={dept.slug}
                        href={`/departments/${dept.slug}`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {Icon && <Icon className="mr-3 text-blue-600 w-4 h-4" />}
                        {dept.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('mobile-services')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
              >
                Services
                <FaChevronDown className={`transition-transform duration-200 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="pl-4">
                  <Link
                    href="/services/emergency"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      setActiveDropdown(null)
                      setIsOpen(false)
                    }}
                  >
                    Emergency
                  </Link>
                  <Link
                    href="/services/diagnostics"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      setActiveDropdown(null)
                      setIsOpen(false)
                    }}
                  >
                    Diagnostics
                  </Link>
                  <Link
                    href="/services/pharmacy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      setActiveDropdown(null)
                      setIsOpen(false)
                    }}
                  >
                    Pharmacy
                  </Link>
                </div>
              )}
            </div>

            <Link href="/doctors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Doctors
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              About
            </Link>
            <Link href="/about/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Gallery
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 