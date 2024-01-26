import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Bio from "../pages/Bio";
import ImageModal from "../components/imageModal";

import backSnake from "../assets/images/backSnake.jpg";
import bison from "../assets/images/bison.png";
import crane from "../assets/images/crane.png";
import dragon from "../assets/images/dragon.png";
import face from "../assets/images/face.png";
import fan from "../assets/images/fan.jpg";
import floralSleeve from "../assets/images/floralSleeve.jpg";
import fooDog from "../assets/images/fooDog.png";
import geoSleeve from "../assets/images/geoSleeve.png";
import geoSleeve1 from "../assets/images/geoSleeve1.png";
import Hannya from "../assets/images/hannya.png";
import hannya from "../assets/images/hannya.jpg";
import hannya1 from "../assets/images/hannya1.jpg";
import lotus from "../assets/images/lotus.png";
import mum from "../assets/images/mum.png";
import mumSleeve from "../assets/images/mumSleeve.jpg";
import mumSleeve2 from "../assets/images/mumSleeve2.jpg";
import mumSleevePng from "../assets/images/mumSleeve.png";
import rose from "../assets/images/rose.png";
import roseHand from "../assets/images/roseHand.png";
import snake from "../assets/images/snake.jpg";
import snakePng from "../assets/images/snake.png";
import snakeCard from "../assets/images/snakeCard.jpg";
import snakeMum from "../assets/images/snakeMum.jpg";
import snakePaint from "../assets/images/snakePaint.png";
import spider from "../assets/images/spider.jpg";
import tiger from "../assets/images/tiger.png";

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
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemData = [
    { img: backSnake, title: "Snake back tattoo" },
    { img: bison, title: "Bison Back Tattoo" },
    { img: crane, title: "Crane Tattoo" },
    { img: dragon, title: "Dragon Tattoo" },
    { img: face, title: "Blinds" },
    { img: fan, title: "Chairs" },
    { img: floralSleeve, title: "Laptop" },
    { img: fooDog, title: "Doors" },
    { img: geoSleeve, title: "Coffee" },
    { img: geoSleeve1, title: "Storage" },
    { img: hannya, title: "Candle" },
    { img: Hannya, title: "Coffee table" },
    { img: hannya1, title: "Coffee table" },
    { img: lotus, title: "Coffee table" },
    { img: mum, title: "Coffee table" },
    { img: mumSleeve, title: "Coffee table" },
    { img: mumSleeve2, title: "Coffee table" },
    { img: mumSleevePng, title: "Coffee table" },
    { img: rose, title: "Coffee table" },
    { img: roseHand, title: "Coffee table" },
    { img: snake, title: "Coffee table" },
    { img: snakePng, title: "Coffee table" },
    { img: snakeCard, title: "Coffee table" },
    { img: snakeMum, title: "Coffee table" },
    { img: snakePaint, title: "Coffee table" },
    { img: spider, title: "Coffee table" },
    { img: tiger, title: "Coffee table" },
  ];

  return (
    <>
      <Bio />
      <Box
        sx={{
          width: "75%",
          height: "100vh",
          overflowY: "scroll",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(item.img)}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <div className="work main-container">
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
