import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import Product from "../Components/Product";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProduct } from "../redux/actions/productsActions";
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {loading ? (
        <div>hello</div>
      ) : (
        product && (
          <>
            <Breadcrumbs name={product.name} />
            <Product product={product} />
          </>
        )
      )}
    </>
  );
};

export default ProductPage;
