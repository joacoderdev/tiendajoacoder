import "./style.css";

import { NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-lg-top">
        <div className="container-fluid container_fluid">
          <NavLink to={"/"}>
            <div className="navbar_brand" style={{ display: "flex" }}>              
              <h1 className="title_app">JOACODER</h1>
            </div>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink to={"/aboutUs"}>
                  <div className="nav-link">NOSOTROS</div>
                </NavLink>
              </li>

              <div className="dropdown">
                <div
                  className="nav-item me-3 nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTOS
                </div>

                <ul className="dropdown-menu">
                  <NavLink to={"/products"}>
                    <li className="dropdown-item"> Todos </li>{" "}
                  </NavLink>
                  <NavLink to={"/category/juegos"}>
                    <li className="dropdown-item"> Juegos </li>
                  </NavLink>
                  <NavLink to={"/category/componentes"}>
                    <li className="dropdown-item"> Componentes </li>
                  </NavLink>
                  <NavLink to={"/category/perifericos"}>
                    <li className="dropdown-item"> Perifericos </li>
                  </NavLink>
                </ul>
              </div>
              <li className="nav-item me-3">
                <NavLink to={"/methods"}>
                  <div className="nav-link">METODOS</div>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca algo aqui..."
                aria-label="Search"
              />
              <NavLink to={"/products"}>
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
              </NavLink>
            </form>
            <NavLink to={"/cart"}>
            <CartWidget />
          </NavLink>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
