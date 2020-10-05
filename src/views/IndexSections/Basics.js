/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Basics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {

  }
  render() {
    return (
        <Container>
          
         
          
          <div id="images">

          <Row>
            <Col md="1">
            <h1>
              NEW
            </h1>
            </Col>
            <Col md="9">
              <Button
                className="btn-simple btn-round"
                color="primary"
                type="button"
              >
                + More
              </Button>
            </Col>
          </Row>

            <Row>

            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/lora.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>CUCCI Jacky bag</p>
                  <h5>4.2 ETH</h5>
                </Link>
              </Col>
              
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/lora.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>CUCCI Jacky bag</p>
                  <h5>4.2 ETH</h5>
                </Link>
              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/lora.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>CUCCI Jacky bag</p>
                  <h5>4.2 ETH</h5>
                </Link>
              </Col>


              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/lora.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>CUCCI Jacky bag</p>
                  <h5>4.2 ETH</h5>
                </Link>
              </Col>
            </Row>

          {/* ---------------------------------------- */}
          <div class="space-70"></div>
          <Row>
            <Col md="1">
            <h1>
              OLD
            </h1>
            </Col>
            <Col md="9">
              <Button
                className="btn-simple btn-round"
                color="info"
                type="button"
              >
                + More
              </Button>
            </Col>
          </Row>

            <Row>

            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/mike.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>FENDI boston bag</p>
                  <h5>3.7 ETH</h5>
                </Link>
              </Col>
              
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/mike.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>FENDI boston bag</p>
                  <h5>3.7 ETH</h5>
                </Link>
              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/mike.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>FENDI boston bag</p>
                  <h5>3.7 ETH</h5>
                </Link>
              </Col>


              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/mike.jpg")}
                  style={{ width: "250px" , margin: "15px"}}
                />

                <Link tag={Link} to="/landing-page">
                  <p>FENDI boston bag</p>
                  <h5>3.7 ETH</h5>
                </Link>
              </Col>
            </Row>
          </div>

          <div class="space-70"></div>


        
        </Container>
      
    );
  }
}

export default Basics;
