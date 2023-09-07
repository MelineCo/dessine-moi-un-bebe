import { AtelierCommunicationFamiliale } from "./AtelierCommunicationFamiliale";
import { AtelierEveil } from "./AtelierEveil";
import { AtelierMassageBebe } from "./AtelierMassageBebe";

export function Ateliers(){
    return (
        <div>
            <h1>Ateliers</h1>
            <div className="ateliersContainer">
                <AtelierCommunicationFamiliale />
                <AtelierEveil />
                <AtelierMassageBebe />
            </div>
        </div>
    );
}