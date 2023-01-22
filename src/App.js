import "./App.css";
// import style from "./styles/Footer.module.css";
import store1 from "./assets/store-1.png";
import store2 from "./assets/store-2.png";
import store3 from "./assets/store-3.png";
import store4 from "./assets/store-4.png";
import store5 from "./assets/store-5.png";
import store6 from "./assets/store-6.png";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
      saldo: 144000000,
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
      saldo: 144000000,
      period: "Dec 2021 - May 2022",
      duration: 4.9,
      projection: "ROI 10.00%",
    },
  ];
  console.log(data[0].image);
  return (
    <div className="App">
      <Header />
      {/* <img src={data[0].image} alt="" /> */}
      <Footer />
    </div>
  );
}

export default App;
