import React from "react"
import { Link } from "react-router-dom"

export default function Smoothies(){
    return(
        <div className="smoothies">
            <h1>MINIMALLY PROCESSED AND PACKED WITH WHOLE FRUIT & VEGETABLES. AS NICE TO DRINK AS IT IS TO THINK ABOUT.</h1>
            <h3>TART GREEN SMOOTHIE</h3>
            <p>spinach, pineapple, banana, lime juice, bff coconut milk</p>
            <Link data-aos="fade-up" data-aos-duration="300" to="https://order.online/business/-421746/en-US">Order Online</Link>
        </div>
    )
}