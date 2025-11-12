import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";
import Typewriter from "typewriter-effect"; // New import
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md z-50 shadow-md"
    >
      <nav className="container relative mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl lg:w-[30%] font-organic text-forest-green dark:text-muted-green"
        >
          <Typewriter
            options={{
              strings: ["Atoro-Tywo Oluwasemilore", "Jayshua Designs"],
              autoStart: true,
              loop: true,
              deleteSpeed: 100, // Matches your old backSpeed
              delay: 80, // Matches your old typeSpeed
            }}
            component="span" // Renders as <span> for inline styling
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-forest-green dark:hover:text-muted-green transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Hamburger Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-charcoal/90 backdrop-blur-md shadow-md z-40"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-forest-green dark:hover:text-muted-green transition-colors"
                    onClick={toggleMenu} // Close menu on click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
