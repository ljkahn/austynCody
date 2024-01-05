import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Bio from "../pages/Bio";
import ImageModal from "../components/imageModal";

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

const isContactPage = false;
function Work() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    console.log("Effect is running...");
    const handleScroll = () => {
      console.log("scrolling...");
      if (window.scrollY > 100) {
        console.log("Setting showBackToTop to true");
        setShowBackToTop(true);
      } else {
        console.log("Setting showBackToTop to false");
        setShowBackToTop(false);
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
              onClick={() => handleImageClick(backSnake)}
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
              onClick={() => handleImageClick(fan)}
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
              onClick={() => handleImageClick(floralSleeve)}
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
              onClick={() => handleImageClick(hannya1)}
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
              onClick={() => handleImageClick(mumSleeve)}
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
              onClick={() => handleImageClick(mumSleeve2)}
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
              onClick={() => handleImageClick(snake)}
            >
              <Card.Img variant="top" src={snake} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(snakeCard)}
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
              onClick={() => handleImageClick(snakeMum)}
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
              onClick={() => handleImageClick(hannya)}
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
              onClick={() => handleImageClick(spider)}
            >
              <Card.Img variant="top" src={spider} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(bison)}
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
              onClick={() => handleImageClick(crane)}
            >
              <Card.Img variant="top" src={crane} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(dragon)}
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
              onClick={() => handleImageClick(face)}
            >
              <Card.Img variant="top" src={face} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(fooDog)}
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
              onClick={() => handleImageClick(geoSleeve)}
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
              onClick={() => handleImageClick(geoSleeve1)}
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
              onClick={() => handleImageClick(Hannya)}
            >
              <Card.Img variant="top" src={Hannya} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(hannyaHalf)}
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
              onClick={() => handleImageClick(hannyaPaint)}
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
              onClick={() => handleImageClick(lotus)}
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
              onClick={() => handleImageClick(mum)}
            >
              <Card.Img variant="top" src={mum} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(mumSleevePng)}
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
              onClick={() => handleImageClick(rose)}
            >
              <Card.Img variant="top" src={rose} className="work portfolio" />
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="work-card"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
              onClick={() => handleImageClick(roseHand)}
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
              onClick={() => handleImageClick(snakePng)}
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
              onClick={() => handleImageClick(snakePaint)}
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
              onClick={() => handleImageClick(tiger)}
            >
              <Card.Img variant="top" src={tiger} className="work portfolio" />
            </Card>
          </Col>
        </Row>
        <ImageModal
          show={showModal}
          onHide={handleModalClose}
          imageSrc={selectedImage}
        />

        {showBackToTop ? (
          <a
            href="#back-to-top"
            id="back-to-top"
            title="Back to Top"
            className="show"
          >
            &uarr;
          </a>
        ) : null}
      </div>
    </>
  );
}

export default Work;
