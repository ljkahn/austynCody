import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backSnake from "../assets/images/backSnake.jpg";
import fan from "../assets/images/fan.jpg";
import floralSleeve from "../assets/images/floralSleeve.jpg";
import hannya from "../assets/images/hannya.jpg";
import hannya1 from "../assets/images/hannya1.jpg";
import mumSleeve from "../assets/images/mumSleeve.jpg";
import mumSleeve2 from "../assets/images/mumSleeve2.jpg";
import snake from "../assets/images/snake.jpg";
import snakeCard from "../assets/images/snakeCard.jpg";
import snakeMum from "../assets/images/snakeMum.jpg";
import spider from "../assets/images/spider.jpg";

function Work() {
  return (
    <>
      <div className="work main-container">
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
        </Row>
      </div>
    </>
  );
}

export default Work;
