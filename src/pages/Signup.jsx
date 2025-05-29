import { BookOpen, Link } from "lucide-react"
import ButtonWithIcon from "../components/ButtonWithIcon"
import Input from "../components/Input"
import { useState } from "react"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    return (
        <main className="bg-primary h-screen w-full flex items-center justify-center">
            <section className="login-card">
                <div className="flex-center flex-col space-y-2">
                    <BookOpen color="#267e7c" size={54} />
                    <h1>Book Log & Review</h1>
                    <p className="text-muted text-center">Track your reading progess and share your thoughts.</p>
                </div>

                <ButtonWithIcon imgPath={'/google.png'} text={'Continue With Google'} />


                <div className="w-full mt-6 flex items-center gap-4">
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                    <span className="text-gray-500 font-medium">OR</span>
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                </div>

                <form className="mt-4">
                    <Input type='text' placeholder='Username e.g., John Doe.' className={'w-full'} value={name} setValue={setName} />
                    <Input type='email' placeholder='Email Address' className={'w-full'} value={email} setValue={setEmail} />
                    <Input type='password' placeholder='Password' className={'w-full'} value={password} setValue={setPassword} />
                    <button className="btn-primary mt-5 w-full" type="submit">Sign Up</button>
                </form>
            </section>
        </main>
    )
}

export default Signup