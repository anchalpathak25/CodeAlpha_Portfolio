import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="text-center py-8 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      © 2026 Anchal Portfolio
    </motion.footer>
  );
}

export default Footer;