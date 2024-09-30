import { useEffect, useState } from "react";
import axios from "axios";
import cat from "../assets/cat.jpg";
import { Link } from "react-router-dom";
import Cart from "../components/Cart/Cart";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (cart) {
    console.log("hello");
  }
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            add to cart
          </button>
        </div>
      ))}
      {cart && <Cart cart={cart} deletecart={()=>setCart([])}></Cart>}
    </div>
  );
}
