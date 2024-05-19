import Breadcrumbs from "../Components/Breadcrumbs";
import CartTable from "../Components/CartTable";
import CartTotal from "../Components/CartTotal";

const CartPage = () => {
  return (
    <div className="container cart">
      <Breadcrumbs name={"cart"} />
      <div className="mainCart">
        <CartTable />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
