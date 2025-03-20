const Footer = () => {
  return (
    <div className="footer sm:footer-horizontal footer-center  text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Andrew Vasquez
            </p>
          </aside>
        </div>
  );
}

export default Footer;