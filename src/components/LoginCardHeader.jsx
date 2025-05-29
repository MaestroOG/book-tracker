import { BookOpen } from 'lucide-react'

const LoginCardHeader = () => {
    return (
        <section className="flex-center flex-col space-y-2">
            <BookOpen color="#267e7c" size={54} />
            <h1>Book Log & Review</h1>
            <p className="text-muted text-center">Track your reading progess and share your thoughts.</p>
        </section>
    )
}

export default LoginCardHeader