import BookCard from "../components/BookCard"

const Home = () => {
    return (
        <main>
            <section className="section-padding mt-10">
                <h1>Your Reads</h1>
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <div className="flex space-x-4">

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