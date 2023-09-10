import { NavLink } from "react-router-dom";
import illuBebe from "../images/Dessine-moi-des-bebes-2.png";

export function Header(){
    return (
        <>
        <nav>
            <h1>Dessine-moi un bébé</h1>
            <NavLink to="/ateliers">Ateliers</NavLink>
            <NavLink to="/bibliotheque">Bibliothèque</NavLink>
            <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
        </nav>
        <img src={illuBebe} alt="bebes" />
        </>
    );
}