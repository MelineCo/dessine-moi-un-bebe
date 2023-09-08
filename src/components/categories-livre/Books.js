import { useLoaderData, Link } from 'react-router-dom'

export function Books(){
    const books = useLoaderData()
    return (
        <div>
            <h3>Livres nouveau test</h3>
            <p>Don't push!</p>

            <div className="book">
                {books?.map(book => (
                    <Link to={book.id.toString()} key={book.id} >
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