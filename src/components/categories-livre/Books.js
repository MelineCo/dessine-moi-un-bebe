import { useLoaderData, Link } from 'react-router-dom'

export default function Books(){
    const books = useLoaderData()
    return (
        <div>
            <h3>Livres</h3>

            <div className="books">
                {books?.map(book => (
                    <Link to={book.id.toString()} key={book.id} >
                        <p>{book.titre}</p>
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