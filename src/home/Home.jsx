import './Home.css';
import { Link } from "react-router-dom";
import ListPrinter from '../components/listprinter';
import { useState, useEffect } from 'react';
import { LuLogIn } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";



function Home() {
  const [Relojes, setReloj] = useState([]);
  useEffect( () => {
    fetch("https://6695cd1b0312447373c015c8.mockapi.io/Relojes")
    .then((res) => res.json())
    .then((data) => setReloj(data));}, []);

  return (
    <>
    <body>
      <div class="content__border">

    <header>
      <nav class="navbar">
        <ul>
          
          <li class="navbar__item">
          <a href="" class="navbar__link">Pagina principal</a>
          </li>

          <li class="navbar__item">
          <Link to="/register">Registro</Link> <AiOutlineForm />
          </li>

          <li class="navbar__item">
          <Link to="/login">Iniciar Sesión</Link> <LuLogIn />
          </li>

        </ul>
      </nav>
    </header>   

    <h1>Relojes Elegantes (Compra y venta internacional)</h1>
      <div className='listPrinter'>
        {!Relojes.length ? ( <p> Error 404</p> ) :
        (Relojes.map((reloj) => (<ListPrinter key={reloj.id} {...reloj} />)))}

      </div>
      </div>
    </body>
    </>
  )
}

export default Home