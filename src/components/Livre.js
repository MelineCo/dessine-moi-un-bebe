export function Livre(props){
    return (
        <div>
            <h1>Titre : {props.titre}</h1>
            <img className="couvertureLivre" src={props.img} alt={props.title} />
            <p>{props.description}</p>
        </div>
    );
}