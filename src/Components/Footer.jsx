import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className="footerSections">
        <div className="footer-section">
          <h3>Conditions générales d'utilisation</h3>
          <p>Conditions d'utilisation</p>
          <p>Politique de confidentialité</p>
          <p>Mentions légales</p>
          <p>Politique de retour</p>
        </div>
        <div className="footer-section">
          <h3>Service client</h3>
          <p>Aide & FAQ</p>
          <p>Retours & Échanges</p>
          <p>Service clientèle</p>
          <p>À propos de nous</p>
        </div>
        <div className="footer-section">
          <h3>Livraison et paiement</h3>
          <p>Frais de livraison</p>
          <p>Suivi de commande</p>
          <p>Modes de paiement</p>
        </div>
        <div className="footer-section">
          <h3>Contacts</h3>
          <p>53 907 716</p>
          <p>moemensfaxi10@gmail.com</p>
        </div>
      </div>
      <h3>Suivez Nous</h3>
      <Socials />
    </footer>
  );
};

export default Footer;
