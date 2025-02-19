import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeritageCard.css"; // Import CSS for styling

const heritageSites = [
  {
    name: "Dharmapuri Falls",
    description: "A breathtaking waterfall in Tamil Nadu.",
    image: "/images/dharmapuri.jpg",
  },
  {
    name: "Brihadeeswara Temple",
    description: "A UNESCO World Heritage site in Thanjavur.",
    image: "/images/tanjore.jpg",
  },
  {
    name: "Meenakshi Temple",
    description: "A historic Dravidian-style temple in Madurai.",
    image: "/images/meenakshi.jpg",
  },
  {
    name: "Shore Temple",
    description: "An ancient temple in Mahabalipuram.",
    image: "/images/shore.jpg",
  },
];

const HeritageCard = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="heritage-card-carousel"
    >
      {heritageSites.map((site, index) => (
        <SwiperSlide key={index}>
          <div
            className="card-slide"
            style={{ backgroundImage: `url(${site.image})` }}
          >
            <div className="card-content">
              <h2>{site.name}</h2>
              <p>{site.description}</p>
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeritageCard;
