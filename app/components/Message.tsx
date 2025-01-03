import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Message = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="text-xl text-white font-romantic font-medium leading-relaxed"
    >
      &ldquo;Every moment with you feels like a perfect summer day - warm,
      bright, and full of joy. Here&apos;s to our first year together and many
      more to come! 💕&rdquo;
    </motion.p>
  );
};

export default Message;
