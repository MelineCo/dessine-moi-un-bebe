import { Livre } from "./Livre";

export function Bibliotheque(props){
    return (
        <div>
            <h1>Bibliotheque</h1>
            <p>
                Pour emprunter un livre (ou des livres), il convient d'etre adhérent à jour de sa cotisation
                et de nous remettre un chèque de 40€ de caution non encaissé.
                Envoyez nous un mail pour récupérer votre ouvrage et nous conviendrons d'un rendez-vous: contact@dessinemoiunbebe.fr
            </p>
            <Livre titre={props.titre} />
        </div>
    );
}