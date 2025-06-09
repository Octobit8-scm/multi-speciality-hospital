'use client'

import Image from 'next/image'
import { FaPills, FaPrescriptionBottle, FaTruck, FaClock, FaUserMd, FaShoppingCart } from 'react-icons/fa'

export default function PharmacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/services/pharmacy.jpg"
            alt="Pharmacy Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container-custom h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
                  Pharmacy Services
                </h1>
                <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
                  Comprehensive pharmacy services with a wide range of medications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Pharmacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPills className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medication Dispensing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Prescription Medications</li>
                <li>• Over-the-counter Drugs</li>
                <li>• Specialty Medications</li>
                <li>• Generic Alternatives</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaUserMd className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pharmacy Consultation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Medication Counseling</li>
                <li>• Drug Interactions</li>
                <li>• Dosage Instructions</li>
                <li>• Side Effects</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaTruck className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Home Delivery</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Free Delivery</li>
                <li>• Same Day Delivery</li>
                <li>• Scheduled Delivery</li>
                <li>• Temperature Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Choose Our Pharmacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                We ensure the highest quality of medications and pharmaceutical care for our patients.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Licensed pharmacy</li>
                <li>• Quality medications</li>
                <li>• Proper storage</li>
                <li>• Regular inspections</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Convenient Services</h3>
              <p className="text-gray-600 mb-4">
                We provide convenient and accessible pharmacy services to meet your needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 availability</li>
                <li>• Online ordering</li>
                <li>• Home delivery</li>
                <li>• Insurance processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-hospital-blue text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Order Medications</h2>
                <p className="mb-4">Get your medications delivered:</p>
                <ul className="space-y-2">
                  <li>• Online ordering available</li>
                  <li>• Home delivery service</li>
                  <li>• Insurance accepted</li>
                  <li>• Expert consultation</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Location</h2>
                <p className="mb-4">Hospital Pharmacy, Ground Floor</p>
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