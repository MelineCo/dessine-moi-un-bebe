import { useLoaderData, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

const locationDot = <FontAwesomeIcon icon={faLocationDot} />
const clockIcon = <FontAwesomeIcon icon={faClock} />

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
                            <p className="localisation">{clockIcon} {workshop.seances} | {locationDot}  {workshop.ville}</p>
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