const BookCard = ({ coverPath, name, author, onShowMore, onLog }) => {
    return (
        <div className='my-5 shrink-0 max-w-[500px] h-[260px] p-4 shadow-lg rounded-xl flex items-center gap-8'>
            <div className='w-1/3 max-sm:hidden'>
                <img src={coverPath} alt="book-cover" className='w-full rounded-lg' width={450} height={700} />
            </div>
            <div className="w-2/3 max-sm:w-full flex flex-col space-y-4">
                <div className="w-full">
                    <h3 className="text-2xl font-semibold text-wrap">{name}</h3>
                    <p className="text-base text-muted">{author}</p>
                </div>

                <div className="w-full flex flex-col space-y-4">
                    <button className="btn-primary w-full" onClick={onShowMore}>Show More</button>
                    {onLog && <button className="btn-light w-full" onClick={onLog}>Log</button>}
                </div>
            </div>
        </div>
    )
}

export default BookCard