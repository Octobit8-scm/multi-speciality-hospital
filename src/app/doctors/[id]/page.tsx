'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaArrowLeft, FaCalendarAlt, FaClock, FaGraduationCap, FaAward, FaUserMd } from 'react-icons/fa'
import { doctors } from '@/data/doctors'

export default function DoctorProfilePage() {
  const params = useParams()
  const doctor = doctors.find(d => d.id === params.id)

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600">The doctor you're looking for doesn't exist.</p>
          <Link href="/doctors" className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4">
            <FaArrowLeft className="mr-2" /> Back to Doctors
          </Link>
        </div>
      </div>
    )
  }

  // Helper for initials
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">{doctor.name}</h1>
            <div className="space-y-2 animate-fade-in-up animation-delay-200">
              <p className="text-xl text-blue-100">{doctor.specialty}</p>
              {doctor.qualification && (
                <p className="text-lg text-blue-100/90">{doctor.qualification}</p>
              )}
              {doctor.experience && (
                <p className="text-lg text-blue-100/90">{doctor.experience} years of experience</p>
              )}
              {doctor.location && (
                <p className="text-lg text-blue-100/90">{doctor.location}</p>
              )}
            </div>
            <div className="flex justify-center space-x-6 mt-6 animate-fade-in-up animation-delay-400">
              {doctor.phone && (
                <a href={`tel:${doctor.phone}`} className="inline-flex items-center text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px]">
                  <FaPhone className="mr-2" /> {doctor.phone}
                </a>
              )}
              {doctor.email && (
                <a href={`mailto:${doctor.email}`} className="inline-flex items-center text-white/80 hover:text-white transition-all duration-300 hover:translate-y-[-2px]">
                  <FaEnvelope className="mr-2" /> {doctor.email}
                </a>
              )}
            </div>
            <Link href="/doctors" className="inline-flex items-center text-white/80 hover:text-white mt-6 transition-all duration-300 hover:translate-x-2 animate-fade-in-up animation-delay-600">
              <FaArrowLeft className="mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" /> Back to Doctors
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-all duration-500 hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.getElementById('doctor-initials');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    id="doctor-initials"
                    className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
                    style={{ display: 'none' }}
                  >
                    {getInitials(doctor.name)}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{doctor.name}</h2>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                  {doctor.experience && (
                    <p className="text-gray-600 mb-4 flex items-center">
                      <FaUserMd className="mr-2 text-blue-600" />
                      {doctor.experience} years of experience
                    </p>
                  )}
                  <div className="flex space-x-4 mt-2">
                    <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            {doctor.qualification && (
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FaGraduationCap className="mr-2 text-blue-600" />
                  Qualifications
                </h3>
                <div className="space-y-4">
                  {doctor.qualification.split(',').map((qual, index) => (
                    <p key={index} className="text-gray-600 flex items-start">
                      <FaAward className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                      {qual.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule */}
            {doctor.schedule && doctor.schedule.timings && (
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-600" />
                  Schedule
                </h3>
                <div className="space-y-4">
                  {doctor.schedule.days.map((day, index) => (
                    <div key={day} className="flex items-center text-gray-600">
                      <FaClock className="mr-3 text-blue-600" />
                      <span className="font-medium">{day}:</span>
                      <span className="ml-2">{doctor.schedule?.timings[index]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {(doctor.phone || doctor.email || doctor.location) && (
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {doctor.phone && (
                    <div className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                      <FaPhone className="mr-3 text-blue-600" />
                      <span>{doctor.phone}</span>
                    </div>
                  )}
                  {doctor.email && (
                    <div className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                      <FaEnvelope className="mr-3 text-blue-600" />
                      <span>{doctor.email}</span>
                    </div>
                  )}
                  {doctor.location && (
                    <div className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                      <FaMapMarkerAlt className="mr-3 text-blue-600" />
                      <span>{doctor.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Appointment */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Book an Appointment</h3>
              <form className="space-y-4" aria-label="Book an appointment with this doctor">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 