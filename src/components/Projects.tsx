import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "Ronnie's Garden",
    description:
      "A serene hotel website showcasing tranquility in Ijebu with sections for escape, rooms, and natural beauty.",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript"],
    live: "https://ronniesgarden.vercel.app/",
    github: "https://github.com/Jay-shua/Ronnies-Garden", // placeholder
    image: "/src/assets/project1-screenshot.png",
  },
  {
    title: "Charity: Water Clone",
    description:
      "An impactful nonprofit site focused on funding clean water projects, featuring stats, donation calls, and stories.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://jay-shua.github.io/charity_water_clone/",
    github: "https://github.com/Jay-shua/charity_water_clone",
    image: "/src/assets/project2-screenshot.png",
  },
  {
    title: "Omodee Photography",
    description:
      "A professional photography portfolio capturing timeless memories with services like portraits and events.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://jay-shua.github.io/omodee_photography/",
    github: "https://github.com/Jay-shua/omodee_photography",
    image: "/src/assets/project3-screenshot.jpg",
  },
  {
    title: "Tip Calculator App",
    description:
      "A simple, interactive tool for calculating tips and totals per person.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://jay-shua.github.io/tipcalculator/",
    github: "https://github.com/Jay-shua/tipcalculator",
    image: "/src/assets/project4-screenshot.jpg",
  },
];

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  900: 1,
  700: 1,
  500: 1
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-soft-blue/10 dark:bg-earth-brown/10">
      <div className="container mx-auto px-4 w-4/5">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-organic text-center mb-12"
        >
          Projects
        </motion.h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Projects