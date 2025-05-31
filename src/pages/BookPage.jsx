import { useNavigate } from "react-router-dom"

const BookPage = () => {
    const navigate = useNavigate();
    return (
        <main className="section-padding mt-5">
            <div className="lg:flex items-start gap-8">
                <img src="/book-cover.jpg" alt="book-cover" width={200} height={350} loading="eager" className="mx-auto shadow-lg mb-6 lg:mb-0" />
                <div className="pb-12">
                    <h1 className="font-medium">Notes from Underground</h1>
                    <p className="text-muted mt-1 text-lg">Fyodor Dostoevsky</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore autem dolores? Atque saepe quis voluptatem dolorum. Quis officia saepe cupiditate, iure dolorum adipisci, veritatis, voluptas id natus similique et rerum est voluptatum incidunt neque provident impedit. Delectus deleniti enim autem consequuntur dolor, assumenda ducimus est debitis veritatis distinctio. Adipisci quaerat quam accusamus quae alias magnam deleniti. Molestiae sequi magni, aliquid animi repudiandae earum porro ipsum nihil mollitia repellat. Adipisci sapiente perferendis facere autem laborum impedit enim reiciendis suscipit amet? Sed blanditiis doloribus reprehenderit inventore, quis ullam voluptas vel! Laboriosam beatae inventore aliquid? Nobis dolor quisquam laudantium hic labore temporibus aspernatur ullam officiis sequi. Cumque, labore voluptatum. Consequatur voluptatibus, ut eligendi a quasi eum distinctio consectetur eaque dolor autem blanditiis beatae minima maxime, aspernatur maiores debitis? Ab doloribus, minima quos vel odio nam, dolorum eveniet, facilis beatae fugit totam soluta?</p>
                </div>
            </div>
            <div className="mt-5">
                <button className="btn-light float-right ml-4" onClick={() => navigate('/')}>Back</button>
                <button className="btn-delete float-right">Delete</button>
            </div>
        </main>
    )
}

export default BookPage