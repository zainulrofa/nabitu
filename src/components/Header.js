import style from "../styles/Header.module.css";

import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [language, setLanguage] = useState(false);

  const switchLanguage = () => {
    setLanguage(!language);
  };

  return (
    <header className={`container-fluid ${style["shadow"]}`}>
      <div className="container">
        <div className={`row  ${style["container"]}`}>
          <div className="col-lg-3">
            <div className={style["logo"]}>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className={style["navbar"]}>
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
