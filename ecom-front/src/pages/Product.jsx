import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {product.titre}
      <h1>{product.description}</h1>
    </div>
  );
}
