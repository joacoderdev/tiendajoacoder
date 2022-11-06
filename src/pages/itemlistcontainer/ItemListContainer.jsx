import "./style.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import {db} from '../../services/firebaseConfig'
import {  
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [itemList, setitemList] = useState([]);
  const [loader, setLoader] = useState(true);

  const getProducts = () => {    
    const querySnapshot = collection(db, "product");

    if (category) {
      const queryFilter = query(
        querySnapshot,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setitemList(data);
      });
    } else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setitemList(data);
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);


  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500)
  })
  
  return (
    <div className="item_list_container">
        {loader ? <Loader/> : <ItemList lista={itemList} /> }
    </div>   
  );
};

export default ItemListContainer;
