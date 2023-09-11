import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import YouMightAlsoLike from "./YouMightAlsoLike.js";

export default function WorkshopDetails(){
    const [count, setCount] = useState(3)

    function decrementCount(){
        setCount(prevCount => prevCount-1)
    }
    function incrementCount(){
        setCount(prevCount => prevCount+1)
    }

    const workshop = useLoaderData();
    return (
        <div className="workshop">
            <div className="workshop-header">
                <h2>{JSON.stringify(workshop.atelier)}</h2>
                <p>{JSON.stringify(workshop.ville)}</p>
            </div>

            <div className="carrousel-workshop">
                <img className="workshop-img" src="https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2659&q=80" alt={workshop.atelier}></img>
                <img className="workshop-img" src="https://images.unsplash.com/photo-1554344462-4d4ef7ecabc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt={workshop.atelier}></img>
                <img className="workshop-img" src="https://images.theconversation.com/files/523939/original/file-20230502-26-1a8jnc.jpg?ixlib=rb-1.1.0&rect=0%2C214%2C3175%2C1587&q=45&auto=format&w=668&h=324&fit=crop" alt={workshop.atelier}></img>
                <img className="workshop-img" src="https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid37970_1_asset/4fb136e4c6ea46cb460f08ac5642f77c/toddler-blue-phone?fm=webp&fit=thumb&q=65&w=320&h=320" alt={workshop.atelier}></img>
            </div>

            <div className="workshop-body">
                <div className="detailsAtelier">
                    <div className="workshop-desc">
                        <p>{JSON.stringify(workshop.description)}</p>
                    </div>
                    <div className="lieu">
                        <h3>Lieu de l'atelier</h3>
                        <p>{JSON.stringify(workshop.lieu)}</p>  
                    </div>

                    <div className="infos-complementaires">
                        <h3>Informations complémentaires</h3>
                        <p>{JSON.stringify(workshop.infoscomplementaires)}</p>
                    </div>
                </div>
                <div className="inscription-box">
                    <p>Places restantes : {JSON.stringify(workshop.places)}</p>
                    <p className="tarif-atelier">{JSON.stringify(workshop.tarif)} € <span className="small">pour les adhérents</span></p>
                    <button>Réserver un créneau</button><br/>
                    <button>Offrir l'atelier</button>
                </div>
            </div>
        
        </div>
    );
}

// loader function
export const workshopDetailsLoader = async ( {params} ) => {
    const url = "http://localhost:4000/ateliers/" + params.id;
    const res = await fetch(url)
    return await res.json();
}