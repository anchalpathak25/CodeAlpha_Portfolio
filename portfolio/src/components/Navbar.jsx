import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-14 py-5 bg-[#081122]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-xl z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <h1 className="text-4xl font-extrabold tracking-wide cursor-pointer">
        <span className="text-white">An</span>
        <span className="text-cyan-400">chal</span>
      </h1>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="#home"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="#education"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className="px-5 py-2 text-[17px] font-medium text-white rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-[#081122] hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
          >
            Certificates
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;