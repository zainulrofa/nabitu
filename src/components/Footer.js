import style from "../styles/Footer.module.css";

import ojk from "../assets/ojk-logo.png";
import afsi from "../assets/AFSI.png";
import kominfo from "../assets/kominfo.png";
import privy from "../assets/privy.png";
import bsi from "../assets/bsi.png";
import rightLeave from "../assets/right-leave.png";
import leftLeave from "../assets/left-leave.png";

function Footer() {
  return (
    <footer className={`container-fluid ${style["background"]}`}>
      <img className={style["left-leave"]} src={leftLeave} alt="" />
      <img className={style["right-leave"]} src={rightLeave} alt="" />
      <div className="container">
        <div className={`row  ${style["container-top"]}`}>
          <div className="col-4">
            <div className={style["address"]}>
              <h1 className={style["title"]}>PT. Nabitu Teknologi Islami</h1>
              <p className={style["content"]}>
                Jalan Uranus Blok CIII No. 11 Komp. Margahayu Raya Barat Buah
                Batu, Bandung 40286
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className={style["info"]}>
              <h1 className={style["title"]}>Informasi Pelayanan</h1>
              <ol>
                <li>Daftarkan Proyek Investasi</li>
                <li>Ikut Investasi</li>
                <li>Akad - Akad Investasi</li>
                <li>Workflow Investasi</li>
                <li>Ketentuan Pengguna</li>
              </ol>
            </div>
          </div>
          <div className="col-3">
            <div className={style["about"]}>
              <h1 className={style["title"]}>Tentang Kami</h1>
              <ol>
                <li>Tentang Nabitu</li>
                <li>Latar Belakang Nabitu</li>
                <li>Our Vision and Values</li>
                <li>Partners</li>
                <li>Portofolio</li>
              </ol>
            </div>
          </div>
          <div className="col-2">
            <div className={style["contact"]}>
              <h1 className={style["title"]}>Kontak</h1>
              <ol>
                <li>admin@nabitu.id</li>
                <li>+62 882 1111 2275</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={`row  ${style["container-bottom"]}`}>
          <div className="col-4">
            <div className={style["sosmed"]}>
              <h1 className={style["title"]}>Sosial Media</h1>
              <div className={style["logo-sosmed"]}>
                <div className={style["top"]}>
                  <a href="https://www.facebook.com/">
                    <i
                      className={`fa-brands fa-square-facebook ${style["fb"]}`}
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i
                      className={`fa-brands fa-square-instagram ${style["ig"]}`}
                    ></i>
                  </a>
                </div>
                <div className={style["bottom"]}>
                  <a href="https://www.linkedin.com/">
                    <i
                      className={`fa-brands fa-linkedin ${style["linkedin"]}`}
                    ></i>
                  </a>
                  <a href="https://www.tiktok.com/">
                    <i className={`fa-brands fa-tiktok ${style["tiktok"]}`}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={style["ongoing"]}>
              <h1 className={style["title"]}>Dalam Proses</h1>
              <img src={ojk} alt="ojk" />
            </div>
          </div>
          <div className="col-3">
            <div className={style["register"]}>
              <h1 className={style["title"]}>Terdaftar di:</h1>
              <img src={kominfo} alt="kominfo" />
              <img className={style["afsi"]} src={afsi} alt="afsi" />
            </div>
          </div>
          <div className="col-2">
            <div className={style["sponsor"]}>
              <h1 className={style["title"]}>Didukung Oleh:</h1>
              <img src={privy} alt="kominfo" />
              <img className={style["bsi"]} src={bsi} alt="afsi" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
