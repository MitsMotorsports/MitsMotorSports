import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-1 sm:pt-2 md:pt-3 pb-1 sm:pb-2 md:pb-3 opacity-100 isolate border-t border-b border-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-3 sm:mb-4 md:mb-6">
          {/* Logo and Web Designers */}
          <div className="flex flex-col items-center justify-center h-full border-r border-white md:border-r-0 space-y-6">
            <img
              src="/faviconLogo (1).jpg"
              alt="MITS Motorsports Logo"
              className="h-32 sm:h-36 md:h-40 lg:h-44 w-auto"
            />
            
          </div>

          {/* Quick Links */}
          <div className="border-r border-white sm:border-r-0 md:border-r">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects/aethon" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                  Aethon V4
                </Link>
              </li>
              <li>
                <Link to="/projects/ebaja" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                  EBaja
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="border-r border-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-300 text-sm sm:text-base">
                  Muthoot Institute Of Technology And Science, Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:motorsportsmits@gmail.com"
                  className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  motorsportsmits@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 sm:mr-3 w-4 sm:w-5 h-4 sm:h-5 text-primary-500 flex-shrink-0" />
                <a
                  href="tel:+91 97783 53970"
                  className="text-secondary-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +91 97783 53970
                </a>
              </li>
            </ul>
          </div>

          {/* Map Location */}
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Our Location</h3>
              <div className="relative w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] aspect-square rounded-lg overflow-hidden shadow-md mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.60243022878657!2d76.40851814354461!3d9.963972635525636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0874de563bc58b%3A0xde7ecbfa110cfbda!2sMuthoot%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1752044708058!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MITS Engineering College Location"
                />
                <a
                  href="https://maps.app.goo.gl/zgiep9rD8viKp1KU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open MITS on Google Maps"
                >
                  <span className="sr-only">Open map in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 pb-3">
          <a
            href="https://www.instagram.com/mits_motorsports/"
            className="relative group transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <Instagram className="text-white group-hover:text-white/90 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="mailto:motorsportsmits@gmail.com"
            className="relative group transition-colors"
          >
            <div className="p-2 sm:p-2.5 rounded-full bg-red-600 shadow-lg group-hover:bg-red-700 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <Mail className="text-white group-hover:text-white/90 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
            </div>
            <div className="absolute inset-0 rounded-full bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://maps.app.goo.gl/zgiep9rD8viKp1KU9"
            className="relative group transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 sm:p-2.5 rounded-full bg-blue-600 shadow-lg group-hover:bg-blue-700 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <MapPin className="text-white group-hover:text-white/90 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;