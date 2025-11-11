import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 bg-charcoal dark:bg-black text-white text-center">
      <div className="w-11/12 flex flex-row items-center justify-between mx-auto">
        <p>&copy; 2025 Atoro-Tywo Oluwasemilore. All rights reserved.</p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
