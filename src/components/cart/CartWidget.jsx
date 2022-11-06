import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <div className="CartWidgetContainer">
      <div>        
          {totalItems() >= 1 ? (
            <p className="add_count"> {totalItems() }</p>
             ) : ( <p className="add_count_hidden"></p> 
          )}
        </div>
      </div>
    </>
  );
};

export default CartWidget;
