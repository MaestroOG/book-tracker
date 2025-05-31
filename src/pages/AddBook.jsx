import { useState } from 'react'
import Input from '../components/Input'

const AddBook = () => {
    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    return (
        <>
            <main className='section-padding my-6'>
                <h1 className='text-center font-medium'>
                    Add Book
                </h1>
                <form className='max-w-lg mx-auto flex flex-col space-y-3 mt-5'>
                    <Input type={'text'} placeholder={'Book Name'} className={'w-full'} required={true} value={bookName} setValue={setBookName} />
                    <Input type={'text'} placeholder={'Author Name'} className={'w-full'} required={true} value={authorName} setValue={setAuthorName} />
                    <input type="file" className='w-full placeholder:text-muted' />
                    <textarea className='w-full h-28 overflow-y-auto' placeholder='Enter your review'></textarea>
                    <button type="submit" className='btn-primary w-full'>Add</button>
                </form>
            </main>
        </>
    )
}

export default AddBook