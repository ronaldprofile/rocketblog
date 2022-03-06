import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { getPosts } from "../../posts";
import { Post } from "../../components/Post";

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
  const posts = getPosts();
  const { ref, inView } = useInView();

  return (
    <P.Container ref={ref}>
      <div className="wrapper">
        <motion.ul
          variants={containerList}
          animate={inView ? "show" : "hidden"}
        >
          {posts.map(post => (
            <motion.li
              key={post.id}
              variants={itemList}
              animate={inView ? "show" : "hidden"}
              custom={post.customDelay}
            >
              <Post
                date={post.date}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </P.Container>
  );
}
