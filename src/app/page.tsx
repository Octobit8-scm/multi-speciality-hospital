import Image from 'next/image'
import { FaUserMd, FaHospital, FaAmbulance, FaClock } from 'react-icons/fa'
import { departments } from '@/data/departments'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero section/Home page hero section.png"
            alt="multi-speciality-hospital Hospital Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hospital-blue/10 to-hospital-teal/10">
            <div className="container-custom h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to Multi-speciality Hospital
                </h1>
                <p className="text-xl mb-8">
                  Providing world-class healthcare services with compassion and excellence
                </p>
                <div className="flex gap-4">
                  <button className="btn-primary">Book Appointment</button>
                  <button className="bg-white text-hospital-blue px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-hospital-light">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserMd className="w-12 h-12 text-hospital-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Highly qualified and experienced medical professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHospital className="w-12 h-12 text-hospital-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art medical equipment and infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaAmbulance className="w-12 h-12 text-hospital-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency medical services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="w-12 h-12 text-hospital-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Minimal waiting time and efficient care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.slice(0, 6).map((dept) => {
              const Icon = dept.icon
              return (
                <Link
                  key={dept.slug}
                  href={`/departments/${dept.slug}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-3xl text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-hospital-blue">{dept.name}</h3>
                  </div>
                  <p className="text-gray-600">{dept.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
} 