import deliveryIcon from "../assets/icons/delivery.apng";
import qualityIcon from "../assets/icons/quality.apng";
import returnIcon from "../assets/icons/return.apng";
const Berks = () => {
  return (
    <div className="container">
      <div className="berks">
        <div className="berk">
          <img src={deliveryIcon} alt="icon" />
          <div>
            <h1>LIVRAISON EN 24/48 H</h1>
            <p>A domicile sur toute la tunisie</p>
          </div>
        </div>
        <div className="berk">
          <img src={qualityIcon} alt="icon" />
          <div>
            <h1>QUALITÉ GARANTIE</h1>
            <p>100% produits authentiques</p>
          </div>
        </div>
        <div className="berk">
          <img src={returnIcon} alt="icon" />
          <div>
            <h1>RETOUR ET ECHANGE</h1>
            <p>sous 10 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berks;
