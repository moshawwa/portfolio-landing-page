import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ul>
            <li>
              <Link to="https://www.facebook.com/mohammed.alshawa1">
                <BsFacebook color="#FF6464" size={32} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/mohammedshawa1/">
                <BsInstagram color="#FF6464" size={32} />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/mohammed-al-shawwa-b6954923b/">
                <BsLinkedin color="#FF6464" size={32} />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/moshawwa">
                <BsGithub color="#FF6464" size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
