import React from "react"
import { NavLink } from "react-router-dom"

export default function MenuHeader(){
    const active = {
        borderBottom: "1px solid #364254"
    }
    return(
        <nav>
            <NavLink style={({isActive}) => isActive ? active : null} to="." end>SIGNATURE BOWLS</NavLink>
            <NavLink style={({isActive}) => isActive ? active : null} to="8-ounce-sides">8 OUNCE SIDES</NavLink>
            <NavLink style={({isActive}) => isActive ? active : null} to="smoothies">SMOOTHIES</NavLink>
            <NavLink style={({isActive}) => isActive ? active : null} to="sweet-things">SWEET THINGS</NavLink>
        </nav>
    )
}