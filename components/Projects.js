import Card from "./Card";
import {listProyects} from "../auxiliary/data";
import { useContext } from "react";
import LenguageState from "../context/lenguage/LenguageState";

export default function Projects() {
  const { language } = useContext(LenguageState);
 
  return (
    <div className="w-full mt-24">
      <div className=" w-11/12 flex my-20 mx-auto">
        <h1
          className="title"
          data-aos="fade-up"
        >
          {language==="es"?"Proyectos":"Projects"}
        </h1>
      </div>
      <div className="w-11/12 mx-auto flex flex-wrap items-center justify-center sm:w-full">
        {listProyects.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={language==="es"?item.title.es:item.title.in}
            descrip={language==="es"?item.description.es:item.description.in}
            anim={item.anim}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
