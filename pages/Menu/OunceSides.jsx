import React from "react"
import { Link } from "react-router-dom"

export default function OunceSides(){
    return(
        <div className="ounce-sides">
            <h1>SERVED WARM, ON THE SIDE</h1>
            <h3>SLOW ROASTED CHICKPEAS & POTATOES</h3>
            <p>protein rich organic chickpeas & russett potatoes slow roasted with extra virgin olive oil and BFF seasoning to fudgy perfection // gluten, dairy, soy free // 100% plant based</p>
            <h3>SLOW ROASTED CHICKEN</h3>
            <p>juicy chicken slow roasted with BFF seasoning // gluten, dairy, soy free // antibiotic-free chicken</p>
            <h3>SLOW ROASTED PORK SHOULDER</h3>
            <p>our hand-pulled pork shoulder is slow roasted for hours until melty tender // gluten, dairy, soy free</p>
            <h3>BEN'S MILLET & BROWN RICE</h3>
            <p>protein-rich millet & brown rice cooked BFF style // gluten, dairy, soy free // 100% plant based</p>
            <h3>CLEAN VEGETABLES</h3>
            <p>fresh broccoli, cauliflower, & carrots flash steamed for max nutrient retention // gluten, dairy, soy free // 100% plant based</p>
            <Link data-aos="fade-up" data-aos-duration="300" to="https://order.online/business/-421746/en-US">Order Online</Link>
        </div>
    )
}