// utils/MotionPath.jsx
import { motion } from "motion/react";

const MotionPath = ({ d, stroke = "#FACC15", strokeWidth = 3, duration = 1.5 }) => {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration, ease: "easeInOut" }}
    />
  );
};

export default MotionPath;
