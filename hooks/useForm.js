import { useContext, useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import LenguageState from "../context/lenguage/LenguageState";

export const useForm = (initialData, validateForm) => {
  const initialError = {
    initial: "error main",
  };

  const { language } = useContext(LenguageState);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(initialError);
  const [data, setData] = useState(initialData);
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleBlur = (e) => {
    handle(e);
    setErrors(validateForm(data));
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true, sendMail());
  };

  async function sendMail() {
    try {
      const res = await Axios.post("/api/contact", data);

      res.status;
      res.data.success === "true"
        ? swal(
            language === "es" ? "¡Enviado!" : "¡Sent!",
            language === "es"
              ? "Pronto estaremos en contacto"
              : "I'll contact you soon",
            "success"
          ).then(() => {
            setData(initialData);
            setErrors(initialError);
            setLoading(false);
          })
        : swal(
            language === "es" ? "¡No puede ser!" : "¡Can not be!",
            language === "es"
              ? "No se pudo enviar los datos correctamente"
              : "The data could not be sent correctly",
            "error"
          ).then(() => {
            setLoading(false);
          });
    } catch (exception) {
      swal(
        language === "es" ? "¡No puede ser!" : "¡Can not be!",
        language === "es"
          ? "No se pudo enviar los datos correctamente"
          : "The data could not be sent correctly",
        "error"
      ).then(() => {
        setLoading(false);
      });
    }
  }
  return {
    data,
    errors,
    loading,
    handle,
    handleBlur,
    setErrors,
    submit,
  };
};
