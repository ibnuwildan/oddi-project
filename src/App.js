import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./page/home";
import About from "./page/about";
import Footer from "./component/footer";
import CustomPage from "./page/custompage";
import Kaos from "./page/kaos";
import Reglan from "./page/celana";
import Polo from "./page/kemeja";
import ALLProduct from "./page/produts";
import Jersey from "./page/jersey";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custompage" element={<CustomPage />} />
        <Route path="/kaos" element={<Kaos />} />
        <Route path="/reglan" element={<Reglan />} />
        <Route path="/polo" element={<Polo />} />
        <Route path="/jersey" element={<Jersey />} />
        <Route path="/products" element={<ALLProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
