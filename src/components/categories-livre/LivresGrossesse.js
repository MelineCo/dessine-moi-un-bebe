import { useLoaderData, Link } from 'react-router-dom'

export function LivresGrossesse(){
    const books = useLoaderData()
    return (
        <div>
            <h3>Livres sur la grossesse</h3>
            <p>Don't push!</p>

            <div className="livres">
                {books?.map(book => (
                    <Link to="/" key={book.id} >
                        <p>{book.titre}</p>
                        <p>{book.theme}</p>
                    </Link>
                ))}
		    </div>
        </div>
    )
}

// loader function
export const booksLoader = async () => {
	const res = await fetch('http://localhost:4000/livres')
	return res.json()
}