import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="container__footer">
            <footer className="container__footer">
                <div className="logo__footer">
                    <img src="/img/Logo-Kimochii.png" alt="logo" height="200px" />
                </div>
                <div className="redes__footer">
                    <a href="https://www.instagram.com/kimochii.studio/" target="_blank" rel="noopener noreferrer" >
                        <i className="bi bi-facebook icon__redes"></i>
                    </a>
                    <a href="https://www.instagram.com/kimochii.studio/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram icon__redes"></i>
                    </a>
                    <a href="https://www.instagram.com/kimochii.studio/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-youtube icon__redes"></i>
                    </a>
                </div>
                <h4 > 
                    © 2024 Kimochii Studio - Todos los derechos reservados.
                </h4>
            </footer>
        </section>
    );
}

export default Footer;
