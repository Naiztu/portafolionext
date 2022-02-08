import { useContext, useEffect, useRef, useState } from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import LenguageState from "../context/lenguage/LenguageState";
import {navbar} from "../auxiliary/data"

export default function Navbar() {
  let refNav = useRef();

  const { language } = useContext(LenguageState);
  let data;
  language === "es" ? (data = navbar.es) : (data = navbar.in);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const changeBackground = () => {
      setScrollY(window.scrollY);
        if (scrollY >= refNav.current.clientHeight) {
          refNav.current.className = "nav-activated";
        } else {
          refNav.current.className = "nav-desactivated";
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      removeEventListener("scroll",changeBackground)
    }
  }, [scrollY]);

  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  return (
    <>
      <header
        className="nav-desactivated"
        ref={refNav}
      >
        <div className="mb-0">
          < div
            className="cursor-pointer text-2xl no-underline text-white font-bold hover:text-blue-400"
            onClick={() => scroll.scrollToTop()}
          >
            <img src="/assets/logo.svg" alt="Angel Rico" className=" w-10 " />
          </ div>
        </div>
        <div>
          < span
            onClick={() => scroll.scrollToTop()}
            className=" cursor-pointer text-lg no-underline text-white font-bold hover:text-blue-500 ml-5"
          >
            {data.home}
          </ span>
          < Link
            to="about"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-lg no-underline text-white font-bold hover:text-blue-500 ml-5 shadow-2xl"
          >
            {data.info}
          </ Link>
          < Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-lg no-underline text-white font-bold hover:text-blue-500 ml-5 shadow-2xl"
          >
            {data.contact}
          </ Link>
        </div>
      </header>
    </>
  );
}
