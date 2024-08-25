import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full flex items-center justify-start gap-5 p-2">
            <NavLink to="/">Type 1</NavLink>
            <NavLink to="/typeTwo">Type 2</NavLink>
        </div>
    )
}

export default Header;