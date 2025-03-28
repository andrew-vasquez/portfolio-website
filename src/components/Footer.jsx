const Footer = () => {
  return (
    <>
    <hr className="mb-4 border-zinc-600" />
    <div className="footer sm:footer-horizontal footer-center  text-base-content p-4">
          <aside>
            <p>
              Andrew Vasquez {new Date().getFullYear()}
            </p>
          </aside>
        </div>
    </>
  );
}

export default Footer;