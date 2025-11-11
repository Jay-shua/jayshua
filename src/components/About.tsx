import { motion } from "framer-motion";
import FunFactCard from "./FunFactCard";

const bio =
  "I'm a passionate frontend developer with hands-on experience building responsive web applications and clones that blend creativity with functionality. From serene hotel showcases to impactful charity sites, I thrive on turning ideas into pixel-perfect, user-centric realities using modern tools like React and Tailwind. When not coding, you'll find me diving into anime, cheering for football, or lost in a good book.";

const funFacts = [
  {
    title: "Anime Enthusiast",
    description: "Binge-watching series like One Piece.",
  },
  {
    title: "Football Fan",
    description: "Rooting for my favorite teams on weekends.",
  },
  {
    title: "Avid Reader",
    description: "Exploring worlds through fantasy novels.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className=" py-20 bg-soft-blue/10 dark:bg-earth-brown/10"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-organic text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center w-5/6 mx-auto">
          <motion.img
            src="/src/assets/profile-placeholder.jpg"
            alt="Atoro-Tywo Oluwasemilore"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {bio}
          </motion.p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto">
          {funFacts.map((fact, i) => (
            <FunFactCard key={i} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
