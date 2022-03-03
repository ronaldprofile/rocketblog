import { motion } from "framer-motion";
import { useAnimate } from "../../hooks/useAnimate";
import { Text } from "../../components/Text";
import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { Posts } from "../../components/Posts";

import * as I from "../../images";
import * as H from "./styles";

export function Home() {
  const { ref, inView, animation: variants } = useAnimate();

  return (
    <H.Container>
      <H.Background>
        <H.Wrapper>
          <Header />

          <H.Emphasis ref={ref}>
            <motion.div
              animate={inView ? "hidden" : "show"}
              variants={variants}
              custom={0}
            >
              <div className="content">
                <Text tag="h1">
                  Veja o guia definitivo para conquistar seus objetivos como DEV
                  em 2022
                </Text>

                <Text tag="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique placerat hac.
                </Text>

                <a href="#" className="see-more" title="Ver mais">
                  Ver mais
                  <img src={I.arrowRightIcon} alt="arrow right icon" />
                </a>
              </div>
            </motion.div>

            <motion.div
              animate={inView ? "hidden" : "show"}
              variants={variants}
              custom={1}
            >
              <div className="image-post">
                <img src={I.featuredImage} alt="featured Image" />
              </div>
            </motion.div>
          </H.Emphasis>
        </H.Wrapper>
      </H.Background>

      <H.Main>
        <div ref={ref}>
          <div className="wrapper">
            <motion.div
              animate={inView ? "show" : "hidden"}
              variants={variants}
              custom={1}
            >
              <section>
                <figure>
                  <img src={I.post1} alt="post 1" />
                  <figcaption>Janeiro 04, 2022</figcaption>
                </figure>

                <a href="#">
                  <Text tag="h1">Começando no ReactJS em 2022</Text>
                </a>

                <Text tag="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                  neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                  volutpat aenean.
                </Text>
              </section>
            </motion.div>

            <aside>
              <motion.div
                animate={inView ? "show" : "hidden"}
                variants={variants}
                custom={1.5}
              >
                <Article
                  date="Janeiro 04, 2022"
                  title="Conheça as principais técnicas para conseguir uma vaga
                    internacional em programação"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                    nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                    sit vitae, sed tristique."
                />
              </motion.div>

              <motion.div
                animate={inView ? "show" : "hidden"}
                variants={variants}
                custom={2}
              >
                <Article
                  date="Janeiro 04, 2022"
                  title="Conheça as principais técnicas para conseguir uma vaga
                    internacional em programação"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                    nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                    sit vitae, sed tristique."
                />
              </motion.div>
            </aside>
          </div>
        </div>

        <Posts />
      </H.Main>
    </H.Container>
  );
}
