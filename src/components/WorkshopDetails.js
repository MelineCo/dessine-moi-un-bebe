import { useLoaderData } from "react-router-dom";

export default function WorkshopDetails(){
    const workshop = useLoaderData();
    return (
        <>
        <img className="workshop-img" src={workshop.photo} alt={workshop.atelier}></img>
        <div className="workshop-details">
            <h2>{JSON.stringify(workshop.atelier)}</h2>
            <p>{JSON.stringify(workshop.description)}</p>
        </div>
        </>
    );
}

// loader function
export const workshopDetailsLoader = async ( {params} ) => {
    const url = "http://localhost:4000/ateliers/" + params.id;
    const res = await fetch(url)
    return await res.json();
}