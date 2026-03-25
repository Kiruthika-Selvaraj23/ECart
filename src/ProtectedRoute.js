import { Navigate, useNavigate } from 'react-router'

export default function ProtectedRoute({ user, allowedRoles, children }) {
    const navigate = useNavigate()
    if (!user)
        // return navigate("/")
        return <Navigate to="/" replace />;

    if (!allowedRoles.includes(user.role)) {
        if (user.role === "user") {
            return navigate("/userHomePage")
        }
        if (user.role === "seller") {
            return navigate("/sellerHomePage")
        }
        if (user.role === "admin") {
            return navigate("/adminsHomePage")
        }
    }
    return children
}
