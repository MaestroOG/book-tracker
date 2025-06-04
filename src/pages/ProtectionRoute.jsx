import { useFirebase } from '../context/Firebase'
import { Navigate } from 'react-router-dom'

const ProtectionRoute = ({ children }) => {
    const { user } = useFirebase()

    if (!user) {
        return <Navigate to={'/login'} />
    }
    return children;
}

export default ProtectionRoute