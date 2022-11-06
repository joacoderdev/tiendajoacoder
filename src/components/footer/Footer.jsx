import "./style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="container text-center m-3">
        <div className="footer_row row row_nav">
          <div className="col align-self-center">
          <NavLink to={"/products"}>
            <p>Revisa la página y realiza una compra!</p>
            </NavLink>
            <h5 className="p-2">Productos por categorias</h5>            
          </div>
          <div className="col align-self-center">
            <h4>JOACODER</h4>
            <NavLink to={"/"}>
            <div className="logo-footer">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/003/655/133/small/j-letter-logo-icon-for-business-and-company-with-simple-black-and-white-dots-design-vector.jpg"
                alt=""
                width="90"
                className="d-inline-block align-text-top"
              />
            </div>
            </NavLink>
          </div>
          <div className="redes col align-self-center">
            <h5>Podes revisar nuestras redes sociales donde te podras comunicar con nosotros</h5>
            <p>Demas consultas o preguntas al privado</p>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
