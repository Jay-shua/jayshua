import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const skillsData = [
  { skill: "HTML", level: 90, fullMark: 100 },
  { skill: "CSS/Tailwind", level: 85, fullMark: 100 },
  { skill: "JavaScript", level: 80, fullMark: 100 },
  { skill: "TypeScript", level: 75, fullMark: 100 },
  { skill: "React", level: 85, fullMark: 100 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 w-5/6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-organic text-center mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="h-96"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar
                name="Level"
                dataKey="level"
                stroke="#2E5D3A"
                fill="#4A7856"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
