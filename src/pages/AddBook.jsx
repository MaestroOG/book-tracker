import { useState } from 'react'
import Input from '../components/Input'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [review, setReview] = useState("")
    const { user, addBookForUser } = useFirebase();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addBookForUser(user.uid, {
                bookName: bookName,
                authorName: authorName,
                review: review
            });
            navigate('/')
        } catch (error) {
            alert(error?.message)
        }
    }
    return (
        <>
            <main className='section-padding my-6'>
                <h1 className='text-center font-medium'>
                    Add Book
                </h1>
                <form onSubmit={(e) => handleSubmit(e)} className='max-w-lg mx-auto flex flex-col space-y-3 mt-5'>
                    <Input type={'text'} placeholder={'Book Name'} className={'w-full'} required={true} value={bookName} setValue={setBookName} />
                    <Input type={'text'} placeholder={'Author Name'} className={'w-full'} required={true} value={authorName} setValue={setAuthorName} />
                    <input type="file" className='w-full placeholder:text-muted' />
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} className='w-full h-28 overflow-y-auto' placeholder='Enter your review'></textarea>
                    <button type="submit" className='btn-primary w-full'>Add</button>
                </form>
            </main>
        </>
    )
}

export default AddBook