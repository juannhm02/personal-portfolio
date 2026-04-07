import { motion } from "framer-motion";
import styles from "../style";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] ${styles.flexCenter}`}
      initial={{ scale: 1, opacity: 0.25 }}
      animate={{ scale: 1.15, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="w-[88px] h-[88px] rounded-full border border-teal-200 text-teal-200 flex items-center justify-center font-poppins font-semibold text-[28px] shadow-[0_0_35px_rgba(94,234,212,0.15)]">
        JH
      </div>
    </motion.div>
  );
};

export default Loading;
