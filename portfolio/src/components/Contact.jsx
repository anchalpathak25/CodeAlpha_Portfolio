import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-[#081122] text-white px-8 py-24"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Let's <span className="text-cyan-500">Connect</span>
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">


        {/* Left Side */}

        <div className="space-y-8 text-lg">

          <p className="text-gray-400 leading-8">
            Feel free to contact me for projects,
            internships and collaborations.
          </p>


          <div className="flex items-center gap-4">
            <Mail className="text-cyan-500" size={28} />
            <span>
              anchalpathak8934@gmail.com
            </span>
          </div>


          <div className="flex items-center gap-4">
            <Phone className="text-cyan-500" size={28} />
            <span>
              +91 XXXXX XXXXX
            </span>
          </div>
          <div className="flex gap-6 mt-8">

  <a
    href="#"
    className="text-cyan-500 hover:text-cyan-300 transition"
  >
    <FaLinkedin size={35} />
  </a>


  <a
    href="#"
    className="text-cyan-500 hover:text-cyan-300 transition"
  >
    <FaFacebook size={35} />
  </a>


  <a
    href="#"
    className="text-cyan-500 hover:text-cyan-300 transition"
  >
    <FaInstagram size={35} />
  </a>

</div>


        </div>



        {/* Contact Form */}

        <div
          className="
          bg-[#1c2940]
          p-8
          rounded-3xl
          shadow-xl
          "
        >

          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            bg-[#34445f]
            p-4
            rounded-xl
            mb-5
            outline-none
            text-white
            "
          />


          <input
            type="email"
            placeholder="Your Email"
            className="
            w-full
            bg-[#34445f]
            p-4
            rounded-xl
            mb-5
            outline-none
            text-white
            "
          />


          <textarea
            placeholder="Your Message..."
            rows="6"
            className="
            w-full
            bg-[#34445f]
            p-4
            rounded-xl
            mb-6
            outline-none
            text-white
            "
          ></textarea>


          <button
            className="
            w-full
            bg-cyan-500
            py-4
            rounded-xl
            font-bold
            hover:bg-cyan-600
            hover:scale-105
            transition
            "
          >
            Send Message
          </button>


        </div>


      </div>


    </motion.section>
  );
}


export default Contact;