import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "antd";

export default function RewardsCarousel(props) {
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
    "https://i5.walmartimages.com/asr/06b9e809-4f79-4cc3-bbef-652da54421c9.ba1ae7a8abbd4721b8fbc820df151947.png",
    "https://cdn11.bigcommerce.com/s-phjrc3z910/images/stencil/1280x1280/products/9480/22970/51EtRzklkbL__89022.1587505316.jpg?c=2",
    "https://i5.walmartimages.com/asr/03a9a163-3b3f-4b3c-9838-11ccdc1aa6f5.03e054596de7ef9d7c4f0d89fce6c750.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
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
