const Profile = () => {
    return (
        <main className="bg-primary mt-12 w-full flex items-center justify-center">
            <section className="login-card flex flex-col items-center justify-center space-y-6">
                <img src="https://avatar.iran.liara.run/public/20" alt="avatar" width={120} height={120} loading="eager" />
                <div className="text-center">
                    <h1>John Doe</h1>
                    <p className="text-muted">johndoe@gmail.com</p>
                </div>
                <div className="flex items-center gap-5">
                    <button className="btn-primary">Logout</button>
                    <button className="btn-light">Edit Profile</button>
                </div>
            </section>
        </main>
    )
}

export default Profile