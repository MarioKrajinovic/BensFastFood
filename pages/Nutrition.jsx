import React from "react"
import { Link } from "react-router-dom"
import nutrition from "../images/nutrition.jpg"
import alergy from "../images/alergy.jpg"
import { useMediaQuery } from 'react-responsive'


export default function Nutrition(){
    const [scrollPosition, setScrollPosition] = React.useState(0)

    const tablet = useMediaQuery({ query: '(max-width:768px)'})

    const mobile = useMediaQuery({ query: '(max-width:425px)'})

    React.useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, []) 
    return(
        <div id="nutrition">
            <div className="nutrition-info">
                <h1 data-aos="fade-up" data-aos-duration="500">NUTRITION INFORMATION</h1>
                <p data-aos="fade-up" data-aos-duration="500">Hello fellow nutrition facts aficionado! We're glad you're here! We spent years developing our recipes to make sure we're crafing meals as nutritious as they are delicious, which we hope you'll see for yourself below. We're proud of the food we're making for you each day, and hope you'll enjoy BFF even more after reading! Please note that these are estimates based on standard portion sizes, and actual amounts may vary (we try to keep as close to this as possible though!).</p>
                <img data-aos="fade-up" data-aos-duration="800" src={nutrition}/>                
            </div>
            <div className="alergy-info">
                <h1 data-aos="fade-up">ALLERGY INFORMATION</h1>
                <p data-aos="fade-up">We get how difficult it can be to find food that fits your dietary needs (our founder's wife has a gluten allergy, so we get it!). We've done our best to accommodate as many allergies as possible in our food by carefully selecting ingredients that avoid some of the most common allergens. While we try our best on this front, we cannot guarantee our menu is free from trace amounts of allergens from our suppliers, distributors, or from cross contamination within our kitchen (see chart and notes below). We hope you find the following information useful, and can enjoy our food with peace of mind.</p>
                <h3 data-aos="fade-up">*GLUTEN, DAIRY, PEANUTS, EGGS, FISH, SHELLFISH, MUSTARD: OUR ENTIRE MENU IS FREE OF THESE INGREDIENTS.<br/><hr className={scrollPosition > 1480 && !tablet ? "bottom-line1" : "" || tablet && !mobile && scrollPosition > 1200? "bottom-line1" : "" || mobile && scrollPosition > 1000? "bottom-line1" : ""}/></h3>
                <p data-aos="fade-up">*If you have a severe allergy, please note we purchase some ingredients from manufacturers and distributors that may process these ingredients in the same facility, so we cannot guarantee that trace amounts of these ingredients are not present in our food. In the future, we'd *love* (we're dreaming of the day!) to be able to certify that our food is completely free of these ingredients at all of our suppliers. Until then, please exercise caution for your personal needs.</p>
                <h3 data-aos="fade-up">SOY, SESAME, MUSHROOMS & CROSS CONTAMINATION ALLERGY NOTE:<br/><hr className={scrollPosition > 1680 && !tablet ? "bottom-line2" : "" || tablet && !mobile && scrollPosition > 1600? "bottom-line2" : "" || mobile && scrollPosition > 1300? "bottom-line2" : ""}/></h3>
                <p data-aos="fade-up">Although none of our menu items contain sesame, soy, or mushrooms we do use these ingredients in our kitchen for our sister brand, <Link to="https://umamiexpress.co/">Umami Express</Link>. We use separate containers for these ingredients, and generally try to avoid cross-contamination, but cannot guarantee these items are not present in trace amounts. As a result, we cannot guarantee cross-contamination with these allergens or with any listed below will not occur.</p>
                <h3 data-aos="fade-up">ADDITIONAL ALLERGY INFORMATION:<br/><hr className={scrollPosition > 1900 && !mobile ? "bottom-line3" : "" || mobile && scrollPosition > 1700 ? "bottom-line3" : ""}/></h3>
                <p data-aos="fade-up">If you have additional questions for an allergy not listed, you can send us a note at hello@bensfastfood.com.</p>
                <img data-aos="fade-up" data-aos-duration="800" className="alergy-image" src={alergy}/>.
            </div>
        </div>
    )
}