import { useEffect, useState } from "react";
import axios from "axios";
import cat from "../assets/cat.jpg";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={cat} alt="product" />
          </Link>
          <h1>{product.titre}</h1>
          <p>{product.description}</p>
          <p style={{ color: "red" }}>{product.prix} DA</p>
          <p>quantity : {product.quantite}</p>
        </div>
      ))}
    </div>
  );
}
