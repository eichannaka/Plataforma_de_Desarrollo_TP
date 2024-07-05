import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 text-center mt-4">
          <h2>Quiénes somos</h2>
          <p>
            En Kimochii nos dedicamos a brindar terapias orientales que promueven la salud física, mental y espiritual.
          </p>
          <p>
            Nuestro propósito es brindarte un espacio donde puedas experimentar la tranquilidad, la armonía y el bienestar que necesitas.
          </p>
          <p>
            ❤︎
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="../../public/img/about.jpg" alt="Kimochii" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 text-center">
          <img src="../../public/img/estudio_1.jpg" alt="Kimochii Studio" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 mt-4">
          <h2>Kimochii Studio</h2>
          <p>
            La palabra Kimochii es un término japonés 気持ち formado por dos kanjis: "Ki" (気 Energía vital, Fuerza vital, espíritu) y "mochi" (持ち tener. poseer). Se lo suele definir como "sentimiento, estado de ánimo, emoción". Nuestro Kimochii (気持ちいい) se explica como tener algo en la mente y el corazón, un estado de bien-estar, una sensación de estar bien consigo mismo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
