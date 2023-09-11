import { useLoaderData, Link } from "react-router-dom";

export function Workshops(){
    const workshops = useLoaderData();
    return (
        <div className="ateliersContainer">  
            {workshops?.map(workshop => (
                        <Link to={workshop.id.toString()} key={workshop.id} >
                        <h2>{workshop.atelier}</h2>
                        <p>{workshop.description}</p>
                            <button>En savoir plus</button>
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