import { motion } from "framer-motion";
function Skills() {
  return (
   <motion.section
  id="skills"
  className="bg-[#081122] px-10 py-24"
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>

      <div className="grid lg:grid-cols-2 gap-20">

        {/* Technical Skills */}

        <div>

          <h1 className="text-6xl font-bold text-white mb-16">
            Technical <span className="text-cyan-500">Skills</span>
          </h1>

          {/* HTML */}
          <div className="mb-10">

            <div className="flex justify-between text-white mb-3">
              <h3>HTML & CSS</h3>
              <span className="text-cyan-400">85%</span>
            </div>

            <div className="bg-[#14203b] h-2 rounded-full">
              <div className="bg-cyan-400 h-2 rounded-full w-[85%]"></div>
            </div>

          </div>

          {/* React */}
          <div className="mb-10">

            <div className="flex justify-between text-white mb-3">
              <h3>React JS</h3>
              <span className="text-cyan-400">70%</span>
            </div>

            <div className="bg-[#14203b] h-2 rounded-full">
              <div className="bg-cyan-400 h-2 rounded-full w-[70%]"></div>
            </div>

          </div>

          {/* JavaScript */}

          <div className="mb-10">

            <div className="flex justify-between text-white mb-3">
              <h3>JavaScript</h3>
              <span className="text-cyan-400">98%</span>
            </div>

            <div className="bg-[#14203b] h-2 rounded-full">
              <div className="bg-cyan-400 h-2 rounded-full w-[98%]"></div>
            </div>

          </div>

          {/* Tailwind */}

          <div>

            <div className="flex justify-between text-white mb-3">
              <h3>Tailwind CSS</h3>
              <span className="text-cyan-400">90%</span>
            </div>

            <div className="bg-[#14203b] h-2 rounded-full">
              <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
            </div>

          </div>

        </div>

        {/* Work Experience */}

        <div>

          <h1 className="text-6xl font-bold text-white mb-16">
            Work <span className="text-cyan-500">Experience</span>
          </h1>

          <div className="space-y-8">

            <div className="bg-[#1a1446] p-8 rounded-3xl">

              <h2 className="text-3xl text-white font-bold">
                Frontend Developer
              </h2>

              <p className="text-gray-400 mt-3">
                Personal Projects • 2025 - Present
              </p>

            </div>

            <motion.div
  className="bg-[#1a1446] p-8 rounded-3xl"
  whileHover={{ scale: 1.05 }}
>

              <h2 className="text-3xl text-white font-bold">
                MERN Stack Learner
              </h2>

              <p className="text-gray-400 mt-3">
                Self Learning • 2024 - Present
              </p>

            </motion.div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default Skills;