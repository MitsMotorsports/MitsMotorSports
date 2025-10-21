import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideDesktop = !desktopDropdownRef.current || !desktopDropdownRef.current.contains(event.target as Node);
      const isOutsideMobile = !mobileDropdownRef.current || !mobileDropdownRef.current.contains(event.target as Node);
      if (isOutsideDesktop && isOutsideMobile && isProjectsOpen) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProjectsOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {name: 'Sponsors',path:'/sponsors'},
    {
      name: 'Projects',
      path: '#',
      dropdown: true,
      items: [
        { name: 'Aethon V4', path: '/projects/aethon' },
        { name: 'EBaja', path: '/projects/ebaja' },
      ],
    },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Legacy', path: '/legacy' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-10 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/faviconLogo (1).png" alt="Club Logo" className="h-10 w-auto mr-2" />
            <span
              className="font-bold text-2xl"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: 'linear-gradient(to right, #7f1d1d,rgb(13, 12, 12))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              MITS Motorsports
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsProjectsOpen(!isProjectsOpen);
                    }}
                    className={`px-8 py-4 rounded-md font-medium flex items-center text-xl ${location.pathname.startsWith('/projects') && location.pathname !== '/gallery'
                        ? 'text-[#7f1d1d]'
                        : 'text-white hover:text-[#7f1d1d]'
                      }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProjectsOpen && (
                    <div ref={desktopDropdownRef} className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black bg-opacity-50 z-50">
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsProjectsOpen(false)}
                            className={`block px-4 py-2 text-sm ${location.pathname === subItem.path
                                ? 'bg-[#7f1d1d] bg-opacity-20 text-[#7f1d1d]'
                                : 'text-white hover:bg-[#7f1d1d] hover:bg-opacity-20 hover:text-[#7f1d1d]'
                              }`}
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsProjectsOpen(false)}
                  className={`px-4 py-2 rounded-md font-medium text-xl ${location.pathname === item.path
                      ? 'text-[#7f1d1d]'
                      : 'text-white hover:text-[#7f1d1d]'
                    }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#7f1d1d] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-50 border-t mt-2 z-50"
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsProjectsOpen(!isProjectsOpen);
                    }}
                    className="w-full flex justify-between items-center px-4 py-2 text-left font-medium text-white hover:bg-[#7f1d1d] hover:bg-opacity-20 hover:text-[#7f1d1d] rounded-md"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProjectsOpen && (
                    <div ref={mobileDropdownRef} className="pl-6 space-y-1 mt-1 bg-black bg-opacity-50 rounded-md">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            setIsProjectsOpen(false);
                            setIsOpen(false);
                          }}
                          className={`block px-4 py-2 rounded-md ${location.pathname === subItem.path
                              ? 'bg-[#7f1d1d] bg-opacity-20 text-[#7f1d1d]'
                              : 'text-white hover:bg-[#7f1d1d] hover:bg-opacity-20 hover:text-[#7f1d1d]'
                            }`}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    setIsProjectsOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-md font-medium ${location.pathname === item.path
                      ? 'bg-[#7f1d1d] bg-opacity-20 text-[#7f1d1d]'
                      : 'text-white hover:bg-[#7f1d1d] hover:bg-opacity-20 hover:text-[#7f1d1d]'
                    }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;