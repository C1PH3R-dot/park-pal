import { motion } from "framer-motion";
import { ReactNode } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 24 } },
};

const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={container} initial="hidden" animate="show" className={className}>
    {children}
  </motion.div>
);

export default StaggerContainer;
