import "../styles/globals.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { LanguageProvider } from "../context/lenguage/LenguageState";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1000,
    });
  }, []);
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
