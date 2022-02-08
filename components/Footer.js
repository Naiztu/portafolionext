import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-black to-slate-900  h-24 flex items-center justify-center">
      <p className="text-white">{"© 2022 by Rico's Sofware"} </p>
      <p className="text-white  font-bold text-3xl">
     
        <a href="https://github.com/Naiztu">
          <FontAwesomeIcon className="ml-4" icon={faGithub} />
        </a>
        <a href="https://paypal.me/Naiztu?country.x=MX&locale.x=es_XC">
          <FontAwesomeIcon className="ml-4" icon={faPaypal} />
        </a>
      </p>
    </div>
  );
}
