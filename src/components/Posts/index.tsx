import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Post } from "../../components/Post";

import * as I from "../../images";
import * as P from "./styles";

const containerList = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
};

const itemList = {
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

export function Posts() {
  const { ref, inView } = useInView();

  return (
    <P.Container ref={ref}>
      <div className="wrapper">
        <motion.ul
          variants={containerList}
          animate={inView ? "show" : "hidden"}
        >
          <motion.li
            variants={itemList}
            animate={inView ? "show" : "hidden"}
            custom={0}
          >
            <Post
              date="Janeiro 04, 2022"
              title="10 dicas para conseguir a vaga desejada"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post2}
            />
          </motion.li>

          <motion.li
            variants={itemList}
            animate={inView ? "show" : "hidden"}
            custom={1}
          >
            <Post
              date="Janeiro 04, 2022"
              title="Deixe seu código mais semântico com essas dicas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post3}
            />
          </motion.li>

          <motion.li
            variants={itemList}
            animate={inView ? "show" : "hidden"}
            custom={2}
          >
            <Post
              date="Janeiro 04, 2022"
              title="Use essas dicas nas suas aplicações mobile"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post4}
            />
          </motion.li>
        </motion.ul>
      </div>
    </P.Container>
  );
}
