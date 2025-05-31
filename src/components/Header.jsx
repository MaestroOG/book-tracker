import { BookOpenText } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="section-padding header z-20">
            <Link to={'/'} className="flex items-center gap-3 cursor-pointer hover:scale-[1.1] transition ease-out">
                <BookOpenText color="#267e7c" size={36} />
                <h1 className="font-medium text-3xl">BiblioBud</h1>
            </Link>
        </header>
    )
}

export default Header