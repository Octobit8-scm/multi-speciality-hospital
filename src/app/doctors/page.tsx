'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { doctors, Doctor } from '@/data/doctors'

export default function DoctorsPage() {
  const [search, setSearch] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  // Get unique specialties
  const specialties: string[] = ['all', ...Array.from(new Set(doctors.map((doctor: Doctor) => doctor.specialty))).map(String)]

  // Filter doctors based on search term and specialty
  const filteredDoctors = doctors.filter((doctor: Doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(search.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospital-blue">Our Doctors</h1>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/doctors/${doctor.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <h2 className="text-xl font-semibold text-hospital-blue mb-1">{doctor.name}</h2>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              {doctor.qualification && (
                <p className="text-gray-500 text-sm mb-2">{doctor.qualification}</p>
              )}
              {doctor.location && (
                <p className="text-gray-400 text-xs">{doctor.location}</p>
              )}
              <span className="mt-4 inline-block text-blue-600 hover:underline">View Profile</span>
            </Link>
          ))}
        </div>
        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No doctors found.</p>
        )}
      </div>
    </div>
  )
} 