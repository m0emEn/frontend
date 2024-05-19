import { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";

const AccountPage = () => {
  const [signBtn, setSignBtn] = useState(0);

  return (
    <div className="accountPage container">
      <Breadcrumbs name={"Connexion"} />
      <div className="signContainer">
        <div className="mainSign">
          <div className="signType">
            <button
              className={signBtn === 0 ? "selected" : ""}
              onClick={() => setSignBtn(0)}
            >
              S'identifier
            </button>
            <button
              className={signBtn === 1 ? "selected" : ""}
              onClick={() => setSignBtn(1)}
            >
              S'inscrire
            </button>
          </div>
          <div className={signBtn === 0 ? "login shown" : "login"}>
            <label>E-mail *</label>
            <input name="email" type="email" required />
            <label>Mot de passe *</label>
            <input name="password" type="password" required />
            <div className="connect">
              <p>Connexion</p>
              <p>Mot de passe oublié ?</p>
            </div>
          </div>
          <div className={signBtn === 1 ? "signup shown" : "signup"}>
            <div></div>
            <div className="row">
              <div className="col">
                <label>Prénom *</label>
                <input name="prenom" type="text" required />
              </div>
              <div className="col">
                <label>Nom *</label>
                <input name="nom" type="text" required />
              </div>
            </div>
            <label>E-mail *</label>
            <input name="email" type="email" required />
            <label>Télèphone *</label>
            <input name="tel" type="number" required />
            <div className="row">
              <div className="col">
                <label>Mot de passe *</label>
                <input name="password" type="password" required />
              </div>
              <div className="col">
                <label>Confirmer mot de passe *</label>
                <input name="confPassword" type="password" required />
              </div>
            </div>
            <div className="connect">
              <p>S'inscrire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
