import { motion } from "framer-motion";

const StaggerPaths = ({ children, delay = 0.2 }) => {
  return (
    <motion.g
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.g>
  );
};

export default StaggerPaths;
