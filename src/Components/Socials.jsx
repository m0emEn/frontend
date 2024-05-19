import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="social-icons">
      <Link to="https://www.facebook.com">
        <FaFacebookF color="#000" />
      </Link>
      <Link to="https://www.instagram.com">
        <FaInstagram color="#000" />
      </Link>
      <Link to="https://www.whatsapp.com/">
        <FaWhatsapp color="#000" />
      </Link>
    </div>
  );
};

export default Socials;
