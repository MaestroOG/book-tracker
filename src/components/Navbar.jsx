import { House, Plus, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="w-full h-16 flex items-center justify-between fixed bottom-0 left-0 section-padding bg-primary shadow-2xl">
            <NavLink to={'/'} className={'flex flex-col items-center'}>
                {({ isActive }) => <House color={isActive ? "#267e7c" : 'black'} size={36} />}
            </NavLink>
            <NavLink to={'/add-book'} className={'flex flex-col items-center'}>
                {({ isActive }) => <Plus color={isActive ? "#267e7c" : 'black'} size={36} />}
            </NavLink>
            <NavLink to={'/profile'} className={'flex flex-col items-center'}>
                {({ isActive }) => <User color={isActive ? "#267e7c" : 'black'} size={36} />}
            </NavLink>
        </nav>
    )
}

export default Navbar