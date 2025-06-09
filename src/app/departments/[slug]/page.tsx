'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaCheck, FaUserMd, FaCalendarAlt, FaPhone, FaEnvelope, FaTimes, FaLinkedin, FaTwitter, FaClock, FaGraduationCap } from 'react-icons/fa'
import { departments } from '@/data/departments'

export default function DepartmentPage() {
  const params = useParams()
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })

  const department = departments.find((dept) => dept.slug === params.slug)

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-8">The department you're looking for doesn't exist.</p>
          <Link
            href="/departments"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Departments
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setShowBookingForm(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute right-0 top-0 w-1/2 h-full transform transition-transform duration-700 hover:scale-105">
            <Image
              src={department.image}
              alt={department.name}
              fill
              className="object-contain transition-all duration-500 hover:brightness-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white transform transition-all duration-500 hover:scale-[1.02] w-1/2 space-y-6">
              <Link
                href="/departments"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-all duration-300 hover:translate-x-2"
              >
                <FaArrowLeft className="mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Departments
              </Link>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
                {department.name}
              </h1>
              <p className="text-xl max-w-3xl mb-6 drop-shadow-lg animate-fade-in-up animation-delay-200">
                {department.description}
              </p>
              <div className="space-y-4 animate-fade-in-up animation-delay-400">
                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2 hover:text-blue-200">
                  <FaUserMd className="text-2xl" />
                  <span className="text-lg">Expert Medical Professionals</span>
                </div>
                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2 hover:text-blue-200">
                  <FaCheck className="text-2xl" />
                  <span className="text-lg">State-of-the-art Facilities</span>
                </div>
                <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2 hover:text-blue-200">
                  <FaClock className="text-2xl" />
                  <span className="text-lg">24/7 Emergency Care</span>
                </div>
              </div>
              <button
                onClick={() => setShowBookingForm(true)}
                className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg animate-fade-in-up animation-delay-600"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Services Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {department.services.map((service) => (
                  <div key={service} className="flex items-start transform transition-all duration-200 hover:translate-x-2">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {department.features.map((feature) => (
                  <div key={feature} className="flex items-start transform transition-all duration-200 hover:translate-x-2">
                    <FaCheck className="text-blue-500 mt-1 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Specialists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {department.doctors.map((doctor) => (
                  <div key={doctor.name} className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.getElementById(`doctor-initials-${doctor.name}`);
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div
                          id={`doctor-initials-${doctor.name}`}
                          className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
                          style={{ display: 'none' }}
                        >
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                        {doctor.experience && (
                          <p className="text-gray-600 mb-2 flex items-center justify-center md:justify-start">
                            <FaUserMd className="mr-2 text-blue-600" />
                            {doctor.experience} years of experience
                          </p>
                        )}
                        {doctor.qualifications && (
                          <p className="text-gray-600 mb-3 flex items-start justify-center md:justify-start">
                            <FaGraduationCap className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                            {doctor.qualifications}
                          </p>
                        )}
                        {doctor.schedule && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center md:justify-start">
                              <FaCalendarAlt className="mr-2 text-blue-600" />
                              Schedule:
                            </h4>
                            <div className="space-y-1">
                              {doctor.schedule.days.map((day, index) => (
                                <p key={day} className="text-gray-600 text-sm flex items-center justify-center md:justify-start">
                                  <FaClock className="mr-2 text-blue-600" />
                                  {day}: {doctor.schedule.timings[index]}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <FaLinkedin size={20} />
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <FaTwitter size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start transform transition-all duration-200 hover:translate-x-2">
                  <FaPhone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-gray-600">+91 60020 60024</p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-200 hover:translate-x-2">
                  <FaEnvelope className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-gray-600">
                      {department.name.toLowerCase().replace(/\s+/g, '-')}@multi-speciality-hospital.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-200 hover:translate-x-2">
                  <FaCalendarAlt className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-2">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowBookingForm(true)}
                className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Book Appointment
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 rounded-lg shadow-lg p-8 text-white transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-4">Emergency Contact</h3>
              <p className="mb-4">For medical emergencies, please call our 24/7 emergency number:</p>
              <div className="flex items-center justify-center">
                <FaPhone className="w-6 h-6 mr-3" />
                <span className="text-2xl font-bold">+91 60020 60024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Book an Appointment
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 