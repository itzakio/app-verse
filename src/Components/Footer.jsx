import logoImg from "../assets/appverse-logo-white.png"

const Footer = () => {
  return (
    <section className="bg-indigo-950 ">
      <footer className="footer sm:footer-horizontal text-white p-10 max-w-[1536px] mx-auto">
        <aside>
          <img className="w-16" src={logoImg} alt="" />
          <p className="text-3xl font-semibold mb-2">AppVerse
            </p>
            <p>
            Explore All Trending Apps <br /> on the Market developed by us
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Mobile App Development</a>
          <a className="link link-hover">Web App Development</a>
          <a className="link link-hover">UI/UX Design & Prototyping</a>
          <a className="link link-hover">App Maintenance & Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
