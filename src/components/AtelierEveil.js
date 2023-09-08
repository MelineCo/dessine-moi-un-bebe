export function AtelierEveil(){
    return (
        <div className="detailsAtelier">
            <h3>Atelier Éveil en famille</h3>

            <div className="descriptionAtelier">
                <p>
                    Les rencontres d'éveil en famille sont des moments de partage entre le parent
                    et l'enfant favorisant le lien d'attachement et la relation parent-enfant.
                    Un agréable moment à passer ensemble plus qu'un apprentissage d'une activité.
                    La présence du parent rassure l'enfant et l'aide à intégrer le groupe (au bout d'un certain temps)
                    à aller vers les autres en toute confiance et acquérir plus d'autonomie.
                </p>
                <p>
                    On s'amuse à se transformer en montagne très haute ou en arbre majestueux,
                    la tête dans les nuages mais les pieds bien sur terre, on coupe son bois dans la forêt comme un bûcheron avec sa grande hache,
                    on vole comme un bourdon ou on s'étire comme un chat, on rugit comme un lion féroce, on saute et on danse,
                    on construit ensemble une machine infernale, puis on se laisse tomber doucement comme une poupée de chiffon.
                </p>
                <p>
                    On écoute une musique douce et on se laisse flotter sur les vagues
                    et on rêve jusqu'à ce que la fée des rêves vienne nous réveiller ...
                    Et, mine de rien, on apprend à prendre une bonne posture avec son corps,
                    on respire profondément et consciemment, on se concentre, on acquière un meilleur équilibre.
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
                    Inscriptions : contact@dessinemoiunbebe.fr Places limitées<br />
                    Recommandations: porter une tenue légére et agréable pour l'enfant et le parent accompagnant
                </p>
                <p>
                    Consulter l'agenda pour les dates.
                </p>
                <button onClick={()=>{alert("Inscription enregistrée")}}>Je m'inscris !</button>
            </div>
        </div>
    );
}