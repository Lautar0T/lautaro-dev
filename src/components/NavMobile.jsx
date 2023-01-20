import { NavLink } from "react-router-dom"

const NavMobile = ({isOpen, handleClick}) => {
    return (
        <div className={isOpen ? 'navbar-Mobile-active navbar-Mobile' :' navbar-Mobile'}>
            <nav className="">
                <ul className="">
                    <li className='nav-link'><NavLink to={"/"} className={({ isActive }) => isActive ? " text-blue-600 underline" : ""} onClick={handleClick}>Home</NavLink></li>
                    <li className='nav-link'><NavLink to={"/about"} className={({ isActive }) => isActive ? " text-blue-600 underline" : ""} onClick={handleClick}>About</NavLink></li>
                    <li className='nav-link'><NavLink to={"/contact"} className={({ isActive }) => isActive ? " text-blue-600 underline" : ""} onClick={handleClick}>Contact</NavLink></li>
                    <li className='nav-link'><NavLink to={"/projects"} className={({ isActive }) => isActive ? " text-blue-600 underline" : ""} onClick={handleClick}>Projects</NavLink></li>
                    <li className='nav-link'><NavLink to={"/Curriculum_Vitae"} className={({ isActive }) => isActive ? " text-blue-600 underline" : ""} onClick={handleClick}>CV</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMobile