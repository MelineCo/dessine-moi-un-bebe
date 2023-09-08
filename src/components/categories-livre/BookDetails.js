import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
    const { id } = useParams()
    const livre = useLoaderData()

    return (
        <div className="book-details">
            <h2>{id}</h2>
            <h2>{livre.titre}</h2>
            <p>Thématique : {livre.test}</p>
            <p>Pourquoi ça ne récupère pas les données du liiiiivre ???</p>
        </div>
    )
}

// loader function
export const bookdetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/livres/' + id)
    return res.json
}