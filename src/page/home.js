import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { MdOutlineHighQuality } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import Carousel from "../component/carousel";

const Home = () => {
  return (
    <div className="container-fluid">
      <img src={require("../img/stikeroddi.png")} style={{ width: "100%" }} className="img-fluid" alt="" />
      <h2 className="text-header" style={{ textAlign: "center", paddingTop: "5rem" }}>
        CUSTOM PAKAIAN SESUAI IMPIANMU
      </h2>
      <div className="row text-center pt-5 fs-4" style={{ justifyContent: "center" }}>
        <div className="col-lg-3 ">
          <GiPencilBrush size="5rem" />
          <p>Desain Sesuai Keinginanmu</p>
        </div>
        <div className="col-lg-3 ">
          <MdOutlineHighQuality size="5rem" />
          <p>Jaminan Kualitas Produk</p>
        </div>
        <div className="col-lg-3 ">
          <AiOutlineFieldTime size="5rem" />
          <p>Jaminan Pengiriman Tepat Waktu</p>
        </div>
        <div className="col-lg-3 ">
          <GiMoneyStack size="5rem" />
          <p>Jaminan Uang kembali</p>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row text-center">
          <div className="group col-lg-6 col-sm-2">
            <a href="/">
              <img src={require("../img/suport/jaket.jpg")} className="img-fluid mt-5 " alt="" />
            </a>
          </div>
          <div className="group col-lg-6 col-sm-2">
            <a href="/">
              <img src={require("../img/suport/kaos.jpg")} className="img-fluid mt-5" alt="" />
            </a>
          </div>
          <div className="grup col-md-12 pt-5">
            <a href="/custompage">
              <img src={require("../img/suport/grup.png")} className="img-fluid" style={{ width: "80rem" }} alt="" />
            </a>
          </div>
          <div className="col-lg-3 pt-5">
            <a href="/jersey">
              <img src={require("../img/about/jersey.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-lg-3 pt-5">
            <a href="/polo">
              <img src={require("../img/about/pol0.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-lg-3 pt-5">
            <a href="/reglan">
              <img src={require("../img/about/reglan.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
          <div className="col-lg-3 pt-5">
            <a href="/kaos">
              <img src={require("../img/suport/kaos1.png")} className="img-fluid" style={{ width: "19rem" }} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
