import { HTMLMotionProps, motion } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
    >
      {children}
    </motion.button>
  );
};

export default Button;
