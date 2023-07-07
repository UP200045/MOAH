import sendEmail from '../../utils/emailSender';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name } = req.body; 
    const result = await sendEmail(email, name); 
    if (result.success) {
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } else {
      res.status(500).json({ error: result.error });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
