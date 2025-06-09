export default function Hero() {
  return (
    <section className="bg-hospital-blue text-white py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Multi Speciality Hospital</h1>
      <p className="text-xl md:text-2xl mb-8">Your Health, Our Priority</p>
      <a
        href="/contact"
        className="inline-block bg-hospital-gold text-hospital-blue px-8 py-3 rounded font-semibold text-lg hover:bg-yellow-400 transition-colors mb-6"
      >
        Book Appointment
      </a>
      <div className="mt-6">
        <p className="font-bold text-lg">Emergency Contact</p>
        <p className="text-2xl">+91 1234567890</p>
      </div>
    </section>
  )
} 