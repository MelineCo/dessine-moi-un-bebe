import { Link } from "react-router-dom";

export function NotFound(){
    return (
        <>
        <h2>Page introuvable</h2>
        <p>Oops ! La page que vous avez demandée est introuvable.</p>
        <p>Nous vous proposons de revenir à <Link to="/">l'accueil</Link>.</p>
        </>
    )
}