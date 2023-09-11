import { Outlet } from "react-router-dom"

export default function TeamLayout(props){
    return (
        <div>
            <h1>Équipe</h1>
            <p>
                Voici l'équipe qui vous soutient dans votre maternité et paternité.
            </p>
            <div className="team-grid">
                <Outlet />
            </div>
            
        </div>
    );
}