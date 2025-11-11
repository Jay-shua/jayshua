import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect"; // New import
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Particles } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { type ISourceOptions, tsParticles } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  preset: "links",
  background: { color: { value: "transparent" } },
  particles: {
    color: { value: "#2E5D3A" },
    links: { color: "#4A7856" },
    move: { enable: true, speed: 1 },
    number: { value: 50 },
  },
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    loadLinksPreset(tsParticles);
  }, []);

  const icons = [
    { Icon: FaHtml5, color: "text-orange-500" },
    { Icon: FaCss3Alt, color: "text-blue-500" },
    { Icon: FaJs, color: "text-yellow-500" },
    { Icon: SiTypescript, color: "text-blue-700" },
    { Icon: FaReact, color: "text-cyan-500" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0"
      />
      <motion.div style={{ y }} className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-organic mb-4 text-forest-green dark:text-muted-green">
          Atoro-Tywo Oluwasemilore
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4">
          Frontend Developer Crafting Immersive Web Experiences
        </h2>

        <Typewriter
          options={{
            strings: ["With React", "Using TypeScript", "Styled with Tailwind"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50, // Matches your old backSpeed
            delay: 40, // Matches your old typeSpeed
          }}
          component="span" // Renders as <span> for inline styling
          className="text-xl md:text-2xl text-muted-green"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-forest-green text-white rounded-full font-medium"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </motion.button>

        <div className="mt-12 flex justify-center space-x-8">
          {icons.map(({ Icon, color }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              className={`text-4xl md:text-5xl ${color}`}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
