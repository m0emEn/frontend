import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="productCard">
      <Link to={`/product/${item._id}`} className="productLink">
        <div className="product-media">
          <img src={item.mainImg} className="mainProduct" alt="produit" />
          {item.hoverImg && (
            <img src={item.hoverImg} className="hoverProduct" alt="produit" />
          )}
          {item.tag && <span>{item.tag}</span>}
        </div>
        <div className="product-description">
          <h4 className="product-name">{item.name}</h4>
          <div className="product-price">
            <h5>{item.newPrice} TND</h5>
            {item.oldPrice && <p>{item.oldPrice} TND</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
