import { useInView } from "react-intersection-observer";

export function useAnimate() {
  const { ref, inView } = useInView();

  const animation = {
    hidden: { opacity: 0, y: -70 },

    show: (time: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: time * 0.3
      }
    })
  };

  return {
    ref,
    inView,
    animation
  };
}
