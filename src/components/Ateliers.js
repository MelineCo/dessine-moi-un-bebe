import { AtelierCommunicationFamiliale } from "./AtelierCommunicationFamiliale";
import { AtelierEveil } from "./AtelierEveil";
import AtelierFrereSoeur from "./AtelierFrereSoeur";
import { AtelierMassageBebe } from "./AtelierMassageBebe";

export function Ateliers(){
    return (
        <div>
            <h2>Ateliers</h2>
            <p>
                Le nombre de place est limité. <br />Les inscriptions se font dans l'ordre d'arrivée des bulletins.
            </p>
            <div className="ateliersContainer">  
                <AtelierEveil />
                <AtelierCommunicationFamiliale />
                <AtelierFrereSoeur />
                <AtelierMassageBebe />
            </div>
        </div>
    );
}