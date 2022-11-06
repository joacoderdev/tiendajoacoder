import "./style.css";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);

  const db = getFirestore();
  const getProducts = () => {
    const queryDoc = doc(db, "product", id);

    getDoc(queryDoc)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500)
  })
  
  return (
    <div>       
       {loader ? <Loader /> : <ItemDetail product={product} />}
    </div>
  );
};
export default ItemDetailContainer;
