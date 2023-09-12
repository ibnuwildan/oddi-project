import axios from "axios";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import { API_URL } from "../utils/constants";
import { Container } from "react-bootstrap";

class jersey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const product = res.data.filter((product) => product.category.nama === "jersey");
        this.setState({ product });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <div>
          <h2 className="text-center">Jersey page</h2>
          <div className="d-flex flex-wrap">
            {this.state.product.map((data, i) => (
              <Card className="card-item" style={{ width: "18rem", margin: "1rem" }} key={i}>
                <Card.Img variant="top" src={"assets/img/" + data.category.nama + "/" + data.gambar} />
                <Card.Body>
                  {/* <Card.Title>{data.nama}</Card.Title> */}
                  {/* <Card.Subtitle className="mb-2 text-muted">{data.kode}</Card.Subtitle>
                  <Card.Text>Harga: Rp {data.harga.toLocaleString()}</Card.Text> */}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
export default jersey;
