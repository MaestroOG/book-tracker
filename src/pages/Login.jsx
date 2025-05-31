import { useState } from "react"
import ButtonWithIcon from "../components/ButtonWithIcon"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import LoginCardHeader from "../components/LoginCardHeader"
import { useFirebase } from "../context/Firebase"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const firebase = useFirebase()
    const navigate = useNavigate()

    const handleSignInSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await firebase.signInWithEmailPass(email, password);
            if (user) {
                navigate('/')
            }
        } catch (error) {
            alert(error?.message)
        }
    }

    const signInWithGoogle = async () => {
        try {
            const user = await firebase.signUpWithGoogle()
            if (user?.user) {
                navigate('/')
            }
        } catch (error) {
            alert(error?.message)
        }

    }
    return (
        <main className="bg-primary h-screen w-full flex items-center justify-center">
            <section className="login-card">
                <LoginCardHeader />

                <ButtonWithIcon imgPath={'/google.png'} text={'Continue With Google'} onClick={signInWithGoogle} />


                <div className="w-full mt-6 flex items-center gap-4">
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                    <span className="text-gray-500 font-medium">OR</span>
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                </div>

                <form className="mt-4" onSubmit={(e) => handleSignInSubmit(e)}>
                    <Input type='email' placeholder='Email Address' className={'w-full'} value={email} setValue={setEmail} />
                    <Input type='password' placeholder='Password' className={'w-full'} value={password} setValue={setPassword} />
                    <button className="btn-primary mt-5 w-full" type="submit">Log In</button>
                </form>

                <div className="text-center mt-7 flex items-center space-x-1 justify-center">
                    <span className="text-muted">Don't Have An Account?</span>
                    <span className="text-accent font-medium">
                        <Link to={'/sign-up'}>Sign Up</Link>
                    </span>
                </div>
            </section>
        </main>
    )
}

export default Login