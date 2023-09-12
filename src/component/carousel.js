import React from "react";

const Carousel = () => {
  return (
    <div className="container">
      <div className="mycarousel">
        <h2 className="text-center p-5">KATA MEREKA TENTANG KAMI</h2>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row p-0">
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/ibnu.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@ibnu_wildan</h5>
                      <p class="card-text">"Tampil percaya diri dengan produk oddi. Karena bisa bebas pilih warna & ukuran."</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/dado.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@odadrendy</h5>
                      <p class="card-text">"Pakaian yang saya pesan sangat nyaman, ukuran sesuai dengan yang dipesan"</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/didik.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@jakdidik</h5>
                      <p class="card-text">"Proses belanja gak ribet, fast respon dan kualitas barang sesuai ekspektasi."</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/oki.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@okhieocta</h5>
                      <p class="card-text">"Belanjanya mudah, simple dan jaminan garansi uang kembali. Seneng bgt sama jaketnya!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/iqbal.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@iqbalol</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/carousel/indah.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@indahkumalaa</h5>
                      <p class="card-text">"Puas bgt sama produk lokal yg satu ini. Sesuai selera yg bisa kita custom. Pokoknya"</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/card/profil 2.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@wildaninu</h5>
                      <p class="card-text">"Kualitasnya bagus, nyaman dipakai, packingannya rapi :D, next bakal belanja lagi"</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-carousel">
                    <img src={require("../img/card/profil 1.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">@robotkucing</h5>
                      <p class="card-text">"Tampil percaya diri dengan produk oddi. Karena bisa bebas pilih warna & ukuran."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
