import React from 'react';
import '../Css/home.css';
import perfil from '../assets/fotoP.png';

const Home = () => {
    return (
        <div>
            {/* <!-- seccion de presentacion --> */}
            <section id="sobreMI">
                {/* <!-- presentacion --> */}
                <div class="presentacion">
                    <img src={perfil} width="150" alt=""/>
                    <h2>Bienvenido a mi Portfolio</h2>
                </div>
                <div>
                    
                    <p>¡Hola! Mi nombre es Angel Pastrana. Actualmente soy estudiante de la Tecnicatura en Programación, y
                        anteriormente cursé un año en Ingeniería en Sistemas, lo que me dio una sólida base en lógica y
                        pensamiento computacional.
                    </p>
                    <p>Hoy en día, trabajo como vendedor en una casa de electricidad, donde he aprendido a desenvolverme en
                        el trato con clientes, mantener la organización y resolver problemas prácticos de forma eficiente.
                    </p>
                    <p>Estoy construyendo mi camino como desarrollador y este portfolio es una muestra de lo que estoy
                        aprendiendo y creando. ¡Gracias por visitar!</p>
                </div>
                {/* <!-- Hobby --> */}
                <div>
                    <h2>Hobby</h2>
                    <div>
                        <ul>
                            <li><a href="https://www.younextbike.com/ciclismo-de-montana-beneficios/" target="_blank">Andar
                                en Bicicleta</a></li>
                            <li><a href="https://motoblog.com/" target="_blank">El mundo de las motocicletas</a></li>
                            <li><a href="https://detailpark.com/cursos/" target="_blank">El detallado de vehículos</a></li>
                        </ul>
                    </div>
                </div>


            </section>
        </div>);
}



export default Home;