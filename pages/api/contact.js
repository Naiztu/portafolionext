const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail", // true for 465, false for other ports
      auth: {
        user: "momoxjuarez@gmail.com", // generated ethereal user
        pass: "Zapato25", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail(
      {
        from: "Remitente",
        to: "peperiiko25@gmail.com",
        subject: "Enviado",
        text: `¡Tienes un mensaje de ${req.body.name}!\n\nSu mensaje es: ${req.body.message}\n\nTe puedes contactar con el mediante:\n\t Telefono: ${req.body.phone}\n\t Correo: ${req.body.email}`,
      },
      function (error) {
        if (error) {
          res.status(200).json({ success: "false" });
        } else {
          res.status(200).json({ success: "true" });
        }
      }
    );
  } else {
    res.status(404).json({ Hi: "What are you looking for here?" });
  }
}
