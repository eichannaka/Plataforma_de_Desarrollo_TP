import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container ">
      <div className="welcome-section">
        <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" />
        <h1>Bienvenidos a Kimochii Studio - Masajes y Terapias Orientales</h1>
      </div>
      <div className="therapy-section fondo-1">
        <div className="therapy-content">
          <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" height={150} />
          <h2>Shiatsu</h2>
          <p>
            Es una terapia manual, de origen japonés que emplea presión en puntos específicos del cuerpo para aliviar la tensión y promover la relajación. Durante una sesión, el terapeuta aplica presión con las manos y los dedos a lo largo de los meridianos de energía del cuerpo, utilizando movimientos suaves y técnicas de estiramiento.
            <br /><br />
            Duración: 60 minutos
          </p>
        </div>
        <img src="../../../../public/img/shiatsu.jpg" alt="Shiatsu" className="therapy-image" />
      </div>
      <div className="therapy-section fondo-2 p-1">
        <img src="../../../../public/img/Digitopuntura.jpg" alt="Dígitopuntura" className="therapy-image" />
        <div className="therapy-content">
          <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" height={150} />
          <h2>Dígitopuntura</h2>
          <p>
            Es una terapia que utiliza la presión de los dedos, las manos y codos, en puntos específicos del cuerpo. Su estimulación puede aliviar el dolor, mejorar la circulación y promover la relajación del cuerpo. A diferencia del Shiatsu, se trabaja en silla ergonómica.
            <br /><br />
            Duración: 45 minutos
          </p>
        </div>
      </div>
      <div className="therapy-section fondo-1">
        <div className="therapy-content">
          <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" height={150} />
          <h2>Reflexiologia</h2>
          <p>
            Es una terapia manual, de origen japonés que emplea presión en puntos específicos del cuerpo para aliviar la tensión y promover la relajación. Durante una sesión, el terapeuta aplica presión con las manos y los dedos a lo largo de los meridianos de energía del cuerpo, utilizando movimientos suaves y técnicas de estiramiento.

            <br /><br />
            Duración: 30 minutos
          </p>
        </div>
        <img src="../../../../public/img/reflexiologia.jpg" alt="Shiatsu" className="therapy-image" />
      </div>
      <div className="therapy-section fondo-2 p-1">
        <img src="../../../../public/img/cupping.jpg" alt="Dígitopuntura" className="therapy-image" />
        <div className="therapy-content">
          <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" height={150} />
          <h2>Cupping/Ventosas</h2>
          <p>
            Es una terapia que utiliza la presión de los dedos, las manos y codos, en puntos específicos del cuerpo. Su estimulación puede aliviar el dolor, mejorar la circulación y promover la relajación del cuerpo. A diferencia del Shiatsu, se trabaja en silla ergonómica.

            <br /><br />
            Duración: 30 minutos
          </p>
        </div>
      </div>
      <div className="therapy-section fondo-1">
        <div className="therapy-content">
          <img src="../../../../public/img/Logo-Kimochii.png" alt="Kimochii Studio" className="logo" height={150} />
          <h2>Moxabustión</h2>
          <p>
            Es una terapia manual, de origen japonés que emplea presión en puntos específicos del cuerpo para aliviar la tensión y promover la relajación. Durante una sesión, el terapeuta aplica presión con las manos y los dedos a lo largo de los meridianos de energía del cuerpo, utilizando movimientos suaves y técnicas de estiramiento.

            <br /><br />
            Duración: 30 minutos
          </p>
        </div>
        <img src="../../../../public/img/moxabustion.jpg" alt="Shiatsu" className="therapy-image" />
      </div>
    </div>
  );
};

export default Home;
