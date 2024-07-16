import './Register.css'
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

function Register() {
  return (
    <>
    <body>
    <div class="register-conteiner">
      <form>
      <div class="register-border">

        <h2>Formulario de registro</h2>

        <label className="register-label" for="nombre">Nombre</label>
        <input className="register-input" type="text" placeholder="ingrese su nombre" required="true"/>

        <label className="register-label" for="apellido">Apellido</label>
        <input className="register-input" type="text" placeholder="ingrese su apellido" required="true"/>

        <label className="register-label" for="email">Email</label>
        <input className="register-input" type="email" name="email" placeholder="Ingrese su correo electrónico" required="true"></input>

        <label className="register-label" for="telefono">Teléfono</label>
        <input className="register-input" type="text" placeholder="ingrese su teléfono" required="true"/>

        <label className="register-label" for="contraseña">Contraseña</label>
        <input className="register-input" type="password" placeholder="ingrese su contraseña" required="true"/>

        <label className="register-label" for="contraseña">Contraseña</label>
        <input className="register-input" type="password" placeholder="reingrese su contraseña" required="true"/>

        <input class="buttom-send-register"type="submit" value="Enviar"></input>

      </div>
      </form>
      </div>
      <footer className="footer"> <TiArrowBack /> <Link to="/">Volver</Link></footer>
    </body>
    </>

  )
}

export default Register
