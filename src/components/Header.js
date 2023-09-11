import { NavLink } from "react-router-dom";
import illuBebe from "../images/Dessine-moi-des-bebes-2.png";

const navlinkStyle = ({isActive}) => {
    return {
        fontWeight: isActive? 'bold': 'normal',
        textDecoration: 'none',
        textTransform: 'capitalize'
    }
}

export function Header(){
    return (
        <>
        <div className="header">
            <h1>Dessine-moi un bébé</h1>
            <nav id="menu">
                    <NavLink style={navlinkStyle} to="/ateliers">ATELIERS</NavLink>
                    <NavLink style={navlinkStyle} to="/bibliotheque">BIBLIOTHÈQUE</NavLink>
                    <NavLink style={navlinkStyle} to="/equipe">QUI SOMMES NOUS ?</NavLink>
            </nav>
        </div>
        </>
    );
}