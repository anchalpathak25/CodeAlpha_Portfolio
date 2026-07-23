import cisco from "../assets/cisco.jpeg";
import fullstack from "../assets/fullstack.jpeg";
import react from "../assets/react.jpeg";
import infosys from "../assets/infosys.jpeg";
import ai from "../assets/ai.jpeg";
import { motion } from "framer-motion";

function Certifications() {
  return (
   <motion.section
  id="certifications"
  className="bg-[#081122] px-10 py-24"
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>
      <p className="text-cyan-500 uppercase font-semibold">
        Achievements
      </p>

      <h1 className="text-5xl font-bold text-white mt-2 mb-16">
        Certifications
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-[#101b4d] rounded-3xl p-8 relative">

          <div className="absolute -top-5 right-5 bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            🏅
          </div>

          <div className="text-gray-400 text-sm mb-6">
            CISCO/10 Sep 2025
          </div>

          <h2 className="text-white text-3xl font-bold mb-6">
            Introduction to Modern AI
          </h2>

          <p className="text-gray-400">
            CISCO Networking Academy program.
          </p>

        <a
  href={cisco}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-8 inline-block hover:text-cyan-300 transition"
>
  View Certificate ↗
</a>

        </div>

        {/* Card 2 */}
        <div className="bg-[#101b4d] rounded-3xl p-8 relative">

          <div className="absolute -top-5 right-5 bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            🏅
          </div>

          <div className="text-gray-400 text-sm mb-6">
Udemy/22 Aug 2025
          </div>

          <h2 className="text-white text-3xl font-bold mb-6">
         Fullstack Development By Anil Dollor
          </h2>

          <p className="text-gray-400">
             Udemy
          </p>

         <a
  href={fullstack}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-8 inline-block hover:text-cyan-300 transition"
>
  View Certificate ↗
</a>

        </div>
         {/* Card 3 */}
        <div className="bg-[#101b4d] rounded-3xl p-8 relative">

          <div className="absolute -top-5 right-5 bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            🏅
          </div>

          <div className="text-gray-400 text-sm mb-6">
Udemy/22 Aug 2025
          </div>

          <h2 className="text-white text-3xl font-bold mb-6">
         The Complete Front-End-Web Development With React
          </h2>

          <p className="text-gray-400">
             Udemy
          </p>
<a
  href={react}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-8 inline-block hover:text-cyan-300 transition"
>
  View Certificate ↗
</a>
        </div>
         {/* Card 4 */}
        <div className="bg-[#101b4d] rounded-3xl p-8 relative">

          <div className="absolute -top-5 right-5 bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            🏅
          </div>

          <div className="text-gray-400 text-sm mb-6">
CENTUM FOUNDATION/ 15 Sep 2025
          </div>

          <h2 className="text-white text-3xl font-bold mb-6">
         Skill Up - Employability Enhancement Programme
          </h2>

          <p className="text-gray-400">
            Infosys foundation
          </p>

         <a
  href={infosys}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-8 inline-block hover:text-cyan-300 transition"
>
  View Certificate ↗
</a>

        </div>

        {/* Card 5 */}
        <motion.div
  className="bg-[#101b4d] rounded-3xl p-8 relative"
  whileHover={{
    scale: 1.05,
    y: -10
  }}
  transition={{ duration: 0.3 }}
>

          <div className="absolute -top-5 right-5 bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
            🏅
          </div>

          <div className="text-gray-400 text-sm mb-6">
            Unicef/feb 03,2026
          </div>

          <h2 className="text-white text-3xl font-bold mb-6">
            Digitally Productivity of AI
          </h2>

          <p className="text-gray-400">
            PASSPORT TO EARNING
          </p>

      <a
  href={ai}
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-8 inline-block hover:text-cyan-300 transition"
>
  View Certificate ↗
</a>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Certifications;