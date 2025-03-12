import "../styles/footer.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <p>&copy; Rozhkova-DEV</p>
      <div className="footer-icons">
        <a
          className="footer-button"
          href="https://github.com/marrozhkova"
          target="_blank"
          alt="GitHub"
        >
          <span className="button-container">
            <FaGithub className="white-footer" />
          </span>
          <span className="button-background"></span>
        </a>
        <a
          className="footer-button"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mar.rozhkova@gmail.com"
          target="_blank"
          alt="Email"
        >
          <span className="button-container">
            <MdOutlineMarkEmailRead className="white-footer" />
          </span>
          <span className="button-background"></span>
        </a>
        <a
          className="footer-button"
          href="https://discordapp.com/users/marrozhkova"
          target="_blank"
          alt="Discord"
        >
          <span className="button-container">
            <FaDiscord className="white-footer" />
          </span>
          <span className="button-background"></span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
