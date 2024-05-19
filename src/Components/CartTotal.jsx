import { useSelector } from "react-redux";

const CartTotal = () => {
  const { shipping, subtotal } = useSelector((state) => state.cart);

  return (
    <table className="cartTotal">
      <thead>
        <tr>
          <th>Cart Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sous-Total</td>
          <td>{`${subtotal}`}DT</td>
        </tr>
        <tr>
          <td>Livraison</td>
          <td>{`${shipping}`}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{`${subtotal + shipping}DT`}</td>
        </tr>
        <tr>
          <td colSpan={2} className="btnCol">
            <button className="btn-black">Confirmer Commande</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTotal;
