import React from "react"
import { NavLink, Link } from "react-router-dom"

export default function Menu(){
    return(
        <div className="signature-bowls">
            <div>
                <h1>SIGNATURE BOWLS</h1>
                <h2>EVERY BOWL INCLUDES SLOW ROASTED PROTEIN, CHOICE OF SIGNATURE SAUCES, CAULIFLOWER, BROCCOLI, CARROTS, ROASTED SUNFLOWER SEEDS, PICKLED RED ONIONS, FRESH CUCUMBER, AND PARSLEY GARNISH</h2>
                <h3>SLOW ROASTED CHICKEN</h3>
                <p>slow roasted for hours with BFF seasoning until it's juicy and fall-off-the-bone tender.</p>
                <h3>SLOW ROASTED PORK SHOULDER</h3>
                <p>slow roasted until it's hand pulled to tender goodness. no shortcuts to get there: just gentle heat, lots of time, and simple seasoning</p>
                <h3>SLOW ROASTED CHICKPEAS & POTATOES</h3>
                <p>protein-rich chickpeas & potatoes slow roasted with extra virgin olive oil and BFF seasoning. fudgy perfection.</p>
            </div>
            <div>
                <h1>PICK A BASE</h1>
                <h3>HEARTY</h3>
                <p>with protein rich millet & brown rice</p>
                <h3>GARDEN</h3>
                <p>with fresh spring greens mix</p>
                <h3>MIXED</h3>
                <p>with half grains & half greens</p>
            </div>
            <div>
                <h1>SAUCE IT UP</h1>
                <h3>SMOKY CHIPOTLE</h3>
                <p>smoky, spicy</p>
                <h3>BEN'S RANCH</h3>
                <p>no dairy, all the fun</p>
                <h3>LEMON THYME</h3>
                <p>lemony, herbal, zesty</p>
                <h3>ROSEMARY BALSAMIC</h3>
                <p>earthy, tangy, sweet</p>
            </div>
            <div>
                <h1>(OPTIONAL) ADD SOME EXTRA FRIENDS</h1>
                <h2>ADD AVOCADO</h2>
                <h2>ADD WALNUTS</h2>
                <h2>EXTRA CHICKEN</h2>
                <h2>EXTRA PORK SHOULDER</h2>
                <h2>EXTRA CHICKPEAS & POTATOES</h2>
            </div>
            <Link data-aos="fade-up" data-aos-duration="300" to="https://order.online/business/-421746/en-US">Order Online</Link>
        </div>
    )
}