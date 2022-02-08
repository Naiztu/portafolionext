import { useContext } from "react";
import { about } from "../auxiliary/data";
import LenguageState from "../context/lenguage/LenguageState";
export default function About() {
  const { language } = useContext(LenguageState);
  let data;
  language === "es" ? (data = about.es) : (data = about.in);
  return (
    <div className="w-full">
      <section id="about"></section>
      <br />
      <div className=" w-11/12 flex my-20 mx-auto" data-aos="fade-up">
        <p className="title">{data.title}</p>
      </div>

      <div
        className="flex flex-col md:flex-row my-10 w-10/12 mx-auto  rounded-3xl overflow-hidden bg-white shadow-black shadow-md"
        data-aos="flip-left"
      >
        <div className="w-full flex items-center justify-center md:w-8/12">
          <p className=" text-justify md:text-xl my-10 w-10/12">
            {data.description}
          </p>
        </div>
        <img
          className="w-full md:w-4/12 object-cover"
          alt="Angel Rico"
          src="./images/perfil.jfif"
        />
      </div>
    </div>
  );
}
