import { createContext, useEffect, useState } from "react";
import Seller from "../assets/Seller.jpg"
import User from "../assets/User.jpg"

const RegisterCardDetails = [{
    id: "seller",
    image: Seller,
    heading: "Register as a Seller",
    desc: "Sell your products and reach a wider audience. Create your seller account now."
},
    {
    id: "user",
    image: User,
    heading: "Register as a User",
    desc: "Buy products and services from our trusted sellers. Create your user account now."
}]

export const DContext = createContext()
export default function MyContext(props) {
    const [showRegiserCard, setRegisterCard] = useState(false)
    const [showRegisterFrom, setRegisterForm] = useState(false)
    const [showLoginForm, setLoginForm] =  useState(false)
    const [registrationCardDatas, setRegistrationCardDatas] = useState(RegisterCardDetails)
    const [showCompanyInput, setCompanyInput] = useState("user")
    const [role, setRole] = useState("user")
    const [cartProducts, setCartProducts] = useState([])
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        try {
            const url = process.env.REACT_APP_URL
            const options = {
                method: "GET",
                credentials: "include"
            }
            const response = await fetch(`${url}/me`, options)
            const data = await response.json()
            if (data.success) {
                setUserDetails(data.user)
            }
        }
        catch (err) {
            alert("Trouble in getting user Details")
        }
    }


    const data = {
        showRegiserCard, setRegisterCard, showRegisterFrom, setRegisterForm, registrationCardDatas, setRegistrationCardDatas, showCompanyInput, setCompanyInput,
        showLoginForm, setLoginForm, role, setRole, cartProducts, setCartProducts, userDetails, setUserDetails
    }
    
    return (
        <DContext.Provider value={data}>
            {props.children}
        </DContext.Provider>
    )
}