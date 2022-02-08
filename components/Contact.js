import { useContext } from "react";
import LenguageState from "../context/lenguage/LenguageState";
import { useForm } from "../hooks/useForm";
import Form from "./Form";
import { contact } from "../auxiliary/data";
import FormLoading from "./FormLoading";

export default function Contact() {
  const { language } = useContext(LenguageState);
  let l;
  language === "es" ? (l = contact.es) : (l = contact.in);

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{15,255}$/;
    let regexPhone = /^[1-9]\d{9}$/;

    if (!form.name.trim()) {
      errors.name = l.inputName.messageError1;
    } else if (!regexName.test(form.name.trim())) {
      errors.name = l.inputName.messageError2;
    }

    if (!form.email.trim()) {
      errors.email = l.inputEmail.messageError1;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = l.inputEmail.messageError2;
    }

    if (!form.phone.trim()) {
      errors.phone = l.inputPhone.messageError1;
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = l.inputPhone.messageError2;
    }

    if (!form.message.trim()) {
      errors.message = l.inputMessage.messageError1;
    } else if (!regexComments.test(form.message.trim())) {
      errors.message = l.inputMessage.messageError2;
    }

    return errors;
  };

  const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const { data, errors, loading, handle, handleBlur, submit } = useForm(
    initialData,
    validationsForm
  );

  return (
    <>
      <section id="contact" className="w-full bg-repeat bg-body py-16 ">
        <div className="mx-auto my-auto flex items-center justify-center flex-col lg:flex-row">
          <div className="text-center w-11/12 lg:w-3/6 xl:w-7/12 mt-10">
            <h1 className="font-medium text-4xl sm:text-5xl text-bar uppercase">
              ¡{l.title}!
            </h1>
            <p className="leading-relaxed  w-10/12 mx-auto text-bar pt-3">
              {l.description}:
            </p>
            <img
              src="/assets/contact.svg"
              alt="contact"
              className="w-10/12 sm:w-7/12 mx-auto"
            ></img>
          </div>
          {loading ? (
            <FormLoading />
          ) : (
            <Form
              data={data}
              errors={errors}
              handle={handle}
              handleBlur={handleBlur}
              submit={submit}
            />
          )}
        </div>
      </section>
    </>
  );
}
