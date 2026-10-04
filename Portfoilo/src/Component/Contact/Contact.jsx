import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactOptions = [
    {
      icon: <FaLinkedin size={22} />,
      title: "LinkedIn",
      value: "Connect with me professionally",
      href: "https://www.linkedin.com/in/basanta-nepali-65a364330/",
      accent: "from-blue-600 to-cyan-500",
    },
    {
      icon: <FaGithub size={22} />,
      title: "GitHub",
      value: "View my projects and code",
      href: "https://github.com/basa-rgb",
      accent: "from-gray-700 to-gray-500",
    },
    {
      icon: <FaInstagram size={22} />,
      title: "Instagram",
      value: "Follow my updates and moments",
      href: "https://www.instagram.com/basanta_0x_01/",
      accent: "from-pink-600 to-purple-500",
    },
    {
      icon: <FaFacebook size={22} />,
      title: "Facebook",
      value: "Say hi and stay in touch",
      href: "https://www.facebook.com/kim.basanta/",
      accent: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          You can contact me through any of the channels below.
        </p>
      </div>

      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {contactOptions.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block rounded-2xl border border-gray-700 bg-[#0d081f] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.accent} text-white`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-gray-300 group-hover:text-purple-300 transition">{item.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-full border border-purple-500/40 bg-[#15112d] px-5 py-3 text-gray-200">
        <FaMapMarkerAlt className="text-purple-400" />
        <span>Based in Nepal</span>
      </div>
    </section>
  );
};

export default Contact;
