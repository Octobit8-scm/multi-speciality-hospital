'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const galleryImages = [
  {
    src: '/images/gallery/hospital-building.jpg',
    alt: 'Multi-speciality Hospital Building',
    title: 'Hospital Building'
  },
  {
    src: '/images/gallery/entrance.jpg',
    alt: 'Main Entry',
    title: 'Main Entry'
  },
  {
    src: '/images/gallery/pharmacy.jpg',
    alt: 'Pharmacy',
    title: 'Pharmacy'
  },
  {
    src: '/images/gallery/emergency-entry.jpg',
    alt: 'Emergency Entry',
    title: 'Emergency Entry'
  },
  {
    src: '/images/gallery/',
    alt: 'Emergency Admission',
    title: 'Emergency Admission'
  },
  {
    src: '/images/gallery/reception.jpg',
    alt: 'Reception',
    title: 'Reception'
  },
  {
    src: '/images/gallery/',
    alt: 'Billing Counter',
    title: 'Billing Counter'
  },
  {
    src: '/images/gallery/waiting-area.jpg',
    alt: 'Waiting Area',
    title: 'Waiting Area'
  },
  {
    src: '/images/gallery/',
    alt: 'OPD Waiting Area',
    title: 'OPD Waiting Area'
  },
  {
    src: '/images/gallery/nursing-station.jpg',
    alt: 'Nursing Station',
    title: 'Nursing Station'
  },
  {
    src: '/images/gallery/MICU.jpg',
    alt: 'MICU',
    title: 'MICU'
  },
  {
    src: '/images/gallery/NICU.jpg',
    alt: 'NICU',
    title: 'NICU'
  },
  {
    src: '/images/gallery/General-ward.jpg',
    alt: 'General Ward',
    title: 'General Ward'
  },
  {
    src: '/images/gallery/ac-room.jpg',
    alt: 'Private Room',
    title: 'Private Room'
  },
  {
    src: '/images/gallery/lab.jpg',
    alt: 'Laboratory',
    title: 'Laboratory'
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({ ...prev, [src]: true }))
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hospital-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg">
            Welcome to the multi-speciality-hospital Hospital photo gallery! Here, you'll find images that highlight our modern facilities, dedicated staff, and the care we provide.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => !imageErrors[image.src] && setSelectedImage(image.src)}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  {!imageErrors[image.src] ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(image.src)}
                      priority={index < 6}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Image not available</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <FaTimes className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1200}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
} 