const Footer = () => {
  return (
    <footer className="section bg-white py-8 md:py-11 lg:py-16">
      <div className="row border-b border-b-border-color pb-4 md:pb-5 lg:pb-6">
        <div className="column">
          <h2 className="heading text-center">Gadget Heaven</h2>
          <p className="text text-center">Leading the way in cutting-edge technology and innovation.</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h5 className="heading text-center">Services</h5>
          <ul className="footer-nav text flex flex-col items-center gap-2">
            <li>
              <a href="#">Product Support</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="heading text-center">Company</h5>
          <ul className="footer-nav text flex flex-col items-center gap-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h5 className="heading text-center">Legal</h5>
          <ul className="footer-nav text flex flex-col items-center gap-2">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
