import { Outlet } from "react-router-dom"

export default function MeetUpLayout(){
    return (
        <div>
            <h1>Les rencontres</h1>
            <p>
                Rencontres gratuites sans  obligation d'adhésion.<br/>
                Pour une meilleure organisation, l'inscription est recommandée : <a href="mailto:contact@dessinemoiunbebe.fr?subject=Rencontre">contact@dessinemoiunbebe.fr</a>
            </p>
            <div className="meetup-grid">
                <Outlet />
            </div>
            
        </div>
    )
}