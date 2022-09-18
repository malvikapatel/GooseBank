import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "antd";

export default function ShopCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const images = [
    "https://images-na.ssl-images-amazon.com/images/I/31cc8VfCA-L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61atpxsndQL.jpg",
    "https://assets.grandandtoy.com/graphics/1500x1500/15/153193.jpg",
  ];
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={100000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images.slice(0, 5).map(image => {
        return (
          <div>
            <img style={{ width: "100%", height: "100%" }} src={image} />
            <Button style={{ marginTop: 16 }}>Buy</Button>
          </div>
        );
      })}
    </Carousel>
  );
}
