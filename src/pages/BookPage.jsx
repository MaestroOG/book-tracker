import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { firestore } from "../utils/firebase";

const BookPage = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [book, setBook] = useState({})
    const { user } = useFirebase()

    const getBook = async () => {
        try {
            const bookRef = doc(firestore, 'users', user.uid, 'books', id)
            const bookSnap = await getDoc(bookRef);

            if (bookSnap.exists()) {
                const data = {
                    id: bookSnap.id,
                    ...bookSnap.data()
                };
                setBook(data);

                console.log("Book fetched:", data);
            } else {
                console.log("Book not found")
            }

        } catch (error) {
            alert(error?.message)
        }
    }

    const deleteBook = async () => {
        if (!user?.uid || !id) return;

        const confirmDel = window.confirm('Do you really want to delete this book?');
        if (!confirmDel) return;

        try {
            const bookRef = doc(firestore, 'users', user?.uid, 'books', id);
            await deleteDoc(bookRef);
            alert('Book Deleted Successfully!');
            navigate('/')
        } catch (error) {
            alert(error?.message)
        }
    }

    useEffect(() => {
        if (user?.uid && id) {
            getBook()
        }
    }, [user, id])

    return (
        <main className="section-padding mt-5">
            <div className="lg:flex items-start gap-8 w-full">
                <img src="/book-cover.jpg" alt="book-cover" width={200} height={350} loading="eager" className="w-1/4 mx-auto shadow-lg mb-6 lg:mb-0" />
                <div className="pb-12 w-3/4">
                    <h1 className="font-medium">{book?.bookName || "Book Name"}</h1>
                    <p className="text-muted mt-1 text-lg">{book?.authorName || "Author Name"}</p>
                    <p className="mt-4">{book?.review || "No Review was provided"}</p>
                </div>
            </div>
            <div className="mt-5">
                <button className="btn-light float-right ml-4" onClick={() => navigate('/')}>Back</button>
                <button className="btn-delete float-right" onClick={deleteBook}>Delete</button>
            </div>
        </main>
    )
}

export default BookPage