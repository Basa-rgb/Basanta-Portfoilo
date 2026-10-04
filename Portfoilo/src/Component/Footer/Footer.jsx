import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Basanta Nepali</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/kim.basanta/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/basanta-nepali-65a364330/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/basanta_0x_01/" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <a
          href="mailto:basantan109@gmail.com"
          className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-purple-500"
        >
          <FaEnvelope />
          basantan109@gmail.com
        </a>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Basanta Nepali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
