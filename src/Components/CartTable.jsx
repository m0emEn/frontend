import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
import {
  increaseCartItemQty,
  decreaseCartItemQty,
  cartItemRemoval,
} from "../redux/slices/cart";

const CartTable = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <table className="cartTable">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, i) => (
          <tr key={i}>
            <td className="product-col col">
              <div className="product-cart">
                <img src={item.image} alt="produit" />
                <div>
                  <p>{item.name}</p>
                  <p className="clrSize">
                    {`${item.color}`}
                    <span>{` ${item.size}`}</span>
                  </p>
                </div>
              </div>
            </td>
            <td className="price-col col">{item.price}DT</td>
            <td className="qty-col col">
              <div className="qtyControl">
                <div className="qtyBtn qtyDecr">
                  <button
                    className="decrBtn"
                    onClick={() =>
                      dispatch(
                        decreaseCartItemQty({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                  >
                    <TiMinus />
                  </button>
                </div>
                <div className="qtyValue">
                  <p>{item.qty}</p>
                </div>
                <div className="qtyBtn qtyIecr">
                  <button
                    className="decrItn"
                    onClick={() =>
                      dispatch(
                        increaseCartItemQty({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                  >
                    <MdAdd size={16} />
                  </button>
                </div>
              </div>
            </td>
            <td className="total-col col">
              {Number(item.price) * Number(item.qty)}DT
            </td>
            <td className="remove-col col">
              <IoMdClose
                color="#979797"
                cursor={"pointer"}
                onClick={() =>
                  dispatch(
                    cartItemRemoval({
                      id: item.id,
                      color: item.color,
                      size: item.size,
                    })
                  )
                }
              />
            </td>
          </tr>
        ))}

        {/* { <tr>
          <td className="product-col col">
            <div className="product-cart">
              <img src={img} alt="produit" />
              <p>Naruto X Sasuke T-shirt</p>
            </div>
          </td>
          <td className="price-col col">45DT</td>
          <td className="qty-col col">
            <QtyControl />
          </td>
          <td className="total-col col">45DT</td>
          <td className="remove-col col">
            <IoMdClose color="#979797" cursor={"pointer"} />
          </td>
        </tr>} */}
      </tbody>
    </table>
  );
};

export default CartTable;
