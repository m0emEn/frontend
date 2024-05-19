import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import ProductsContainer from "../Components/ProductsContainer";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const CategoryProduct = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState("popularity");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const productData = products;
  let x = [];
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const sortProducts = () => {
    switch (filter) {
      case "newest":
        x = [...filteredProducts];
        x.sort((a, b) => a.id - b.id);
        setFilteredProducts(x);
        break;
      case "price-low":
        x = [...filteredProducts];
        x.sort((a, b) => a.newPrice - b.newPrice);
        setFilteredProducts(x);
        break;
      case "price-high":
        x = [...filteredProducts];
        x.sort((a, b) => b.newPrice - a.newPrice);
        setFilteredProducts(x);
        break;
      case "popularity":
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const filtered = productData.filter((item) => item.category === category);
    setFilteredProducts(filtered);
    sortProducts();
  }, [category, filter]);

  return (
    <>
      <div className="container categoryTitle">
        <div>
          <h1 className="cTitle">{category}</h1>
          <Breadcrumbs name={category} />
        </div>
        <div className="filter">
          <label>Trier Par:</label>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              sortProducts();
            }}
          >
            <option value="popularity">Les plus populaires</option>
            <option value="newest">Nouveaux produits</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
          </select>
        </div>
      </div>
      <ProductsContainer
        name={"products m-0"}
        initialProducts={filteredProducts}
        filter={filter}
        category={category}
      />
    </>
  );
};

export default CategoryProduct;
