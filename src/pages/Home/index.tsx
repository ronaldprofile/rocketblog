import { Text } from "../../components/Text";
import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { Post } from "../../components/Post";

import * as I from "../../images";
import * as H from "./styles";

export function Home() {
  return (
    <H.Container>
      <H.Background>
        <H.Wrapper>
          <Header />

          <H.Emphasis>
            <div className="content">
              <Text tag="h1">
                Veja o guia definitivo para conquistar seus objetivos como DEV
                em 2022
              </Text>

              <Text tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique placerat hac.
              </Text>

              <a href="#" className="see-more" title="Ver mais">
                Ver mais
                <img src={I.arrowRightIcon} alt="arrow right icon" />
              </a>
            </div>

            <div className="image-post">
              <img src={I.featuredImage} alt="featured Image" />
            </div>
          </H.Emphasis>
        </H.Wrapper>
      </H.Background>

      <H.Main>
        <div>
          <div className="wrapper">
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
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </Text>
            </section>

            <aside>
              <Article
                date="Janeiro 04, 2022"
                title="Conheça as principais técnicas para conseguir uma vaga
                internacional em programação"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                sit vitae, sed tristique."
              />
              <Article
                date="Janeiro 04, 2022"
                title="Conheça as principais técnicas para conseguir uma vaga
                internacional em programação"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                sit vitae, sed tristique."
              />
            </aside>
          </div>
        </div>

        <H.Posts>
          <div className="wrapper">
            <Post
              date="Janeiro 04, 2022"
              title="10 dicas para conseguir a vaga desejada"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post2}
            />
            <Post
              date="Janeiro 04, 2022"
              title="Deixe seu código mais semântico com essas dicas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post3}
            />
            <Post
              date="Janeiro 04, 2022"
              title="Use essas dicas nas suas aplicações mobile"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
              imageUrl={I.post4}
            />
          </div>
        </H.Posts>
      </H.Main>
    </H.Container>
  );
}
