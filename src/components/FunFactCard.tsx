import { motion } from "framer-motion";

interface FunFactCardProps {
  title: string;
  description: string;
}

const FunFactCard = ({ title, description }: FunFactCardProps) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-charcoal rounded-lg shadow-md"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FunFactCard;
