import { useCallback, useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

import { Navigation } from "../../components/Navigation";
import logoTheBlog from "../../images/logo.svg";
import searchImage from "../../images/search.svg";

import * as H from "./styles";

export function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const openMenu = useCallback(() => setMenuIsActive(true), []);
  const closeMenu = useCallback(() => setMenuIsActive(false), []);

  return (
    <H.Container>
      <H.Logo>
        <img src={logoTheBlog} alt="Logo The Blog" title="The Blog" />
      </H.Logo>

      <Navigation />

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

      <H.ActionsMenu modalActive={menuIsActive}>
        <div className="button-hamburger">
          <button onClick={openMenu} title="Abrir menu">
            <HamburgerMenuIcon />
          </button>
        </div>

        <div className="button-cross">
          <button onClick={closeMenu} title="Fechar menu">
            <Cross1Icon />
          </button>
        </div>

        <H.MenuMobile>
          <Navigation />
        </H.MenuMobile>
      </H.ActionsMenu>
    </H.Container>
  );
}
