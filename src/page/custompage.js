import React from "react";
import { GiSewingMachine } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { TbMug } from "react-icons/tb";
import { TbBottle } from "react-icons/tb";
import { IoShirtOutline } from "react-icons/io5";
import { GiTrousers } from "react-icons/gi";
import { GiMonclerJacket } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

const CustomPage = () => {
  return (
    <div className="mycustom pb-5" style={{ backgroundColor: "#ececec", textAlign: "justify" }}>
      <div className="container">
        <h1 className="text-center pt-5 pb-5">ODDI CUSTOM GROUP</h1>
        <div className="row pt-5 mb-5" style={{ borderRadius: "10px", backgroundColor: "#e9e9e9" }}>
          <div class="clearfix">
            <img src={require("../img/suport/kemeja.jpg")} style={{ width: "40rem", borderRadius: "20px" }} class="col-md-6 float-md-end mb-5 ms-md-3 " alt="..." />

            <p className="fs-5 pt-5">
              Penawaran istimewa dari Oddi untuk pesanan pakaian secara partai atau jumlah banyak. Oddi juga terbuka untuk penambahan detail atau permintaan khusus pada produk yang akan dipesan untuk komunitas atau korporasi.
              <br /> Tentunya kami memberikan jaminan kecepatan pengerjaan sesuai deadline dan kualitas terbaik untuk setiap produknya. Pemesanan dapat dilakukan dengan cara menghubungin customer service Oddi.{" "}
            </p>
          </div>
        </div>
        <h1 className="text-center pb-5">KEUNGGULAN ODDI CUSTOM GROUP</h1>
        <div className="row text-center" style={{ justifyContent: "center" }}>
          <div class="col-3">
            <GiReceiveMoney size="5rem" />
            <p>JAMINAN UANG KEMBALI</p>
          </div>
          <div class="col-3">
            <GiSewingMachine size="5rem" />
            <p>KUALITAS BAHAN & JAHITAN TERJAMIN</p>
          </div>
          <div class="col-3">
            <BiTimer size="5rem" />
            <p>JAMINAN TEPAT WAKTU</p>
          </div>
          <div class="col-3">
            <TbTools size="5rem" />
            <p>CUSTOM LOGO INSTANSI/KOMUNITAS</p>
          </div>
        </div>
        <div className="row text-center pb-5 mt-5" style={{ justifyContent: "center", borderStyle: "dashed", borderRadius: "10px" }}>
          <h1 className="text-center pt-5 pb-5">ODDI CUSTOM GROUP MENERIMA PESANAN</h1>
          <div className="col-md-2">
            <TbMug size="5rem" />
            <p>MUG</p>
          </div>
          <div className="col-md-2">
            <TbBottle size="5rem" />
            <p>BOTOL</p>
          </div>
          <div className="col-md-2">
            <IoShirtOutline size="5rem" />
            <p>KAOS</p>
          </div>
          <div className="col-md-2">
            <GiMonclerJacket size="5rem" />
            <p>JAKET</p>
          </div>
          <div className="col-md-2">
            <BsBag size="5rem" />
            <p>TAS</p>
          </div>
        </div>
        <div className="row text-center pb-5 mt-5" style={{ justifyContent: "center", backgroundColor: "white", borderRadius: "10px" }}>
          <h1 className="text-center pt-5 pb-5">CARA MUDAH PEMESANAN ODDI CUSTOM GROUP </h1>
          <div className="col-md-2">
            <BsHeadset size="5rem" />
            <p>HUBUNGI CUSTOMER SERVICE ODDI</p>
          </div>
          <div className="col-md-2">
            <IoShirtOutline size="5rem" />
            <p>PILIH/REQUEST DESAIN PAKAIAN</p>
          </div>
          <div className="col-md-2">
            <SiContactlesspayment size="5rem" />
            <p>PEMBAYARAN DOWN PAYMENT</p>
          </div>
          <div className="col-md-2">
            <GiSewingMachine size="5rem" />
            <p>PROSES PRODUKSI MASAL</p>
          </div>
          <div className="col-md-2">
            <SiContactlesspayment size="5rem" />
            <p>PELUNASAN SISA PEMBAYARAN</p>
          </div>
          <div className="col-md-2">
            <TbTruckDelivery size="5rem" />
            <p>PENGIRIMAN ORDER PESANAN</p>
          </div>
          <p className="text pt-5">UNTUK INFO & PEMESANAN BISA LANGSUNG HUBUNGIN CUSTOMER CARE ODDI</p>
          <div className="col-md-5" style={{ borderStyle: "ridge", paddingTop: "15px" }}>
            <p>CALL CENTER : 082299327664</p>
            <p>SMS/WHATSAPP : 082299327664</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;
