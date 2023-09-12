import { NavLink, Link } from "react-router-dom";

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
            <Link to="home" style={{textDecoration: 'none', color: 'black'}} ><h1>Dessine-moi un bebe</h1></Link>
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