export default function AtelierFrereSoeur(){
    return (
        <div className="detailsAtelier">
            <h3>Frère Soeur sans jalousie ni rivalité</h3>

            <div className="descriptionAtelier">
                <p>
                    Les enfants d'une même famille éprouvent parfois des difficultés à s'entendre entre eux.
                    Il leur arrive même de faire face à des conflits assez sérieux.
                    Confrontés à ce genre de situation, les parents qui recherchent des solutions à la fois 
                    adroites et respectueuses ont désormais à leur disposition les outils appropriés.
                </p>
                <p>
                    S'adressant aux parents qui ont plus d'un enfant, cet atelier présente, des attitudes, 
                    des comportements efficaces pour atténuer la rivalité qui opposent souvent les enfants, 
                    pour en finir avec les disputes, les chamailleries, les moqueries qui pèsent lourdement 
                    sur la vie familiale.
                </p>
                <p>
                    Il s'avère également utile pour les adultes qui travaillent avec des groupes d'enfants (classes, crèches...)
                </p>

            </div>

            <div className="informations">
                <p>
                    Cet atelier se déroule en 6 rencontres à raison d'une soirée tous les 15 jours (de 20h30 à 22h30)
                </p>
                <p>
                    Prix: 75 € (atelier et cahier de travail) + Adhésion à l'association - Possibilité de faire plusieurs réglements.
                </p>
            </div>
            <div className="inscriptions">
                <button onClick={()=>{alert("Inscription enregistrée")}}>Je m'inscris !</button>
            </div>
        </div>
        
    );
}