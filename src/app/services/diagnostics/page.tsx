'use client'

import Image from 'next/image'
import { FaMicroscope, FaFlask, FaHeartbeat, FaXRay, FaBrain, FaDna } from 'react-icons/fa'

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/services/diagnostics.jpg"
            alt="Diagnostic Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container-custom h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
                  Diagnostic Services
                </h1>
                <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
                  State-of-the-art diagnostic facilities for accurate and timely results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Tests Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Available Diagnostic Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaMicroscope className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laboratory Tests</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Blood Tests</li>
                <li>• Urine Analysis</li>
                <li>• Hormone Tests</li>
                <li>• Microbiology Tests</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaXRay className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Imaging Services</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• X-Ray</li>
                <li>• CT Scan</li>
                <li>• MRI</li>
                <li>• Ultrasound</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaHeartbeat className="text-4xl text-hospital-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cardiac Tests</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ECG</li>
                <li>• Stress Test</li>
                <li>• Echo</li>
                <li>• Holter Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Choose Our Diagnostic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Advanced Technology</h3>
              <p className="text-gray-600 mb-4">
                Our diagnostic center is equipped with the latest technology and equipment to ensure accurate and reliable test results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• State-of-the-art imaging equipment</li>
                <li>• Automated laboratory systems</li>
                <li>• Digital reporting system</li>
                <li>• Quality control measures</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600 mb-4">
                Our team of experienced pathologists, radiologists, and technicians ensures accurate diagnosis and interpretation of results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Qualified specialists</li>
                <li>• Trained technicians</li>
                <li>• Quick turnaround time</li>
                <li>• Quality assurance</li>
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
                <h2 className="text-3xl font-bold mb-6">Book a Test</h2>
                <p className="mb-4">Schedule your diagnostic tests with us:</p>
                <ul className="space-y-2">
                  <li>• Online booking available</li>
                  <li>• Home sample collection</li>
                  <li>• Quick results</li>
                  <li>• Expert consultation</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Location</h2>
                <p className="mb-4">Diagnostic Center, Ground Floor</p>
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