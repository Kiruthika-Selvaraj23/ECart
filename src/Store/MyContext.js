import { createContext, useState } from "react";
import Seller from "../accets/Seller.jpg"
import User from "../accets/User.jpg"

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

    const [userDetails, setUserDetails] = useState({})


    const data = {
        showRegiserCard, setRegisterCard, showRegisterFrom, setRegisterForm, registrationCardDatas, setRegistrationCardDatas, showCompanyInput, setCompanyInput,
        showLoginForm, setLoginForm, role, setRole, userDetails, setUserDetails
    }
    
    return (
        <DContext.Provider value={data}>
            {props.children}
        </DContext.Provider>
    )
}