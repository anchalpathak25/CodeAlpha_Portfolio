import { motion } from "framer-motion";
import educationImg from "../assets/education.png";

function Education() {
  return (
   <motion.section
  id="education"
  className="bg-[#081122]"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
      <p className="text-cyan-500 uppercase tracking-widest">
        Learning Path
      </p>

      <h1 className="text-5xl font-bold text-white mb-16">
        Education
      </h1>

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <div>
          <motion.img
  src={educationImg}
  alt=""
  className="rounded-3xl w-[400px]"
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        </div>

        {/* Right Cards */}
        <div className="space-y-10">

          <motion.div
  className="bg-[#101b4d] p-8 rounded-3xl"
  whileHover={{ scale: 1.03 }}
>
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-white text-3xl font-bold">
                  Bachelor of Computer Applications
                </h2>

                <p className="text-gray-400 mt-2">
                  Kashi Institite of Technologies and Managements ,Varanasi
                </p>
              </div>

              <div className="bg-black px-5 py-2 rounded-full text-cyan-400">
                2023 - 2026
              </div>

            </div>

            <p className="text-gray-400 mt-8">
              Learning Web Development, ReactJS,
              JavaScript and MERN Stack.
            </p>

            <p className="text-cyan-400 mt-6">
              Academic Excellence
            </p>
          </motion.div>

          <div className="bg-[#101b4d] p-8 rounded-3xl">
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-white text-3xl font-bold">
                  Intermediate
                </h2>

                <p className="text-gray-400 mt-2">
                  CBSE Board
                </p>
              </div>

              <div className="bg-black px-5 py-2 rounded-full text-cyan-400">
                2021 - 2022
              </div>

            </div>

            <p className="text-gray-400 mt-8">
              Completed higher secondary education.
            </p>

            <p className="text-cyan-400 mt-6">
              Academic Excellence
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default Education;