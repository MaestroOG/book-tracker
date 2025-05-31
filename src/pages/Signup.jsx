import ButtonWithIcon from "../components/ButtonWithIcon"
import Input from "../components/Input"
import { useState } from "react"
import LoginCardHeader from "../components/LoginCardHeader"
import { useNavigate } from "react-router-dom"
import { useFirebase } from "../context/Firebase"


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const firebase = useFirebase();

    const handleSignUpSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await firebase.signUpWithEmailPass(email, password);
            if (user) {
                navigate('/')
            }
        } catch (error) {
            alert(error?.message)
        }
    }

    const signUpWithGoogle = async () => {
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

                <ButtonWithIcon imgPath={'/google.png'} text={'Continue With Google'} onClick={signUpWithGoogle} />


                <div className="w-full mt-6 flex items-center gap-4">
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                    <span className="text-gray-500 font-medium">OR</span>
                    <hr className="border-none h-0.5 bg-gray-200 w-2/3" />
                </div>

                <form className="mt-4" onSubmit={(e) => handleSignUpSubmit(e)}>
                    <Input type='email' placeholder='Email Address' className={'w-full'} value={email} setValue={setEmail} />
                    <Input type='password' placeholder='Password' className={'w-full'} value={password} setValue={setPassword} />
                    <button className="btn-primary mt-5 w-full" type="submit">Sign Up</button>
                </form>
            </section>
        </main>
    )
}

export default Signup