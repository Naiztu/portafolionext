export const about = {
  es: {
    title: "Un poco sobre mi",
    description:
      "Actualmente soy estudiante del Tecnologico de Monterrey en Ingeneria en Tecnologias Computacionales. Tengo 20 años y en mis tiempos libres me gusta jugar videojuegos, ver futbol ó programar. Me gusta escuchar todo el tiempo musica.",
  },
  in: {
    title: "About me",
    description:
      "I am currently a student at the Tecnologico de Monterrey in Engineering in Computer Technologies. I am 20 years old and in my free time I like to play video games, watch soccer or program. I like to listen to music all time.",
  },
};

export const navbar = {
  in: {
    home: "Home",
    info: "About",
    contact: "Contact",
  },
  es: {
    home: "Inicio",
    info: "Info",
    contact: "Contacto",
  },
};

export const listTechs = [
  {
    id: 1,
    alt: "react",
    url: "./images/react.png",
  },
  {
    id: 2,
    alt: "html",
    url: "./images/html.png",
  },
  {
    id: 3,
    alt: "js",
    url: "./images/js.png",
  },
  {
    id: 4,
    alt: "css",
    url: "./images/css.png",
  },
  {
    id: 5,
    alt: "tailwind",
    url: "./images/tailwind.png",
  },
  {
    id: 6,
    alt: "node.js",
    url: "./images/njs.png",
  },
  {
    id: 7,
    alt: "c++",
    url: "./images/cpp.png",
  },
  {
    id: 8,
    alt: "java",
    url: "./images/java.png",
  },
];

export const listProyects = [
  {
    id: 1,
    image: "./images/prove.jpg",
    title: { es: "La Proveedora", in: "The provider" },
    description: {
      es: "Sistema diseñado para la administración de un comercio dedicado a la venta de utensilios para la cocina, entre otros.",
      in: "System designed for the administration of commerce dedicated to the sale of kitchen utensils, among others.",
    },
    anim: "flip-left",
    link: "https://github.com/Naiztu/proveedora",
  },
  {
    id: 2,
    image: "./images/uni.jpg",
    title: { es: "Universidad", in: "University" },
    description: {
      es: "Sistema diseñado para la administración de los datos del personal de una universidad.",
      in: "System designed for the administration of personnel of a university.",
    },
    anim: "flip-right",
    link: "https://github.com/Naiztu/Proyecto",
  },
  {
    id: 3,
    image: "./images/python.jpg",
    title: { es: "Filtros Python", in: "Python filters" },
    description: {
      es: "Codigo dedicado a la aplicación de filtros con python",
      in: "Code dedicated to applying filters with python",
    },
    anim: "flip-left",
    link: "https://github.com/Naiztu/Laboratorio_A01707404",
  },
];

export const contact = {
  es: {
    title: "Contactame",
    description: "Hablemos un poco de como podemos realizar tus ideas realidad",
    inputName: {
      label: "Nombre",
      holder: "Nombre completo",
      messageError1: "El campo 'Nombre' es requerido",
      messageError2:
        "El campo 'Nombre' sólo acepta letras y espacios en blanco",
    },
    inputEmail: {
      label: "Correo",
      holder: "micorreo@ejemplo.com",
      messageError1: "El campo 'Correo' es requerido",
      messageError2: "El campo 'Correo' es incorrecto",
    },
    inputPhone: {
      label: "Telefono",
      holder: "Numero de Telefono",
      messageError1: "El campo 'Telefono' es requerido",
      messageError2: "El campo 'Telefono' debe ser numerico y tener 10 digitos",
    },
    inputMessage: {
      label: "Mensaje",
      holder: "",
      messageError1: "El campo 'Mensaje' es requerido",
      messageError2:
        "El campo 'Mensaje' no debe tener menos de 15 caracteres o exceder los 255 caracteres",
    },
    submit: "Enviar",
  },

  in: {
    title: "Contact me",
    description: "Tell me about your ideas and how we can create them",
    inputName: {
      label: "Name",
      holder: "Full name",
      messageError1: "The field 'Name' is required",
      messageError2: "The field 'Name' requires only letters",
    },
    inputEmail: {
      label: "Email",
      holder: "myemail@example.com",
      messageError1: "The field 'Email' is required",
      messageError2: "The field 'Email' is incorrect",
    },
    inputPhone: {
      label: "Phone",
      holder: "Number Phone",
      messageError1: "The field 'Phone' is required",
      messageError2:
        "The field 'Phone' requires only numbers and must have 10 digits",
    },
    inputMessage: {
      label: "Message",
      holder: "",
      messageError1: "The field 'Message' is required",
      messageError2:
        "The field 'Message' must have a minimum of 10 characters and a maximum of 255",
    },
    submit: "Submit",
  },
};
