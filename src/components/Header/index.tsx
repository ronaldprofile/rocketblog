import logoTheBlog from "../../images/logo.svg";
import searchImage from "../../images/search.svg";
import * as H from "./styles";

export function Header() {
  return (
    <H.Container>
      <H.Logo>
        <img src={logoTheBlog} alt="Logo The Blog" title="The Blog" />
      </H.Logo>
      <H.Navigation>
        <H.Ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Categorias</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </H.Ul>
      </H.Navigation>

      <H.SearchArea>
        <form>
          <div>
            <label htmlFor="search-post">Pesquisar post</label>
            <input type="text" id="search-post" placeholder="Pesquisar post" />
          </div>

          <button title="Pesquisar">
            <img src={searchImage} alt="Search icon" />
          </button>
        </form>
      </H.SearchArea>
    </H.Container>
  );
}
