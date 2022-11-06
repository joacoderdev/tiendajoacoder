import "./style.css";
import { Link } from "react-router-dom";

const SectionProducts = () => {
  return (
    <>
      <div className="item_product " style={{}}>
        <h2 className="item-title text-center"  data-aos="flip-down"> Nuestros productos </h2>
        <div className=" cardImgContainer col-12 col-sm-12 w-100 row">

          <div className="section_card card col-4  ">
            <img src="https://www.megatone.net/images/Articulos/zoom2x/69/MKT0048TTH.jpg" alt="perifericos" />
          </div>
          <div className="section_card card col-4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYd2BkLacedUjn47L9Y16ddm8omw0YTwNiCg&usqp=CAU" alt="componentes" />
          </div>
          <div className="section_card card col-4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RXBe6S67vtzkCzqbPKPNkwvQE09TO1cJI_GTEcdcildqOZnmUYk7uYLAK4kQ4OGbbEQ&usqp=CAU" alt="juegos" />
          </div>
        </div>
        <div className="card-description col-12 col-sm-12">
          <p className="text-center" data-aos="zoom-in-down">
          Aquí podrás ver todos los productos que tenemos para ofrecerte
          </p>
        </div>
        <div>
          <Link to={"/products"}>
            <div className="d-grid col-6 mx-auto mb-4">
              <button className="section_button btn btn-dark" type="button">
                ◅ VER MAS ▻
              </button>
            </div>
          </Link>
        </div>
      </div>

      <div className="separatorSection">
        <img
          src="https://www.gifsanimados.org/data/media/56/computadora-y-ordenador-imagen-animada-0178.gif"
          alt="gifSeparatorSection"
          style={{ width: "400px" }}
        />
      </div>

      <div className="item_product" style={{}}>
        <h2 className="item-title text-center"  data-aos="flip-down"> Metodos de Filtrado </h2>
        <div className="cardImgContainer col-12 col-sm-12 w-100 row">
          <div className="section_card card col-4  ">
            <img src="https://imag.malavida.com/mvimgbig/download-fs/gta-5-18022-9.jpg" alt="juegos" />
          </div>
          <div className="section_card card col-4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME8SLH1uYEzCLoH-v_72e2ckm-pvaHa6W3BuE4tRAxg1Gva7l1AwjuE5B1wfr4At-lVA&usqp=CAU" alt="componentes" />
          </div>
          <div className="section_card card col-4 ">
            <img src="https://tienda.starware.com.ar/wp-content/uploads/2021/09/mouse-gamer-programable-hsxj-j900-6d-usb-gamer-4000dpi-led-rgb-negro-2387-4185-5.jpg" alt="perifericos" />
          </div>
        </div>
        <div className="card-description col-12 col-sm-12">
          <p className="text-center" data-aos="zoom-in-down">
            “Contamos con una gran variedad de componentes, videojuegos, y perifericos, para que puedas ser un profesional de primer nivel!
          </p>
        </div>
        <div>
          <Link to={"/methods"}>
            <div className="d-grid col-6 mx-auto mb-4">
              <button className="section_button btn btn-dark" type="button">
                ◅ IR A VER ▻
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionProducts;
