import { NavLink, Outlet } from "react-router-dom";
import illustration from "../images/femme-lisant-un-livre.png";

export function Bibliotheque(props){
    return (
        <div>
            <h1>Bibliotheque</h1>
            <img className="illustration-bibli" src={illustration} alt="Femme lisant un livre sur la maternité"></img>
            <nav>
                <NavLink to="allaitement">Allaitement</NavLink>
                <NavLink to="massage">Massage</NavLink>
                <NavLink to="emotions">Émotions</NavLink>
            </nav>
            <p>
                Pour emprunter un livre (ou des livres), il convient d'etre adhérent à jour de sa cotisation
                et de nous remettre un chèque de 40€ de caution non encaissé.<br />
                Envoyez nous un mail pour récupérer votre ouvrage et nous conviendrons d'un rendez-vous: <a href="mailto:contact@dessinemoiunbebe.fr?subject=Emprunt livre">contact@dessinemoiunbebe.fr</a>
            </p>
            <Outlet />
        </div>
    );
}