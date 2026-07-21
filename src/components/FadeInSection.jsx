import { motion } from "framer-motion";

function FadeInSection({
  children,
  delay = 0,
  direction = "up",
}) {
  const variants = {
    up: { opacity: 0, y: 60 },
    down: { opacity: 0, y: -60 },
    left: { opacity: 0, x: 60 },
    right: { opacity: 0, x: -60 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;