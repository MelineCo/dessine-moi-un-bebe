import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
    const { id } = useParams()
    const book = useLoaderData()

    return (
        <div className="book-details">
            <h2>{id}</h2>
            <h2>{book.titre}</h2>
            <p>Thématique : {book.theme}</p>
        </div>
    )
}

export const bookDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/livres/' + id)
    return res.json
}