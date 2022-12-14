import { motion } from 'framer-motion';
import styles from './CircleLoader.module.css';

const spinTransition = {
  repeat: Infinity,
  duration: 1,
  ease: 'linear',
};

const CircleLoader = () => {
  return (
    <div className={styles.container}>
      <motion.span
        className={styles.circle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default CircleLoader;
