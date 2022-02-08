import { useContext } from "react";
import { contact } from "../auxiliary/data";
import LenguageState from "../context/lenguage/LenguageState";

export default function Form({ data, errors, handle, handleBlur, submit }) {
  const { language } = useContext(LenguageState);
  let l;
  language === "es" ? (l = contact.es) : (l = contact.in);

  return (
    <div className="w-full lg:w-3/6 xl:w-5/12 mb-10 mt-10 ">
      <div className="w-9/12 bg-gray-50 px-8 py-7 flex flex-col lg:ml-auto rounded-md mx-auto shadow-md hover:drop-shadow">
        <div className="relative mb-4">
          <label className="label">{l.inputName.label}</label>
          <input
            type="text"
            id="name"
            onChange={handle}
            onBlur={handleBlur}
            value={data.name}
            name="name"
            className="input h-10"
            placeholder={l.inputName.holder}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mb-4">{errors.name}</p>
        )}
        <div className="relative mb-4">
          <label className="label">{l.inputEmail.label}</label>
          <input
            type="email"
            id="email"
            onChange={handle}
            onBlur={handleBlur}
            value={data.email}
            name="email"
            className="input h-10"
            placeholder={l.inputEmail.holder}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mb-4">{errors.email}</p>
        )}
        <div className="relative mb-4">
          <label className="label">{l.inputPhone.label}</label>
          <input
            type="email"
            id="phone"
            onChange={handle}
            onBlur={handleBlur}
            value={data.phone}
            name="phone"
            className="input h-10"
            placeholder={l.inputPhone.holder}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mb-4">{errors.phone}</p>
        )}
        <div className="relative mb-4">
          <label className="label">{l.inputMessage.label}</label>
          <textarea
            id="message"
            name="message"
            onChange={handleBlur}
            onBlur={handleBlur}
            value={data.message}
            rows="3"
            className="input h-32"
          >
            {l.inputMessage.holder}
          </textarea>
        </div>
        {errors.message && (
          <p className="text-red-500 text-xs mb-4">{errors.message}</p>
        )}
        <button
          disabled={!(Object.keys(errors).length === 0)}
          className="submit"
          onClick={submit}
        >
          {l.submit}
        </button>
      </div>
    </div>
  );
}
