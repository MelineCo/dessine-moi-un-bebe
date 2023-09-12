import { NavLink } from "react-router-dom";
import illuBebe from "../images/Dessine-moi-des-bebes-2.png";

const navlinkStyle = ({isActive}) => {
    return {
        fontWeight: 400,
        textDecoration: 'none',
        fontSize: 18
    }
}

export function Header(){
    return (
        <>
        <div className="header">
            <h1>Dessine-moi un bebe</h1>
            <nav id="menu">
                    <NavLink style={navlinkStyle} to="/ateliers">Nos ateliers</NavLink>
                    <NavLink style ={navlinkStyle} to="/rendezvous">Nos rencontres</NavLink>
                    <NavLink style={navlinkStyle} to="/bibliotheque">La bibliothèque</NavLink>
                    <NavLink style={navlinkStyle} to="/equipe">Qui sommes-nous ?</NavLink>
            </nav>
        </div>
        </>
    );
}