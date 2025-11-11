import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md z-50 shadow-md"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-organic text-forest-green dark:text-muted-green"
        >
          Atoro-Tywo Oluwasemilore
        </a>
        <ul className="flex space-x-6">
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
        <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
