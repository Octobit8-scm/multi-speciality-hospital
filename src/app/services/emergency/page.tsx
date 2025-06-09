'use client'

import Image from 'next/image'
import { FaAmbulance, FaPhone, FaClock, FaUserMd, FaHospital, FaHeartbeat } from 'react-icons/fa'

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/services/emergency.jpg"
            alt="Emergency Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container-custom h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
                  Emergency Services
                </h1>
                <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
                  24/7 Emergency Care with Advanced Life Support
                </p>
                <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                  <a href="tel:+911234567890" className="btn-primary flex items-center">
                    <FaPhone className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaAmbulance className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Ambulance Service</h3>
              <p className="text-gray-600">Quick response emergency ambulance service with advanced life support equipment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaUserMd className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Medical Team</h3>
              <p className="text-gray-600">Experienced emergency physicians and trauma specialists available round the clock.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaHospital className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Facilities</h3>
              <p className="text-gray-600">State-of-the-art emergency care facilities with modern equipment and technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-hospital-blue text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Emergency Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaPhone className="text-2xl mr-4" />
                    <div>
                      <p className="font-semibold">Emergency Helpline</p>
                      <p className="text-xl">+91 1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-2xl mr-4" />
                    <div>
                      <p className="font-semibold">Available 24/7</p>
                      <p>Round the clock emergency care</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Location</h2>
                <p className="mb-4">Emergency Department, Ground Floor</p>
                <p>multi-speciality-hospital Hospital</p>
                <p>Varanasi, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 