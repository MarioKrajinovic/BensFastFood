import React from "react"
import MenuHeader from "./MenuHeader"
import { Outlet } from "react-router-dom"
import MenuFooter from "./MenuFooter"

export default function MenuLayout(){
    return(
        <div id="menu">
            <div className="menu-background">
                <MenuHeader/>
                <Outlet/>
                <MenuFooter/>
            </div>
        </div>
    )
}