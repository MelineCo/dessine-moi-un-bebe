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
        <>
        <img className="workshop-img" src={workshop.photo} alt={workshop.atelier}></img>
        <div className="workshop-details">
            <h2>{JSON.stringify(workshop.atelier)}</h2>
            <p>{JSON.stringify(workshop.description)}</p>
        </div>
        <div className="compteur">
            <p>Je réserve </p>
            <button onClick={decrementCount}>-</button>
            <span className="quantity">{count}</span>
            <button onClick={incrementCount}>+</button>
            <p> places.</p>
        </div>
        <div className="inscription-box">
            <p className="tarif-atelier">{JSON.stringify(workshop.tarif)} € <span className="small">pour les adhérents</span></p>
            <button>Réserver un créneau</button>
            <button>Offrir l'atelier</button>
        </div>

        <div className="lieu">
            <h3>Lieu de l'atelier</h3>
            <p>{JSON.stringify(workshop.lieu)}</p>
            
        </div>

        <div className="infos-complementaires">
            <h3>Informations complémentaires</h3>
            <p>{JSON.stringify(workshop.infoscomplementaires)}</p>
        </div>
        <YouMightAlsoLike />
        </>
    );
}

// loader function
export const workshopDetailsLoader = async ( {params} ) => {
    const url = "http://localhost:4000/ateliers/" + params.id;
    const res = await fetch(url)
    return await res.json();
}