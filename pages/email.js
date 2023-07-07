import { useState } from 'react';

const EmailPage = () => {
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    try {
      const response = await fetch('/api/email', { method: 'POST' });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error al enviar el correo electrónico');
    }
  };

  return (
    <div>
      <h1>Envío de correo electrónico</h1>
      <button onClick={sendEmail}>Enviar correo</button>
      <p>{message}</p>
    </div>
  );
};

export default EmailPage;
