import "./style.css";
import Contact from "../../components/contact/Contact";

const ContactContainer = () => {
  return (
    <>
      <div className="contactcontainer">
        <h1 className="elh1"> HABLA CON NOSOTROS!</h1>
        <h4 className="elh4">
          Aqui es donde transmites tus dudas y haces las preguntas que necesites
        </h4>
        <Contact />
        <h4 className="elh4">
          Aunque este es ejemplo de como seria un formulario de contacto, nada
          de lo que escribas sera guardado
        </h4>
        <h2 className="elh2"> Asique adelante! testea sin miedo!</h2>
      </div>
    </>
  );
};

export default ContactContainer;
