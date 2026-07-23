import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Anchal_Resume.pdf";

function Hero() {
  return (
    <motion.section
      id="home"
      className="bg-[#081122] min-h-screen flex items-center px-8 py-20"
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-cyan-500">Anchal</span> 👋
          </h1>

          <p className="text-gray-400 mt-8 text-xl leading-10">
            Frontend Developer specializing in ReactJS and
            Tailwind CSS. Currently learning MERN Stack and
            building modern websites.
          </p>


          <div className="flex gap-6 mt-12 flex-wrap">


            {/* Hire Me Button */}
            <a
              href="#contact"
              className="
              bg-cyan-500
              px-8
              py-4
              rounded-full
              text-white
              font-semibold
              hover:bg-cyan-600
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Hire Me
            </a>


            {/* Resume Button */}
            <a
              href={resume}
              download
              className="
              inline-flex
              items-center
              px-8
              py-4
              text-white
              font-semibold
              bg-cyan-500
              rounded-full
              shadow-lg
              hover:bg-cyan-600
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Download Resume
            </a>


          </div>

        </div>



        {/* Right Side Image */}

        <div className="flex justify-center">

          <div className="relative">


            {/* Border Shape */}
            <div
              className="
              absolute
              top-3
              left-3
              w-[350px]
              h-[420px]
              lg:w-[450px]
              lg:h-[500px]
              border-2
              border-cyan-500
              rounded-[45%]
              "
            ></div>



            {/* Profile Image */}
            <img
              src={profile}
              alt="Anchal"
              className="
              w-[350px]
              h-[420px]
              lg:w-[450px]
              lg:h-[500px]
              object-cover
              rounded-[45%]
              relative
              "
            />


          </div>

        </div>


      </div>


    </motion.section>
  );
}

export default Hero;