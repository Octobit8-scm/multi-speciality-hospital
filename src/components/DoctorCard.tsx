import Image from 'next/image'
import Link from 'next/link'

interface Doctor {
  id: string
  name: string
  specialty: string
  image: string
  experience: string
  qualification: string
  phone: string
  email: string
  location: string
  schedule: {
    [key: string]: string
  }
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
        <p className="text-hospital-blue mb-2">{doctor.specialty}</p>
        <p className="text-gray-600 mb-2">Experience: {doctor.experience}</p>
        <p className="text-gray-600 mb-4">Qualification: {doctor.qualification}</p>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> {doctor.phone}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {doctor.email}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> {doctor.location}
          </p>
        </div>
        <Link
          href={`/doctors/${doctor.id}`}
          className="mt-4 inline-block bg-hospital-blue text-white px-4 py-2 rounded hover:bg-hospital-blue-dark transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
} 