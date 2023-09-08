export function AtelierMassageBebe(){
    return (
        <div className="detailsAtelier">
            <h3>Atelier Massage Bébé</h3>

            <div className="descriptionAtelier">
                <p>
                    Le prochain atelier de massage bébé débutera le 11 septembre.
                    Il est composé de 5 séances de 1H30 à raison d'une séance par semaine,
                    pour permettre un apprentissage en douceur,Caroline, instructrice certifiée AFMB (www.massage-bebe.asso.fr)
                    vous accompagnera dans la découverte du toucher sain et nourrissant comme outil de communication
                    avec votre enfant.
                </p>
                <p>
                    Chaque séance se compose de différents temps  :
                </p>
                <ul>
                    <li>
                        Accueil, installation puis court temps de relaxation
                    </li>
                    <li>
                        Un temps d'apprentissage des techniques de massage pour bébé où seul vous-même masserez votre bébé
                        (si bébé est disponible pour cela, sinon vous pourrez vous exercer avec un poupon à disposition, c'est prévu.)
                        suivi d'un temps de révision des mouvements précédents (ainsi vous ne serez pas perdus si vous sautez une séance).
                        L'instructrice fait la démonstration des gestes sur un poupon.
                    </li>
                    <li>
                        Et des temps de parole, d'échanges autour des thèmes qui intéressent les parents de petits bébés
                        (quelles huiles utiliser pour masser, le sommeil, les pleurs, les bienfaits du massage, le développement du bébé...).
                        Références scientifiques et bibliographie seront à votre disposition si vous le souhaitez.
                    </li>
                </ul>
            </div>

            <div className="informations">
                <p>
                    Pour les bébés de 1 à 10 mois, avec leur maman et/ou leur papa<br />
                    Au Centre loisirs de Ventabren<br />
                    Les jeudis après-midi de 13h45 à 15h15 le 11, 18, 25 septembre 2014<br />
                    Tarif: 70 euros pour les adhérents<br />
                    Inscriptions: contact@dessinemoiunbebe.fr
                </p>
                <p>
                    L'huile de massage, ainsi qu'un document récapitulatif du massage sont offerts.
                </p>
                <p>
                    Prévoir :
                </p>
                <ul>
                    <li>
                        Pour vous : une tenue confortable (nous serons assis par terre)
                    </li>
                    <li>
                        Pour votre bébé : une  serviette en coton, type serviette de toilette (les tapis de massage sont prévus sur place),
                        de quoi le changer (le massage des jambes et du ventre génère très souvent des pipis...),
                        de quoi jouer, de quoi le faire goûter... tout ce dont vous pensez que votre bébé aura besoin, sans aucune restriction.
                    </li>
                </ul>
                <button onClick={()=>{alert("Inscription enregistrée")}}>Je m'inscris !</button>
            </div>
        </div>
    );
}