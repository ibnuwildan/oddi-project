import React, { Component } from "react";
import "../style/stylesheet.css";

class Navbar extends Component {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  render() {
    return (
      <div className="mynav">
        <nav className="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a href="/">
              <img src={require("../img/logo4.png")} style={{ width: "10rem", paddingLeft: "30px" }} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto pe-5">
                <li class="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    <strong>Home</strong>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    <strong>About</strong>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/custompage">
                    <strong>Group Custom</strong>
                  </a>
                </li>
              </ul>
              {/* <ul class="navbar-nav ms-auto pe-5">
                <li class="nav-item">
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ cursor: "pointer" }}>
                    <strong>Login</strong>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" data-bs-toggle="modal" data-bs-target="#registrasi" data-bs-whatever="@mdo" style={{ cursor: "pointer" }}>
                    <strong>Registrasi</strong>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
        {/* modals Login */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Email
                    </label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      password
                    </label>
                    <input type="password" class="form-control" id="recipient-name" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancle
                </button>
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal registrasi */}
        <div class="modal fade" id="registrasi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Registrasi
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Email
                    </label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      password
                    </label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancle
                </button>
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
