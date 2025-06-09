import { IconType } from 'react-icons'
import { 
  FaHeartbeat, 
  FaBrain, 
  FaBone, 
  FaEye, 
  FaTooth, 
  FaBaby, 
  FaLungs, 
  FaStethoscope,
  FaMicroscope,
  FaRobot,
  FaUserMd,
  FaSyringe,
  FaHeartbeat as FaCriticalCare,
  FaXRay
} from 'react-icons/fa'

export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  services: string[];
  icon: IconType;
  image: string;
  features: string[];
  doctors: {
    name: string;
    specialization: string;
    image: string;
    experience: string;
    qualifications: string;
    schedule: {
      days: string[];
      timings: string[];
    };
  }[];
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Neurosciences",
    slug: "neurosciences",
    icon: FaBrain,
    image: "/images/departments/Neurosciences.jpg",
    description: "Our Neurosciences department provides comprehensive care for neurological disorders with state-of-the-art technology and expert specialists.",
    services: [
      "Neurological Consultation",
      "Brain Mapping",
      "Nerve Conduction Studies",
      "Sleep Studies",
      "Neuro Rehabilitation"
    ],
    features: [
      "Advanced Neuroimaging",
      "24/7 Emergency Care",
      "Multidisciplinary Team",
      "Rehabilitation Services"
    ],
    doctors: [
      {
        name: "Dr. Priya Sharma",
        specialization: "Neurologist",
        image: "/images/doctors/doctor-2.jpg",
        experience: "11 years",
        qualifications: "MBBS, DNB(Medicine), DrNB",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM"]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Cardiology",
    slug: "cardiology",
    icon: FaHeartbeat,
    image: "/images/departments/Cardiology.jpg",
    description: "Our Cardiology department offers advanced cardiac care with cutting-edge technology and experienced cardiologists.",
    services: [
      "Cardiac Consultation",
      "ECG",
      "Echocardiography",
      "Stress Test",
      "Holter Monitoring"
    ],
    features: [
      "Advanced Cardiac Imaging",
      "24/7 Emergency Care",
      "Cardiac Rehabilitation",
      "Preventive Care Programs"
    ],
    doctors: [
      {
        name: "Dr. Karthik Nair",
        specialization: "Cardiologist",
        image: "/images/doctors/doctor-1.jpg",
        experience: "3 years",
        qualifications: "MBBS, DNB, DM (Cardiology) - Dr. RML Hospital, New Delhi",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      },
      {
        name: "Dr. Ravi Kumar",
        specialization: "Pediatric Cardiology",
        image: "/images/doctors/dr-ashutosh-marwah.jpg",
        experience: "15 years",
        qualifications: "MBBS, MD Pediatrics (Maulana Azad Medical College, Delhi), Fellowship in Pediatric Cardiology- Melbourne, Australia",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      }
    ]
  },
  {
    id: 3,
    name: "Orthopedics and Joint Replacement",
    slug: "orthopedics",
    icon: FaBone,
    image: "/images/departments/Orthopaedics and joint replacement.jpg",
    description: "Our Orthopedics department specializes in joint replacement and sports medicine with advanced surgical techniques.",
    services: [
      "Joint Replacement Surgery",
      "Sports Medicine",
      "Arthroscopy",
      "Fracture Care",
      "Spine Surgery"
    ],
    features: [
      "Advanced Joint Replacement",
      "Sports Injury Management",
      "Rehabilitation Center",
      "Minimally Invasive Surgery"
    ],
    doctors: [
      {
        name: "Dr. Rajesh Kumar",
        specialization: "Orthopedic Surgeon",
        image: "/images/doctors/doctor-3.jpg",
        experience: "20 years",
        qualifications: "MBBS, MS",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM", "10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM", "10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM", "10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM", "10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM", "10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM"]
        }
      },
      {
        name: "Dr. Amit Verma",
        specialization: "Spine & Ortho Surgery",
        image: "/images/doctors/dr-s-kumar-singh.jpg",
        experience: "22 years",
        qualifications: "MBBS, DNB, D. Ortho MNAMS",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM"]
        }
      }
    ]
  },
  {
    id: 4,
    name: "Obstetrics & Gynaecology",
    slug: "gynaecology",
    icon: FaBaby,
    image: "/images/departments/Gynaecology.jpg",
    description: "Our Obstetrics & Gynaecology department provides comprehensive women's healthcare services with modern facilities.",
    services: [
      "Pregnancy Care",
      "Gynecological Surgery",
      "Fertility Treatment",
      "Menopause Care",
      "Family Planning"
    ],
    features: [
      "Modern Labor Suites",
      "Advanced Ultrasound",
      "Fertility Center",
      "Women's Health Programs"
    ],
    doctors: [
      {
        name: "Dr. Meera Kapoor",
        specialization: "Gynecologist",
        image: "/images/doctors/doctor-4.jpg",
        experience: "12 years",
        qualifications: "M.B.B.S., FGO, PGDS",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 12:00 PM", "11:00 AM - 12:00 PM", "11:00 AM - 12:00 PM", "11:00 AM - 12:00 PM", "11:00 AM - 12:00 PM", "11:00 AM - 12:00 PM"]
        }
      },
      {
        name: "Dr. Sneha Reddy",
        specialization: "Obstetrics & Gynaecology",
        image: "/images/doctors/dr-rubi-singh.jpg",
        experience: "12 years",
        qualifications: "M.B.B.S., M.S.",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      }
    ]
  },
  {
    id: 5,
    name: "Paediatrics & Neonatology",
    slug: "paediatrics",
    icon: FaBaby,
    image: "/images/departments/Paediatrics & Neonatology.jpg",
    description: "Our Paediatrics & Neonatology department provides specialized care for children and newborns with expert pediatricians.",
    services: [
      "Child Health Check-up",
      "Vaccination",
      "Growth Monitoring",
      "Developmental Assessment",
      "Pediatric Emergency Care"
    ],
    features: [
      "Neonatal ICU",
      "Pediatric Emergency",
      "Child Development Center",
      "Vaccination Programs"
    ],
    doctors: [
      {
        name: "Dr. Anjali Singh",
        specialization: "Pediatrician",
        image: "/images/doctors/doctor-5.jpg",
        experience: "18 years",
        qualifications: "MBBS, DCH (KGMU, LUCKNOW)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM"]
        }
      },
      {
        name: "Dr. Neha Gupta",
        specialization: "Pediatrics and Neonatology",
        image: "/images/doctors/doctor-5.jpg",
        experience: "18 years",
        qualifications: "MBBS, MD Pediatrics",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM"]
        }
      },
      {
        name: "Dr. Vibhesh Raj Tiwari",
        specialization: "Pediatrics & Neonatology",
        image: "/images/doctors/dr-vibhesh-raj-tiwari.jpg",
        experience: "15 years",
        qualifications: "MBBS, MD, Fellowship Paediatrics Hematology Oncology, IMS-BHU",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM", "10:00 AM - 05:00 PM"]
        }
      }
    ]
  },
  {
    id: 6,
    name: "Surgical Oncology",
    slug: "oncology",
    icon: FaMicroscope,
    image: "/images/departments/Surgical Oncology.jpg",
    description: "Our Surgical Oncology department provides comprehensive cancer care with advanced surgical techniques and personalized treatment plans.",
    services: [
      "Cancer Screening",
      "Chemotherapy",
      "Radiation Therapy",
      "Surgical Oncology",
      "Palliative Care"
    ],
    features: [
      "Advanced Cancer Surgery",
      "Multidisciplinary Team",
      "Palliative Care",
      "Support Services"
    ],
    doctors: [
      {
        name: "Dr. S. Kumar Singh",
        specialization: "Oncologist",
        image: "/images/doctors/doctor-6.jpg",
        experience: "14 years",
        qualifications: "MBBS, MS",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      },
      {
        name: "Dr. Sudhendu Sekhar",
        specialization: "Oncologist",
        image: "/images/doctors/doctor-6.jpg",
        experience: "15 years",
        qualifications: "MBBS, MS Fellow HPB Fellowship Surgical Oncology, TMH Mumbai",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      }
    ]
  },
  {
    id: 7,
    name: "Minimal Access Surgery",
    slug: "minimal-access",
    icon: FaRobot,
    image: "/images/departments/Minimal Access Surgery.jpg",
    description: "Our Minimal Access Surgery department specializes in laparoscopic and robotic surgeries with minimal invasion and faster recovery.",
    services: [
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Endoscopic Procedures",
      "Day Care Surgery",
      "Post-operative Care"
    ],
    features: [
      "Advanced Laparoscopy",
      "Robotic Surgery",
      "Minimal Scarring",
      "Faster Recovery"
    ],
    doctors: [
      {
        name: "Dr. Vikram Sharma",
        specialization: "Laparoscopic Surgeon",
        image: "/images/doctors/doctor-8.jpg",
        experience: "25 years",
        qualifications: "MBBS, MS, FMAS, FIAGES (General Surgery)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM"]
        }
      },
      {
        name: "Dr. Rahul Patel",
        specialization: "Laparoscopic Surgeon",
        image: "/images/doctors/doctor-8.jpg",
        experience: "20 years",
        qualifications: "MBBS, MS, FMAS Adv. GI & Laparoscopic Surgery",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM"]
        }
      },
      {
        name: "Dr. Arjun Reddy",
        specialization: "Minimal Access Surgery",
        image: "/images/doctors/dr-md-najim.jpg",
        experience: "15 years",
        qualifications: "MBBS, MS, FIAGES, FMAS - General & Laparoscopic Surgeon",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM"]
        }
      }
    ]
  },
  {
    id: 8,
    name: "Renal Sciences",
    slug: "renal",
    icon: FaStethoscope,
    image: "/images/departments/Renal Sciences.jpg",
    description: "Our Renal Sciences department provides comprehensive kidney care with advanced dialysis and transplant services.",
    services: [
      "Dialysis",
      "Kidney Transplant",
      "Nephrology Consultation",
      "Kidney Stone Treatment",
      "Hypertension Management"
    ],
    features: [
      "Advanced Dialysis",
      "Transplant Services",
      "24/7 Emergency Care",
      "Preventive Programs"
    ],
    doctors: [
      {
        name: "Dr. Sanjay Verma",
        specialization: "Nephrologist",
        image: "/images/doctors/doctor-9.jpg",
        experience: "10 years",
        qualifications: "MBBS, MD (Internal Medicine), Ex. Sr. (Nephro) – BHU",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      }
    ]
  },
  {
    id: 9,
    name: "General Medicine",
    slug: "general-medicine",
    icon: FaUserMd,
    image: "/images/departments/Internal Medicine.jpg",
    description: "Our General Medicine department provides comprehensive primary care with experienced physicians and modern facilities.",
    services: [
      "General Health Check-up",
      "Chronic Disease Management",
      "Preventive Care",
      "Health Screening",
      "Medical Consultation"
    ],
    features: [
      "Comprehensive Care",
      "Preventive Programs",
      "Emergency Services",
      "Health Education"
    ],
    doctors: [
      {
        name: "Dr. Deepak Sharma",
        specialization: "General Physician",
        image: "/images/doctors/doctor-10.jpg",
        experience: "15 years",
        qualifications: "MBBS, MD Internal Medicine",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM"]
        }
      }
    ]
  },
  {
    id: 10,
    name: "Dentistry",
    slug: "dentistry",
    icon: FaTooth,
    image: "/images/departments/Dentistry.jpg",
    description: "Our Dentistry department provides comprehensive dental care with modern equipment and experienced dental professionals.",
    services: [
      "Dental Check-up",
      "Root Canal Treatment",
      "Dental Implants",
      "Orthodontics",
      "Cosmetic Dentistry"
    ],
    features: [
      "Modern Equipment",
      "Painless Treatment",
      "Cosmetic Procedures",
      "Preventive Programs"
    ],
    doctors: [
      {
        name: "Dr. Aditya Kumar",
        specialization: "Dentist",
        image: "/images/doctors/doctor-11.jpg",
        experience: "10 years",
        qualifications: "BDS (Dental Surgeon)",
        schedule: {
          days: ["Tuesday", "Thursday", "Saturday"],
          timings: ["11:00 AM - 02:00 PM", "11:00 AM - 02:00 PM", "11:00 AM - 02:00 PM"]
        }
      },
      {
        name: "Dr. Shweta Patel",
        specialization: "Dentist",
        image: "/images/doctors/dr-supriya-singh.jpg",
        experience: "8 years",
        qualifications: "BDS (Dentist)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 02:00 PM", "04:00 PM - 06:00 PM", "11:00 AM - 02:00 PM", "04:00 PM - 06:00 PM", "11:00 AM - 02:00 PM", "04:00 PM - 06:00 PM"]
        }
      }
    ]
  },
  {
    id: 11,
    name: "Gastroenterology",
    slug: "gastroenterology",
    icon: FaStethoscope,
    image: "/images/departments/Gastroenterology.jpg",
    description: "Our Gastroenterology department provides comprehensive care for digestive system disorders with advanced diagnostic and treatment facilities.",
    services: [
      "Endoscopy",
      "Colonoscopy",
      "Liver Disease Treatment",
      "Digestive Disorders",
      "Nutritional Counseling"
    ],
    features: [
      "Advanced Diagnostic Procedures",
      "Minimally Invasive Treatments",
      "Liver Disease Management",
      "Digestive Health Programs"
    ],
    doctors: [
      {
        name: "Dr. Neha Gupta",
        specialization: "Gastroenterologist",
        image: "/images/doctors/doctor-7.jpg",
        experience: "13 years",
        qualifications: "MBBS, MD (Gastroenterology), DNB (Gastroenterology)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM", "10:00 AM - 04:00 PM"]
        }
      }
    ]
  },
  {
    id: 12,
    name: "Anaesthesiology & Pain Management",
    slug: "anaesthesiology",
    icon: FaSyringe,
    image: "/images/departments/Anaesthesiology and Pain Management.jpg",
    description: "Our Anaesthesiology & Pain Management department provides expert anesthesia services and comprehensive pain management solutions.",
    services: [
      "Surgical Anesthesia",
      "Pain Management",
      "Critical Care",
      "Palliative Care",
      "Acute Pain Service"
    ],
    features: [
      "Advanced Pain Management",
      "Surgical Anesthesia",
      "Critical Care Support",
      "Pain Relief Procedures"
    ],
    doctors: [
      {
        name: "Dr. Rajiv Malhotra",
        specialization: "Anesthesiologist",
        image: "/images/doctors/doctor-12.jpg",
        experience: "10 years",
        qualifications: "MBBS, MD, PDF (Anesthesiology & Critical Care)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM"]
        }
      },
      {
        name: "Dr. Kavita Singh",
        specialization: "Anesthesiologist",
        image: "/images/doctors/doctor-12.jpg",
        experience: "12 years",
        qualifications: "MBBS, MD (Anesthesiology & Critical Care)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM", "11:00 AM - 05:30 PM"]
        }
      }
    ]
  },
  {
    id: 13,
    name: "Critical Care",
    slug: "critical-care",
    icon: FaHeartbeat,
    image: "/images/departments/Critical Care.jpg",
    description: "Our Critical Care department provides 24/7 intensive care and emergency services with state-of-the-art monitoring and life support systems.",
    services: [
      "Intensive Care",
      "Emergency Care",
      "Ventilator Support",
      "Multi-organ Support",
      "Critical Care Monitoring"
    ],
    features: [
      "24/7 Intensive Care",
      "Advanced Life Support",
      "Trauma Care",
      "Emergency Services"
    ],
    doctors: [
      {
        name: "Dr. Rajiv Malhotra",
        specialization: "Critical Care Specialist",
        image: "/images/doctors/doctor-13.jpg",
        experience: "10 years",
        qualifications: "MBBS, MD, PDF (Anesthesiology & Critical Care)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM"]
        }
      },
      {
        name: "Dr. Kavita Singh",
        specialization: "Critical Care Specialist",
        image: "/images/doctors/doctor-13.jpg",
        experience: "12 years",
        qualifications: "MBBS, MD (Anesthesiology & Critical Care)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM", "10:00 AM - 02:00 PM, 04:00 PM - 06:00 PM"]
        }
      }
    ]
  },
  {
    id: 14,
    name: "Radiology & Imaging",
    slug: "radiology",
    icon: FaXRay,
    image: "/images/departments/Radiology & Imaging.jpg",
    description: "Our Radiology & Imaging department provides advanced diagnostic imaging services with cutting-edge technology and expert radiologists.",
    services: [
      "X-Ray",
      "CT Scan",
      "MRI",
      "Ultrasound",
      "Nuclear Medicine"
    ],
    features: [
      "Advanced Imaging Technology",
      "Digital Radiology",
      "3D Imaging",
      "Specialized Diagnostics"
    ],
    doctors: [
      {
        name: "Dr. Sneha Mandal",
        specialization: "Radiologist",
        image: "/images/doctors/doctor-14.jpg",
        experience: "8 years",
        qualifications: "MBBS, MD",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM", "10:00 AM - 11:30 AM"]
        }
      }
    ]
  },
  {
    id: 15,
    name: "Pathology",
    slug: "pathology",
    icon: FaMicroscope,
    image: "/images/departments/Pythology.jpg",
    description: "Our Pathology department provides comprehensive laboratory and diagnostic services with advanced testing facilities and expert pathologists.",
    services: [
      "Blood Tests",
      "Tissue Analysis",
      "Cytology",
      "Histopathology",
      "Molecular Diagnostics"
    ],
    features: [
      "Advanced Laboratory",
      "Rapid Diagnostics",
      "Specialized Testing",
      "Quality Assurance"
    ],
    doctors: [
      {
        name: "Dr. Pooja Sharma",
        specialization: "Pathologist",
        image: "/images/doctors/doctor-15.jpg",
        experience: "10 years",
        qualifications: "MBBS, MD (Pathology)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM"]
        }
      },
      {
        name: "Dr. Manoj Kumar",
        specialization: "Pathologist",
        image: "/images/doctors/doctor-15.jpg",
        experience: "12 years",
        qualifications: "MBBS, MD (Pathology)",
        schedule: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          timings: ["11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM", "11:30 AM - 02:30 PM"]
        }
      }
    ]
  }
]; 