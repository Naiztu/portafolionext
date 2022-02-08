import { useContext } from "react";
import { contact } from "../auxiliary/data";
import LenguageState from "../context/lenguage/LenguageState";

export default function FormLoading() {
  const { language } = useContext(LenguageState);
  let l;
  language === "es" ? (l = contact.es) : (l = contact.in);
  return (
    <div className="w-full lg:w-3/6 xl:w-5/12 mb-10 mt-10 ">
      <div className="animate-pulse w-9/12 bg-gray-50 px-8 py-7 flex flex-col lg:ml-auto rounded-md mx-auto shadow-md hover:drop-shadow">
        <div className="relative mb-4">
          <label className="label text-gray-400">{l.inputName.label}</label>
          <div className="load h-10" />
        </div>
        <div className="relative mb-4">
          <label className="label text-gray-400">{l.inputEmail.label}</label>
          <div className="load h-10" />
        </div>
        <div className="relative mb-4">
          <label className="label text-gray-400">{l.inputPhone.label}</label>
          <div className="load h-10" />
        </div>
        <div className="relative mb-4">
          <label className="label text-gray-400">{l.inputMessage.label}</label>
          <div className="load h-32" />
        </div>
        <div className="mt-1 loader flex items-center justify-center bg-bar/60 h-12 rounded-md space-x-3">
          <div className="w-3 h-3 bg-gray-800/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gray-800/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gray-800/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
