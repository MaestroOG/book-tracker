import BookCard from "../components/BookCard"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <main>
            <Header />

            <section className="section-padding mt-10">
                <h1>Your Reads</h1>
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <div className="flex space-x-4">
                        <BookCard coverPath={'/book-cover.jpg'} name={'Notes From Underground'} author={'Fyodor Dostoevsky'} />
                        <BookCard coverPath={'/book-cover-2.jpg'} name={'The Subtle Art of Not Giving a F***'} author={'Mark Manson'} />
                    </div>
                </div>
            </section>

            <section className="section-padding mt-10">
                <h1>Popular Reads</h1>
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <div className="flex space-x-4">
                        <BookCard coverPath={'/book-cover.jpg'} name={'Notes From Underground'} author={'Fyodor Dostoevsky'} />
                        <BookCard coverPath={'/book-cover-2.jpg'} name={'The Subtle Art of Not Giving a F***'} author={'Mark Manson'} />
                    </div>
                </div>
            </section>

            <Navbar />
        </main>
    )
}

export default Home