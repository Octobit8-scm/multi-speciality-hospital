'use client'

import { FaHospital, FaUserMd, FaAward, FaHeartbeat } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Multi-speciality Hospital</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Providing world-class healthcare services with compassion and excellence since 1995.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide accessible, high-quality healthcare services that improve the health and well-being of our community through innovation, compassion, and excellence in patient care.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading healthcare provider in the region, known for exceptional patient care, medical innovation, and community service.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaHospital className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Beds</p>
            </div>
            <div className="text-center">
              <FaUserMd className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Doctors</p>
            </div>
            <div className="text-center">
              <FaAward className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <FaHeartbeat className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50k+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our History</h2>
          <div className="prose max-w-none text-gray-600">
            <p>
              Founded in 1995, multi-speciality-hospital Hospital has grown from a small clinic to one of the region's leading healthcare providers. Our journey has been marked by continuous growth, innovation, and a steadfast commitment to patient care.
            </p>
            <p className="mt-4">
              Over the years, we have expanded our facilities, added state-of-the-art medical equipment, and assembled a team of highly skilled healthcare professionals. Today, we are proud to serve our community with comprehensive medical services across multiple specialties.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from patient care to medical procedures and administrative services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with empathy, understanding, and respect, recognizing their unique needs and concerns.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and medical advancements to provide the best possible care to our patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 