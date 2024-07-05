import React from 'react';


const Home = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center p-3 text-white">
          <h1>Kimochii Studio</h1>
          <p>
            La palabra Kimochii es un término japonés 気持ち formado por dos kanjis:
            "Ki" (気 Energía vital, Fuerza vital, espíritu) y
            "mochi" (持ち tener. poseer).
            Se lo suele definir como "sentimiento, estado de ánimo, emoción".
            Nuestro Kimochii (気持ちいい) se explica como tener algo en la mente y el corazón, un estado de bien-estar, una sensación de estar bien consigo mismo.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="../../public/img/estudio_1.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../../public/img/estudio_2.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../../public/img/estudio_3.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


