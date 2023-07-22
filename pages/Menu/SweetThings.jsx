import React from "react"
import { Link } from "react-router-dom"

export default function SweetThings(){
    return(
        <div className="sweet-things">
            <h1>TREAT YO'SELF. ZERO REFINED SUGAR. NO ARTIFICIAL SWEETENERS. JUST GOOD, CLEAN DELICIOUSNESS.</h1>
            <h3>DARK CHOCOLATE CASHEW PUDDING</h3>
            <p>sweetened with whole dates only, topped with decaf espresso and sea salt</p>
            <Link data-aos="fade-up" data-aos-duration="300" to="https://order.online/business/-421746/en-US">Order Online</Link>
        </div>
    )
}