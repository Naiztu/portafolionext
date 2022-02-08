import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import About from "../components/About";
import Techs from "../components/Techs";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import LenguageState from "../context/lenguage/LenguageState";
import { useContext, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [first, setFirst] = useState(true);
  const { language, setLanguage } = useContext(LenguageState);

  return (
    <div>
      <Head>
        <title>Portafolio Angel Rico</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className=" w-full h-screen bg-no-repeat bg-main bg-cover bg-fixed bg-center pt-16 px-6 shadow-2xl">
        <div className="container mx-auto flex flex-col justify-center h-full">
          <div className=" text-4xl sm:text-6xl text-white font-extrabold">
            {language === "es"
              ? "¡Hola! Me llamo Ángel y"
              : "¡Hi! My name is Ángel and "}
            <br />
            {language === "es" ? "soy" : "I am "}

            <span className="text-4xl sm:text-6xl text-sky-600 font-extrabold ml-2">
              <Typewriter
                words={
                  language === "es"
                    ? ["Programador", "Desarrollador", "Estudiante"]
                    : ["Programmer", "Developer", "Student"]
                }
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-body bg-repeat">
        <About />
        <Techs />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <button
        className=" opacity-80 hover:opacity-100 mb-2 mr-2 uppercase w-20 h-20 rounded-full bg-bar text-white  translate-x-12 fixed bottom-0 right-0 hover:translate-x-0 text-3xl font-bold transition ease-in-out duration-1000 shadow-white shadow-sm"
        onClick={() => {
          language === "es" ? setLanguage("in") : setLanguage("es");
          setFirst(false);
        }}
      >
        {first && (
          <span className="animate-ping absolute inline-flex h-3 w-3 left-2 top-2 rounded-full bg-sky-400 opacity-75"></span>
        )}
        {first && (
          <span className="absolute inline-flex rounded-full h-3 w-3 top-2 left-2 bg-sky-500"></span>
        )}
        {language}
      </button>
    </div>
  );
}
