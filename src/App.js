import "./App.css";
import style from "./styles/Main.module.css";
import store1 from "./assets/store-1.png";
import store2 from "./assets/store-2.png";
import store3 from "./assets/store-3.png";
import store4 from "./assets/store-4.png";
import store5 from "./assets/store-5.png";
import store6 from "./assets/store-6.png";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Select from "react-select";

function App() {
  const data = [
    {
      image: store1,
      syirkah: "SYIRKAH MUDHOROBAH",
      code: "AMK-02 Retail Lebaran Chino 2000 pcs",
      name: "Ammar Kids",
      target: 298000000,
      saldo: 144000000,
      period: "Dec 2021 - May 2022",
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
      period: "Dec 2021 - May 2022",
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
      period: "Dec 2021 - May 2022",
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
      period: "Dec 2021 - May 2022",
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
      period: "Dec 2021 - May 2022",
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
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const type = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  // console.log(data[0].image);
  return (
    <div className="App">
      <Header />
      <main>
        <div className={style["title-content"]}>
          <h1>Daftar Proyek</h1>
          <h2>Temukan proyek untuk didanai !</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
      </main>
      {/* <img src={data[0].image} alt="" /> */}
      <Footer />
    </div>
  );
}

export default App;
