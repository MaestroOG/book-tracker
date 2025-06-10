import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import { useFirebase } from "../context/Firebase"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const { user } = useFirebase()
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const getBooks = async () => {
        try {
            setLoading(true)
            const snapshot = await getDocs(collection(firestore, 'users', user.uid, 'books'))
            const bookList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setBooks(bookList)
            console.log(bookList)
        } catch (error) {
            alert(error?.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getBooks()
    }, [])

    return (
        <main>
            <section className="section-padding mt-10">
                <h1>Your Reads</h1>
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <div className="flex space-x-4">
                        {loading && <span>Loading..</span>}
                        {books?.map(book => (
                            <BookCard onShowMore={() => {
                                navigate(`/book/${book?.id}`)
                            }} coverPath={'/book-cover.jpg'} key={book?.id} name={book?.bookName} author={book?.authorName} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding mt-10">
                <h1>Popular Reads</h1>
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <div className="flex space-x-4">
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home