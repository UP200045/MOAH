import nodemailer from 'nodemailer';

const sendEmail = async (email,name) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'diaz.cesar.1am@gmail.com',
      pass: 'vwdzvllvbrxqenlv',
    },
  });

  const mailOptions = {
    from: 'Remitente <diaz.cesar.1am@gmail.com>',
    to: email,
    subject: 'Bienvenido(a) a MOAH ',
    text: `Hola ${name}, \n\nBienvenido(a) a MOAH. ¡Nos complace tenerte como parte de nuestra comunidad!`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
    return { success: true };
  } catch (error) {
    console.log('Error al enviar el correo:', error);
    return { success: false, error: error.message };
  }
};

export default sendEmail;
