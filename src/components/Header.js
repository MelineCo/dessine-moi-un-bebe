import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <div className="header">
            <NavLink to="/evenements">Événements</NavLink>
            <NavLink to="/ateliers">Ateliers</NavLink>
            <NavLink to="/bibliotheque">Bibliothèque</NavLink>
            <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
        </div>
    );
}