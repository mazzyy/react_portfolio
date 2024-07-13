// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      {/* <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="Logo" className="mx-2 w-10" />
      </div> */}

      <div className="flex items-center flex-shrink-0">
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 w-10"
        >
          <text x="50" y="60" fontFamily="Arial" fontSize="35" fill="#A9A9A9">
            A
          </text>
          <text x="10" y="60" fontFamily="Arial" fontSize="70" fill="#fff">
            A
          </text>
        </svg>
      </div>

      <div className="flex items-center m-2 justify-center gap-4 text-2xl">
        <FaLinkedin className="text-white text-2xl mx-2" />
        <FaGithub className="text-white text-2xl mx-2" />
        <FaTwitterSquare className="text-white text-2xl mx-2" />
      </div>
    </nav>
  );
};

export default Navbar;
