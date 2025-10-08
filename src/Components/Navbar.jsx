import { Link, NavLink } from "react-router";
import logoImg from '/appverse-logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
    </>
  );
  return (
    <div>
      <nav className="navbar px-4 md:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xm space-y-3 text-base dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2"><img className="w-8" src={logoImg} alt="" /><span className="text-xl font-semibold">AppVerse</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/itzakio" target="_blank" className="btn bg-linear-to-r from-violet-600 to-violet-400  text-white"><FaGithub /> Contribute</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
