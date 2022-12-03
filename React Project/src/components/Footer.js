import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your desination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">All version</a>
          <a href="/">Change Logo</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">All version</a>
          <a href="/">Change Logo</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">All version</a>
          <a href="/">Change Logo</a>
          <a href="/">Status</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">All version</a>
          <a href="/">Change Logo</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
