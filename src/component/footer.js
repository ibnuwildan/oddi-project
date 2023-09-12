import { Component } from "react";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
// const image = {
//   width: "60px",
//   borderRadius: "50%",
//   marginRight: "1.5rem",
//   paddingBottom: "10px",
// };

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <h4 style={{ paddingBottom: "2rem" }}>Support</h4>
              <img src={require("../img/footer/matsui.jpg")} alt="" />
              <img src={require("../img/footer/unita.png")} alt="" />
              <div class="w-100"></div>
              <img src={require("../img/suport/blackdeker.png")} alt="" />
              <img src={require("../img/LOGOODDI.png")} alt="" />
            </div>
            <div className="footers col-md-4 fw-bold">
              <h4 style={{ paddingBottom: "2rem" }}>Service</h4>

              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/about">About As</a>
              </p>
              <p>
                <a href="/custompage">Custom Group</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4 style={{ paddingBottom: "2rem" }}>Contact</h4>
              <div className="social">
                <p style={{ fontSize: "17px" }}>
                  <MdLocationOn style={{ fontSize: "2em", paddingRight: "10px" }} />
                  Kp.sawah Rt 02 Rw 03, Lengkong Kulon, Pagedangan, Tangerang Banten. 15331
                </p>
                <p style={{ fontSize: "17px" }}>
                  <FaWhatsapp style={{ fontSize: "2rem", paddingRight: "10px" }} />
                  082112714140
                </p>
                <a href="https://www.instagram.com/oddidesign_/">
                  <BsInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100069616577649">
                  <FiFacebook />
                </a>
                <a href="https://www.instagram.com/oddidesign_/">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
