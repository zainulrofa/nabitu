import "./App.css";
import style from "./styles/Main.module.css";
import store1 from "./assets/store-1.png";
import store2 from "./assets/store-2.png";
import store3 from "./assets/store-3.png";
import store4 from "./assets/store-4.png";
import store5 from "./assets/store-5.png";
import store6 from "./assets/store-6.png";
import graph from "./assets/graph.png";
import logo from "./assets/logo-white.png";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Select from "react-select";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [seconds, setSeconds] = useState(3600);

  const data = [
    {
      image: store1,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 144000000,
      period: "Dec 2022 - May 2023",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
    {
      image: store2,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 144000000,
      period: "Dec 2022 - May 2023",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
    {
      image: store3,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 144000000,
      period: "Dec 2022 - May 2023",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
    {
      image: store4,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 144000000,
      period: "Dec 2022 - May 2023",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
    {
      image: store5,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 0,
      period: "Jan 2023 - May 2024",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
    {
      image: store6,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 298000000,
      period: "Dec 2021 - May 2022",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
  ];

  function getTargetAndSaldo(data) {
    data.forEach((item, index) => {
      item.percent = Math.round((item.saldo / item.target) * 100);
    });
    return data;
  }

  const newData = getTargetAndSaldo(data);
  console.log(newData);

  const currency = (price) => {
    return (
      "Rp " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };

  const status = [
    { value: "Selesai", label: "Selesai" },
    { value: "Berjalan", label: "Berjalan" },
    { value: "Belum Mulai", label: "Belum Mulai" },
  ];

  const type = [
    { value: "Kontruksi", label: "Kontruksi" },
    { value: "Jasa", label: "Jasa" },
    { value: "Jual Beli", label: "Jual Beli" },
  ];
  console.log(isVisible);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="App">
      <i
        className={`fa-solid fa-circle-chevron-up ${style["to-top"]} ${
          isVisible ? "show" : "hide"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></i>
      {/* <button
        className={`${style["to-top"]} ${isVisible ? "show" : "hide"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        top
      </button> */}
      <Header />
      <main>
        <div className={style["title-content"]}>
          <h1>Daftar Proyek</h1>
          <h2>Temukan proyek untuk didanai !</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className={style["dropdown"]}>
                <Select
                  className={style["select"]}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: "5px",
                    colors: {
                      ...theme.colors,
                      primary25: "#F5A856",
                      primary: "#195A32",
                    },
                  })}
                  options={status}
                  placeholder="Status"
                />
                <Select
                  className={style["select"]}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: "5px",
                    colors: {
                      ...theme.colors,
                      primary25: "#F5A856",
                      primary: "#195A32",
                    },
                  })}
                  options={type}
                  placeholder="Bidang Usaha"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className={style["navbar"]}>
                <div className={style["sort-container"]}>
                  <i className="fa-solid fa-arrow-up-wide-short"></i>
                </div>
                <div className={style["search-bar"]}>
                  <input type="text" placeholder="Cari" />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={style["card-container"]}>
            {newData.map((e) => (
              <div className={style["card"]}>
                <div className={style["image-wrapper"]}>
                  <img src={e.image} alt="img-store" />
                  {e.percent === 100 ? (
                    <div className={style["done-container"]}>
                      <div className={style["done"]}>
                        <div className={style["logo-wrapper"]}>
                          <img src={logo} alt="" />
                        </div>
                        <h1>Alhamdulillah Selesai</h1>
                      </div>
                    </div>
                  ) : (
                    e.percent > 0 && (
                      <div className={style["going-container"]}>
                        <div className={style["done"]}>
                          <div className={style["logo-wrapper"]}>
                            <img src={logo} alt="" />
                          </div>
                          <h1>Berjalan</h1>
                        </div>
                      </div>
                    )
                  )}
                  {e.percent === 0 && (
                    <div className={style["time-container"]}>
                      <div className={style["time"]}>
                        <h2 className={style["title"]}>Akan Dimulai</h2>
                        <h1 className={style["countdown"]}>
                          {hours} : {minutes} : {secs}
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
                <div className={style["syirkah"]}>
                  <p>{e.syirkah}</p>
                  <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div className={style["code"]}>
                  <p>{e.code}</p>
                </div>
                <div className={style["name"]}>{e.name}</div>
                <div className={style["slider"]}>
                  <div className={style["wrapper"]}>
                    <h1
                      style={{
                        position: "absolute",
                        color: "white",
                        zIndex: "10",
                        fontSize: "12px",
                        left: "7.8rem",
                      }}
                    >
                      {e.percent === 100 && `${e.percent}%`}
                    </h1>
                    <div
                      style={{
                        width: `${e.percent}%`,
                        height: "15px",
                        position: "absolute",
                        background: "#195A32",
                        borderRadius: "10px",
                      }}
                      // className={style["bar"]}
                    ></div>
                  </div>
                </div>
                <div className={style["price"]}>
                  <div className={style["target"]}>
                    <div className={style["title"]}>
                      <p>Kebutuhan</p>
                    </div>
                    <div className={style["amount"]}>
                      <p>{currency(e.target)}</p>
                    </div>
                  </div>
                  <div className={style["saldo"]}>
                    <div className={style["title-right"]}>
                      <p>Terkumpul</p>
                    </div>
                    <div className={style["amount-right"]}>
                      <p>{currency(e.saldo)}</p>
                    </div>
                  </div>
                </div>
                <div className={style["content"]}>
                  <div className={style["left"]}>
                    <ol>
                      <li>Periode</li>
                      <li>Durasi</li>
                      <li>Proyeksi</li>
                    </ol>
                  </div>
                  <div className={style["right"]}>
                    <ol>
                      <li>{e.period}</li>
                      <li>{e.duration}</li>
                      <li>{e.projection}</li>
                    </ol>
                  </div>
                </div>
                <div className={style["button"]}>
                  <button>
                    <p>Lihat</p>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`container-fluid ${style["shadow"]}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className={style["left"]}>
                  <div className={style["top"]}>
                    <h1>
                      Jadi Member Dan Dapatkan Peluang Investasi Tanpa Riba
                    </h1>
                  </div>
                  <div className={style["bottom"]}>
                    <h2>#TumbuhTanpaRiba</h2>
                    <button>Ayo Mulai</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 col-12 text-center my-2">
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <img src={data[0].image} alt="" /> */}
      <Footer />
    </div>
  );
}

export default App;
