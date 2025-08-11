import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
    <motion.hr 
      className="mb-4 border-zinc-600"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.div 
      className="footer sm:footer-horizontal footer-center text-base-content p-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
    >
          <aside>
            <motion.p
              whileHover={{ scale: 1.02, color: "#ffffff", transition: { duration: 0.15 } }}
            >
              Andrew Vasquez {new Date().getFullYear()}
            </motion.p>
          </aside>
        </motion.div>
    </>
  );
}

export default Footer;