import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-hospital-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Multi-speciality Hospital</h3>
            <p className="mb-4">
              Providing world-class healthcare services with compassion and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hospital-gold transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-hospital-gold transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-hospital-gold transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-hospital-gold transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-hospital-gold transition-colors">About Us</a></li>
              <li><a href="/departments" className="hover:text-hospital-gold transition-colors">Departments</a></li>
              <li><a href="/doctors" className="hover:text-hospital-gold transition-colors">Our Doctors</a></li>
              <li><a href="/contact" className="hover:text-hospital-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Shivpur Bypass Rd, Bharlai,</li>
              <li>Shivpur, Varanasi-221003</li>
              <li>Phone: +91 60020 60024</li>
              <li>Email: info@multi-speciality-hospitalhospitals.com</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Emergency Only</li>
              <li>24/7 Emergency Services</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} multi-speciality-hospital Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 