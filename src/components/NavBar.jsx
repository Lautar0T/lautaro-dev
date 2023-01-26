import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="col-span-2 col-start-3">
            <ul className="hidden lg:flex justify-evenly">
                <NavLink to={"/"} className={({isActive}) => isActive ? " navLink-Active":"navLink"} >Home</NavLink>
                <NavLink to={"/about"} className={({isActive}) => isActive ? " navLink-Active":"navLink"}>About</NavLink>
                <NavLink to={"/contact"} className={({isActive}) => isActive ? " navLink-Active":"navLink"}>Contact</NavLink>
                <NavLink to={"/projects"} className={({isActive}) => isActive ? " navLink-Active":"navLink"}>Projects</NavLink>
                <NavLink to={"/Curriculum_Vitae"} className={({isActive}) => isActive ? " navLink-Active":"navLink"}>CV</NavLink>
            </ul>
        </nav>
    )
}
export default NavBar