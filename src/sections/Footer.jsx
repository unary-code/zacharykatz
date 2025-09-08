import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.linkTo}>
              <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
