import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
     <div className="flex items-center flex-shrink-0"> 
      <img src={logo} alt="Logo" className="mx-2 w-10" />
        </div>
        <div className="flex items-center m-2 justify-center gap-4 text-2xl"> 
          <FaLinkedin className="text-white text-2xl mx-2"/>
          <FaGithub className="text-white text-2xl mx-2" />
          <FaTwitterSquare className="text-white text-2xl mx-2" />
          </div>
    </nav>
  )
}

export default Navbar