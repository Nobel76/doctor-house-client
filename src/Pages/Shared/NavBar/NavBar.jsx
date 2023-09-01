import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'


const NavBar = () => {
    const navOptions = <>
                  <li><Link to="/">Home </Link></li>
                  <li><Link to="/"> About</Link></li>
                  <li><Link to="/"> Appointment</Link></li>
                  <li><Link to="/login"> Login</Link></li>
    </>
    return (
     <>
 <div className="navbar fixed z-10 bg-opacity-300  text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="w-10 rounded-full ml-6" src={logo} alt="" />
                    <a className="btn btn-ghost text-white normal-case text-xl"><span className="text-orange-300">Doc</span> House</a>
                </div>
                <div className="navbar-center sm:hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>

     </>
    );
};

export default NavBar;