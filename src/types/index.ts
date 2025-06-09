import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface LayoutProps {
  children: ReactNode
}

export interface MenuItem {
  name: string
  href: string
}

export interface Department {
  name: string
  slug: string
  description: string
  services: string[]
  icon: IconType
  image: string
  features: string[]
  doctors?: Doctor[]
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  image: string
  experience: string
  education: string[]
  languages: string[]
  availability: string
  rating: number
  reviews: number
  description: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  image: string
} 