import { IconType } from 'react-icons'
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby, FaLungs, FaStethoscope } from 'react-icons/fa'
import { Department } from '@/types'

export const departments: Department[] = [
  {
    name: 'Cardiology',
    slug: 'cardiology',
    icon: FaHeartbeat,
    description: 'Comprehensive cardiac care with state-of-the-art diagnostic and treatment facilities.',
    services: [
      'Cardiac Consultation',
      'ECG & Stress Test',
      'Echocardiography',
      'Cardiac Surgery',
      'Cardiac Rehabilitation'
    ],
    image: '/images/departments/cardiology.jpg',
    features: [
      'State-of-the-art cardiac care',
      'Advanced diagnostic facilities',
      'Expert cardiologists',
      '24/7 emergency care',
      'Comprehensive rehabilitation'
    ]
  },
  {
    name: 'Neurology',
    slug: 'neurology',
    icon: FaBrain,
    description: 'Expert care for disorders of the nervous system and brain.',
    services: [
      'Neurological Consultation',
      'EEG & EMG',
      'Brain Mapping',
      'Stroke Care',
      'Neurological Rehabilitation'
    ],
    image: '/images/departments/neurology.jpg',
    features: [
      'Advanced neurological care',
      'Modern diagnostic equipment',
      'Expert neurologists',
      'Comprehensive treatment',
      'Rehabilitation services'
    ]
  },
  {
    name: 'Orthopedics',
    slug: 'orthopedics',
    icon: FaBone,
    description: 'Specialized care for bone and joint disorders.',
    services: [
      'Joint Replacement',
      'Sports Medicine',
      'Fracture Care',
      'Spine Surgery',
      'Physical Therapy'
    ],
    image: '/images/departments/orthopedics.jpg',
    features: [
      'Advanced orthopedic care',
      'Joint replacement surgery',
      'Sports injury treatment',
      'Rehabilitation services',
      'Expert orthopedic surgeons'
    ]
  },
  {
    name: 'Ophthalmology',
    slug: 'ophthalmology',
    icon: FaEye,
    description: 'Complete eye care services from routine check-ups to complex surgeries.',
    services: [
      'Eye Examination',
      'Cataract Surgery',
      'Glaucoma Treatment',
      'Retina Care',
      'Laser Vision Correction'
    ],
    image: '/images/departments/ophthalmology.jpg',
    features: [
      'Comprehensive eye care',
      'Advanced surgical facilities',
      'Expert ophthalmologists',
      'Modern diagnostic equipment',
      'Laser treatment options'
    ]
  },
  {
    name: 'Dental',
    slug: 'dental',
    icon: FaTooth,
    description: 'Comprehensive dental care for all ages.',
    services: [
      'Dental Check-up',
      'Root Canal Treatment',
      'Dental Implants',
      'Orthodontics',
      'Cosmetic Dentistry'
    ],
    image: '/images/departments/dental.jpg',
    features: [
      'Complete dental care',
      'Modern dental equipment',
      'Expert dentists',
      'Cosmetic procedures',
      'Emergency dental care'
    ]
  },
  {
    name: 'Pediatrics',
    slug: 'pediatrics',
    icon: FaBaby,
    description: 'Specialized care for children from birth through adolescence.',
    services: [
      'Well-child Visits',
      'Vaccinations',
      'Growth Monitoring',
      'Pediatric Surgery',
      'Child Development'
    ],
    image: '/images/departments/pediatrics.jpg',
    features: [
      'Child-friendly environment',
      'Expert pediatricians',
      'Growth monitoring',
      'Vaccination services',
      'Child development care'
    ]
  },
  {
    name: 'Pulmonology',
    slug: 'pulmonology',
    icon: FaLungs,
    description: 'Expert care for respiratory and lung disorders.',
    services: [
      'Lung Function Tests',
      'Sleep Studies',
      'Asthma Management',
      'COPD Care',
      'Respiratory Therapy'
    ],
    image: '/images/departments/pulmonology.jpg',
    features: [
      'Advanced respiratory care',
      'Sleep study facilities',
      'Expert pulmonologists',
      'Comprehensive treatment',
      'Rehabilitation services'
    ]
  },
  {
    name: 'General Medicine',
    slug: 'general-medicine',
    icon: FaStethoscope,
    description: 'Comprehensive primary care for adults.',
    services: [
      'Health Check-ups',
      'Chronic Disease Management',
      'Preventive Care',
      'Internal Medicine',
      'Geriatric Care'
    ],
    image: '/images/departments/general-medicine.jpg',
    features: [
      'Comprehensive care',
      'Expert physicians',
      'Preventive healthcare',
      'Chronic disease management',
      'Geriatric care'
    ]
  }
] 