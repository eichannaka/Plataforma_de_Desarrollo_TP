import React from 'react';
import './Contact.css'; // Asegúrate de crear este archivo CSS para los estilos

const Contact = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h2>Contacto</h2>
        <label>
          Asunto:
          <input type="text" name="subject" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <div className="company-info">
        <img src="../../../../public/img/Logo-Kimochii.png" alt="Logo" className="company-logo" />
        <p>Horario de atención</p>
        <p>Lunes a Viernes - 9 a 21hs</p>
        <p>Sábados - 9 a 15hs</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.550873161921!2d-58.4361884!3d-34.590229199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58bb7287ca3%3A0x65c845b20424e5a5!2sAv.%20C%C3%B3rdoba%20%26%20Uriarte%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1720136693881!5m2!1ses-419!2sar" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
