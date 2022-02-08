import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { listTechs } from "../auxiliary/data"
import LenguageState from "../context/lenguage/LenguageState";
import { useContext } from "react";

export default function Techs() {

  const { language } = useContext(LenguageState);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-11/12 flex my-20 mx-auto">
        <h1 className="title" data-aos="fade-up">
        {language==="es"?"Tecnologias que manejo":"Technologies that I use"}
          
        </h1>
      </div>
      <div className="w-11/12" data-aos="zoom-in-up" data-aos-duration="3000">
        <Slider className=" w-10/12  mx-auto" {...settings}>
          {listTechs.map((item) => (
            <div key={item.id} className="text-center">
              <img
                src={item.url}
                alt={item.alt}
                className="w-40 py-2 mx-auto my-5 transition ease-in-out duration-1000 hover:rotate-6 hover:scale-125"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
