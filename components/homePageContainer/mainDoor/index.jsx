import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePageMainDoorContainer = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };
  return (
    <div className="w-full h-96 overflow-hidden">
      <Slider {...settings} className="inline-block w-auto h-5/6">
        <div className="w-screen h-full">
          <div
            className="absolute top-0 w-11/12 h-96 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          ></div>
        </div>
        <div className="w-screen">
          <div
            className="absolute top-0 w-full h-96 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.discordapp.com/attachments/433506654009425921/913410714356555796/testImage.jpg')",
            }}
          >
            두번째 슬라이드
          </div>
        </div>
        <div className="w-full">세번째 슬라이드</div>
      </Slider>
    </div>
  );
};

export default HomePageMainDoorContainer;
