import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'
import * as FaIcons from 'react-icons/fa'

interface Department {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  image: string
  services: string[]
  features: string[]
}

interface DepartmentCardProps {
  department: Department
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const Icon = FaIcons[department.icon as keyof typeof FaIcons] as IconType

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={department.image}
          alt={department.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {Icon && <Icon className="text-2xl text-hospital-blue mr-2" />}
          <h3 className="text-xl font-bold">{department.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{department.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Services:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {department.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {department.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Link
          href={`/departments/${department.slug}`}
          className="inline-block bg-hospital-blue text-white px-4 py-2 rounded hover:bg-hospital-blue-dark transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
} 