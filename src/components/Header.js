import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <>
        <nav>
            <h1>Dessine-moi un bébé</h1>
            <NavLink to="/ateliers">Ateliers</NavLink>
            <NavLink to="/bibliotheque">Bibliothèque</NavLink>
            <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
        </nav>
        </>
    );
}