import { useLoaderData, useParams } from "react-router-dom"

export function BookDetails() {
    const { id } = useParams()
    const livres = useLoaderData()

    return (
        <>
        <img className="book-cover" src={livres.couverture} alt={livres.titre}></img>
        <div className="book-details">
            <h2>{JSON.stringify(livres.titre)}</h2>
            <p>{JSON.stringify(livres.description)}</p>
        </div>
        </>
    )
}

// loader function
export const bookdetailsLoader = async ( {params} ) => {
    const url = "http://localhost:4000/livres/" + params.id;
    const res = await fetch(url)
    return await res.json();
}