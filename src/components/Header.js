import style from "../styles/Header.module.css";

import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [language, setLanguage] = useState(false);
  const [state, setState] = useState("");

  const text = state.text;

  const switchLanguage = () => {
    setLanguage(!language);
  };

  function slide() {
    setState((state) => ({
      text:
        state.text === `${style["slide-bar"]}` ? "" : `${style["slide-bar"]}`,
    }));
  }

  return (
    <header className={`container-fluid ${style["shadow"]}`}>
      <div className="container">
        <div className={`row  ${style["container"]}`}>
          <div className="col-lg-3 col-6">
            <div className={style["logo"]}>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-9 col-6">
            <div className={style["nav-bar"]}>
              <ol>
                <li>Investasi</li>
                <li>Pendanaan</li>
                <li>Tentang Kami</li>
                <li>Edukasi</li>
              </ol>
              <div className={style["language"]} onClick={switchLanguage}>
                <p>{!language ? "ID" : "EN"}</p>
              </div>
              <div className={style["button-login"]}>
                <button>Masuk</button>
              </div>
            </div>
            <div className={style["menu-toggle"]} onClick={slide}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={style["navbar"]}>
              <ol className={text}>
                <li>Investasi</li>
                <li>Pendanaan</li>
                <li>Tentang Kami</li>
                <li>Edukasi</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
