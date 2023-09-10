export function AtelierEveil(){
    return (
        <div className="detailsAtelier">
            <h3>Éveil en famille</h3>

            <div className="descriptionAtelier">
                <p>
                    Les rencontres d'éveil en famille sont des moments de partage entre le parent
                    et l'enfant favorisant le lien d'attachement et la relation parent-enfant.
                    Un agréable moment à passer ensemble plus qu'un apprentissage d'une activité.
                    La présence du parent rassure l'enfant et l'aide à intégrer le groupe (au bout d'un certain temps)
                    à aller vers les autres en toute confiance et acquérir plus d'autonomie.
                </p>
                <p>
                    Tous les sens sont sollicités : toucher, goût, odorat, vue, ouïe,
                    et les enfants ont l'occasion de se mettre à l'écoute les uns des autres ( s'appuyer sur l'autre,
                    en veillant à ne pas forcer pour ne pas faire mal, l'aider à tenir en équilibre ou s'étirer à deux ... )
                </p>
                <p>
                    On gagne de la maîtrise et de la confiance en soi, mais aussi de la bonne humeur!
                </p>
            </div>
            
            <div className="informations">
                <p>
                    Activité à destination des enfants de 2 à 6 ans pour les familles adhérentes
                </p>
                <p>
                    Un samedi par mois de 10h30 à 11h15  au centre de loisirs de Ventabren<br />
                    8€ par couple parent/enfant + 5 € par enfant supplémentaire<br />
                </p>
            </div>
            <div className="inscriptions">
                <button onClick={()=>{alert("Inscription enregistrée")}}>Je m'inscris !</button>
            </div>
        </div>
    );
}