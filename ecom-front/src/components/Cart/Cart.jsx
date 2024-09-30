import "./Cart.css";
export default function Cart({ cart, deletecart }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product._id}>{product.titre}</li>
        ))}
        <h1>
          Total : {cart.reduce((total, product) => total + product.prix, 0)}
        </h1>

        {cart.length === 0 && <p>Votre panier est vide</p>}
        <button onClick={deletecart} className="bg-red-500 p-2 rounded">
          Delete
        </button>
      </ul>
    </div>
  );
}
