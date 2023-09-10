import { useLoaderData, useParams } from "react-router-dom"

export function BookDetails() {
    const { id } = useParams()
    const livre = useLoaderData()

    return (
        <div className="book-details">
            <h2>{id}</h2>
            <h2>{livre.titre}</h2>
            <p>Thématique : {livre.theme}</p>
        </div>
    )
}

// loader function
export const bookdetailsLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:4000/livres/${params.id}`)
    return res.json
}