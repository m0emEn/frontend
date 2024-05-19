import { Link } from "react-router-dom";
import Berks from "../Components/Berks";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsSlider from "../Components/ProductsSlider";
import banner from "../assets/banner.jpeg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.product);
  const productSlider = products.filter((item) => item.category === "femme");
  const filteredProducts = products.filter((item) => item.category === "anime");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <Berks />
      <ProductsContainer
        name={"productsShow"}
        initialProducts={productSlider}
        title="Promotion Jogging femmes"
      />
      <ProductsSlider products={productSlider} />
      <ProductsContainer
        name={"products"}
        initialProducts={filteredProducts}
        title="Oversized Hoodie Anime"
      />
      <div className="btn-container">
        <Link to="/products/anime">
          <div className="btn-black">Voir Plus</div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
