import React, {useState} from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import PickupDelivery from "../pages/Pickup&Delivery"

export default function Layout(){
    const [barIcon, setBarIcon] = useState(true)
    const[activeModal, setActiveModal] = useState(false)

    function clickBarIcon(){
        setBarIcon(prevBarIcon => prevBarIcon = !prevBarIcon)
    }
    console.log(activeModal)
    return(
        <>
            <Header clickBarIcon = {clickBarIcon} setBarIcon = {setBarIcon}/>
            {barIcon && <Outlet/>}
            {barIcon && <Footer/>}
            <PickupDelivery />
        </>
    )
}