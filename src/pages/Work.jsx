import { React, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Bio from "../pages/Bio";

import backSnake from "../assets/images/backSnake.jpg";
import fan from "../assets/images/fan.jpg";
import spider from "../assets/images/spider.jpg";
import floralSleeve from "../assets/images/floralSleeve.jpg";
import hannya from "../assets/images/hannya.jpg";
import hannya1 from "../assets/images/hannya1.jpg";
import mumSleeve from "../assets/images/mumSleeve.jpg";
import mumSleeve2 from "../assets/images/mumSleeve2.jpg";
import snake from "../assets/images/snake.jpg";
import snakeCard from "../assets/images/snakeCard.jpg";
import snakeMum from "../assets/images/snakeMum.jpg";
import bison from "../assets/images/bison.png";
import crane from "../assets/images/crane.png";
import dragon from "../assets/images/dragon.png";
import face from "../assets/images/face.png";
import fooDog from "../assets/images/fooDog.png";
import geoSleeve from "../assets/images/geoSleeve.png";
import geoSleeve1 from "../assets/images/geoSleeve1.png";
import Hannya from "../assets/images/hannya.png";
import hannyaHalf from "../assets/images/hannyaHalf.png";
import hannyaPaint from "../assets/images/hannyaPaint.png";
import lotus from "../assets/images/lotus.png";
import mum from "../assets/images/mum.png";
import mumSleevePng from "../assets/images/mumSleeve.png";
import rose from "../assets/images/rose.png";
import roseHand from "../assets/images/roseHand.png";
import snakePng from "../assets/images/snake.png";
import snakePaint from "../assets/images/snakePaint.png";
import tiger from "../assets/images/tiger.png";

function Work() {
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById("back-to-top");

      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    // Show or hide the back-to-top button based on scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once
  return (
    <>
      <div className="work main-container">
        <Row>
          <Col md={6}>
            {/* Include the Bio component here */}
            <Bio />
          </Col>
        </Row>
        <Row className="text-align-center">
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={backSnake}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={fan} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={floralSleeve}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={hannya1}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={mumSleeve}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={mumSleeve2}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={snake} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={snakeCard}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={snakeMum}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={hannya} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={spider} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={bison} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={crane} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={dragon} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={face} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={fooDog} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={geoSleeve}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={geoSleeve1}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={Hannya} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={hannyaHalf}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={hannyaPaint}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={lotus} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={mum} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={mumSleevePng}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={rose} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={roseHand}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={snakePng}
                className="work portfolio"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img
                variant="top"
                src={snakePaint}
                className="work portfolio"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <Card.Img variant="top" src={tiger} className="work portfolio" />
            </Card>
          </Col>
        </Row>

        <a href="#back-to-top" id="back-to-top" title="Back to Top">
          &uarr;
        </a>
      </div>
    </>
  );
}

export default Work;
