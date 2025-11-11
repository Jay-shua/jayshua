import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  live,
  github,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="mb-8 bg-white dark:bg-charcoal rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <LazyLoadImage
        src={image}
        alt={title}
        effect="blur"
        className="w-full h-[300px] object-cover bg-center"
        placeholderSrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // Optional: subtle blur placeholder
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-muted-green text-white rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-green hover:underline"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-green hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
