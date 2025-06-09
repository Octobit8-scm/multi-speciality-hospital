'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaSearch, FaArrowRight } from 'react-icons/fa'
import { departments, Department } from '@/data/departments'

export default function DepartmentsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDepartments = departments.filter((dept: Department) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl">
            Explore our specialized medical departments and find the care you need
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search departments..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept: Department) => {
            const Icon = dept.icon
            return (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="text-3xl text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dept.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex items-center text-blue-600">
                    <span className="mr-2">Learn more</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 