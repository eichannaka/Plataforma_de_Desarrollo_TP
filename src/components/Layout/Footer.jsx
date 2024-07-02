import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section class="container__footer">
            <footer class="container__footer">
                <div class="logo__footer">
                    <img src="../../public/img/Kimochii_logo.jpg" alt="logo" height="150px" />
                </div>
                <div class="redes__footer">
                    <a href="https://www.instagram.com/kimochii.studio/" target="_BLANK"><i
                        class="bi bi-facebook icon__redes"></i></a>
                    <a href="https://www.instagram.com/kimochii.studio/" target="_BLANK"><i
                        class="bi bi-instagram icon__redes"></i></a>
                    <a href="https://www.instagram.com/kimochii.studio/" target="_BLANK"><i
                        class="bi bi-youtube icon__redes"></i></a>
                </div>
                <h4>
                    © 2024 Kimochii Studio - Todos los derechos reservados.
                </h4>
            </footer>
        </section>
    )
}

export default Footer