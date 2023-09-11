import { Outlet } from "react-router-dom"

export default function WorkshopsLayout(props){
    return (
        <div>
            <h1>Ateliers</h1>
            <p>
                Le nombre de place est limité. <br />Les inscriptions se font dans l'ordre d'arrivée des bulletins.
            </p>
            <div className="workshops-grid">
                <Outlet />
            </div>
            
        </div>
    );
}