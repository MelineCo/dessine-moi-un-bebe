import { AtelierCommunicationFamiliale } from "./AtelierCommunicationFamiliale";
import { AtelierEveil } from "./AtelierEveil";
import { AtelierMassageBebe } from "./AtelierMassageBebe";

export function Ateliers(){
    return (
        <div>
            <h2>Ateliers</h2>
            <p>
                Le nombre de place est limité. Les inscriptions se font dans l'ordre d'arrivée des bulletins.
            </p>
            <div className="ateliersContainer">  
                <AtelierEveil />
                <AtelierCommunicationFamiliale />
                <AtelierMassageBebe />
            </div>
        </div>
    );
}