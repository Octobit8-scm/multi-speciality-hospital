export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience?: number;
  qualification?: string;
  phone?: string;
  email?: string;
  location?: string;
  schedule?: {
    days: string[];
    timings: string[];
  };
}

export const doctors: Doctor[] = [
  // Orthopedics and Joint Replacement
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedics and Joint Replacement',
    image: '/images/doctors/Dr-Suneel-Kumar-Singh.jpg',
    qualification: 'MBBS, MS',
    experience: 20,
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 12:00PM, 3:00PM - 5:00PM']
    }
  },
  {
    id: '2',
    name: 'Dr. Amit Verma',
    specialty: 'Orthopedics and Joint Replacement',
    image: '/images/doctors/Dr-S-Kumar-Singh.jpg',
    qualification: 'MBBS, DNB, D. Ortho MNAMS',
    experience: 22,
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 11:30AM']
    }
  },
  // Minimal Access Surgery
  {
    id: '3',
    name: 'Dr. Vikram Sharma',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/Dr-S-P-Gupta.jpg',
    qualification: 'MBBS, MS, FMAS, FIAGES (General Surgery)',
    experience: 25,
    location: 'Multi-speciality Hospital, Varanasi',
  },
  {
    id: '4',
    name: 'Dr. Rahul Patel',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/Dr-Pramendra-Singh.jpg',
    qualification: 'MBBS, MS, FMAS Adv. GI & Laparoscopic Surgery',
    experience: 20,
    location: 'Multi-speciality Hospital, Varanasi',
  },
  {
    id: '5',
    name: 'Dr. Arjun Reddy',
    specialty: 'Minimal Access Surgery',
    image: '/images/doctors/dr-nazim.jpg',
    qualification: 'MBBS, MS, FIAGES, FMAS - General & Laparoscopic Surgeon',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:00AM - 05:30PM']
    }
  },
  // Neurology
  {
    id: '6',
    name: 'Dr. Priya Sharma',
    specialty: 'Neurology',
    image: '/images/doctors/dr-vivek-tripathi.jpg',
    qualification: 'MBBS, DNB(Medicine), DrNB',
    experience: 11,
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:30AM - 02:30PM']
    }
  },
  // Pediatrics & Neonatology
  {
    id: '7',
    name: 'Dr. Neha Gupta',
    specialty: 'Pediatrics & Neonatology',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD, Fellowship Paediatrics Hematology Oncology, IMS-BHU',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 05:00PM']
    }
  },
  {
    id: '8',
    name: 'Dr. Anjali Singh',
    specialty: 'Pediatrics & Neonatology',
    image: '/images/doctors/Dr-Amita-Srivastava-01.jpg',
    qualification: 'MBBS, DCH (KGMU, LUCKNOW)',
    experience: 18,
    location: 'Multi-speciality Hospital, Varanasi',
  },
  // Obstetrics & Gynaecology
  {
    id: '9',
    name: 'Dr. Meera Kapoor',
    specialty: 'Obstetrics & Gynaecology',
    image: '/images/doctors/dr-tulika-singh-01.jpg',
    qualification: 'M.B.B.S., FGO, PGDS',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['11:00AM - 12:00PM']
    }
  },
  {
    id: '10',
    name: 'Dr. Sneha Reddy',
    specialty: 'Obstetrics & Gynaecology',
    image: '/images/doctors/dr-rubi-devi-02.jpg',
    qualification: 'M.B.B.S., M.S.',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  // Cardiology
  {
    id: '11',
    name: 'Dr. Karthik Nair',
    specialty: 'Cardiology',
    image: '/images/doctors/dr-sadab-rauf.jpg',
    qualification: 'MBBS, DNB, DM (Cardiology) - Dr. RML Hospital, New Delhi',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  {
    id: '12',
    name: 'Dr. Ravi Kumar',
    specialty: 'Cardiology',
    image: '/images/doctors/dr-sagar-rai.jpg',
    qualification: 'MBBS, MD Pediatrics (Maulana Azad Medical College, Delhi), Fellowship in Pediatric Cardiology- Melbourne, Australia',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  // Nephrology
  {
    id: '13',
    name: 'Dr. Sanjay Verma',
    specialty: 'Nephrology',
    image: '/images/doctors/dr-rishab.jpg',
    qualification: 'MBBS, MD (Internal Medicine), Ex. Sr. (Nephro) – BHU',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 04:00PM']
    }
  },
  // General Medicine
  {
    id: '14',
    name: 'Dr. Deepak Sharma',
    specialty: 'General Medicine',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD Internal Medicine',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: ['10:00AM - 02:00PM and 04:00PM - 06:00PM']
    }
  },
  // Radiology
  {
    id: '15',
    name: 'Dr. Anita Desai',
    specialty: 'Radiology',
    image: '/images/doctors/Dr-Supriya-Singh-01.jpg',
    qualification: 'MBBS, MD',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  // Pathology
  {
    id: '16',
    name: 'Dr. Manoj Kumar',
    specialty: 'Pathology',
    image: '/images/doctors/dr-sunil-kumar-Pathology.jpg',
    qualification: 'MBBS, MD (Pathology)',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  {
    id: '17',
    name: 'Dr. Pooja Sharma',
    specialty: 'Pathology',
    image: '/images/doctors/Dr-Alka-Gupta-Pathology.jpg',
    qualification: 'MBBS, MD (Pathology)',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  // Anesthesiology & Critical Care
  {
    id: '18',
    name: 'Dr. Rajiv Malhotra',
    specialty: 'Anesthesiology & Critical Care',
    image: '/images/doctors/dr-sagar-rai.jpg',
    qualification: 'MBBS, MD, PDF (Anesthesiology & Critical Care)',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  {
    id: '19',
    name: 'Dr. Kavita Singh',
    specialty: 'Anesthesiology & Critical Care',
    image: '/images/doctors/dr-vibhesh-raj-tiwari.jpg',
    qualification: 'MBBS, MD (Anesthesiology & Critical Care)',
    location: 'Multi-speciality Hospital, Varanasi',
  },
  // Dentistry
  {
    id: '20',
    name: 'Dr. Aditya Kumar',
    specialty: 'Dentistry',
    image: '/images/doctors/Dr-Alka-Gupta-Pathology.jpg',
    qualification: 'BDS (Dental Surgeon)',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      timings: ['11:00AM - 02:00PM']
    }
  },
  {
    id: '21',
    name: 'Dr. Shweta Patel',
    specialty: 'Dentistry',
    image: '/images/doctors/Dr-Supriya-Singh-01.jpg',
    qualification: 'BDS (Dentist)',
    location: 'Multi-speciality Hospital, Varanasi',
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Tuesday', 'Thursday', 'Saturday'],
      timings: ['11:00AM - 02:00PM', '04:00PM - 06:00PM']
    }
  }
]; 