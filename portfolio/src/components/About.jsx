import { motion } from "framer-motion";

import profile from "../assets/about.jpg";

function About() {
  return (
    <motion.section
  id="about"
  className="bg-[#081122] px-10 py-24"
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
<div className="grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <h1 className="text-6xl font-bold text-white">
            More <span className="text-cyan-500">About</span> Me
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-10">
            I am a Frontend Developer passionate about building
            modern and responsive websites using ReactJS and
            Tailwind CSS.
          </p>

          <p className="text-gray-400 mt-8 text-lg leading-10">
            Currently pursuing BCA and learning MERN Stack
            development.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-12">

            <div className="bg-[#101b4d] p-8 rounded-3xl w-44 text-center">
              <h2 className="text-cyan-500 text-5xl font-bold">
                +10
              </h2>

              <p className="text-gray-300 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-[#101b4d] p-8 rounded-3xl w-44 text-center">
              <h2 className="text-cyan-500 text-5xl font-bold">
                +5
              </h2>

              <p className="text-gray-300 mt-2">
                Certificates
              </p>
            </div>

            <div className="bg-[#101b4d] p-8 rounded-3xl w-44 text-center">
              <h2 className="text-cyan-500 text-5xl font-bold">
                +3
              </h2>

              <p className="text-gray-300 mt-2">
                Years Learning
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Image */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute top-3 left-3 w-[450px] h-[550px] border-2 border-gray-400 rounded-[50%]"></div>

           <motion.img
  src={profile}
  alt=""
  className="w-[450px] h-[550px] object-cover rounded-[50%]"
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;