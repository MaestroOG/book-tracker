import { useNavigate } from "react-router-dom"
import { useFirebase } from "../context/Firebase"

const Profile = () => {
    const { user } = useFirebase()
    const firebase = useFirebase()
    const navigate = useNavigate()

    console.log(user)

    const handleLogoutClick = async () => {
        try {
            await firebase.signOut()
            navigate('/')
        } catch (error) {
            alert(error?.message)
        }
    }

    return (
        <main className="bg-primary mt-12 w-full flex items-center justify-center">
            <section className="login-card flex flex-col items-center justify-center space-y-6">
                <img src="https://avatar.iran.liara.run/public/20" alt="avatar" width={120} height={120} loading="eager" />
                <div className="text-center">
                    <h1>{user?.email.slice(0, 6)}</h1>
                    <p className="text-muted">{user?.email}</p>
                </div>
                <div className="flex items-center gap-5">
                    <button className="btn-primary" onClick={handleLogoutClick}>Logout</button>
                    <button className="btn-light">Edit Profile</button>
                </div>
            </section>
        </main>
    )
}

export default Profile