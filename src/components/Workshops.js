import { useLoaderData, Link } from "react-router-dom";

export function Workshops(){
    const workshops = useLoaderData();
    return (
        <div className="ateliersContainer">  
            {workshops?.map(workshop => (
                        <Link style={{textDecoration: 'none'}} className="vignette-atelier" to={workshop.id.toString()} key={workshop.id} >
                            <img style={{width: 250, height: 180}} src={workshop.photo} alt={workshop.atelier}></img>
                            <h2>{workshop.atelier}</h2>
                            <p>{workshop.description}</p>
                            <p className="tarif">{workshop.tarif} €</p>
                        </Link>
            ))}
		</div>
    );
}

// loader function
export const workshopsLoader = async () => {
	const res = await fetch('http://localhost:4000/ateliers')
	return res.json()
}