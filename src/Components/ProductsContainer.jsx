import Product from "./ProductCard";
const ProductsContainer = ({ name, initialProducts, title, filter }) => {
  return (
    <div className={name}>
      <h2 className="products-container-title">{title}</h2>
      <div className="container products-container">
        {initialProducts.map((item, i) => (
          <Product item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
