import React from "react"
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import img1 from "../images/roast1.jpeg";
import img2 from "../images/roast2.jpg";
import img3 from "../images/roast3.jpeg";
import missionImage from "../images/mission.jpg"
import { useMediaQuery } from 'react-responsive'
import ModalImage from "./ModalImage";
import {sliderImages} from "../SliderImages"

export default function Home(){
   const mobile = useMediaQuery({ query: '(max-width:425px)'})

   return(
      <div id="home">
         <div className="image-slider">
            <SimpleImageSlider
                  images={sliderImages}
                  width="100%"
                  height={mobile ? "75vh" : "79vh"}
                  showBullets={true}
                  autoPlay={true}
                  autoPlayDelay={7}
            />
         </div>
         <div className="welcome">
            <div className="welcome-background">
               <h1 data-aos="fade-up">WELCOME TO FAST FOOD, REIMAGINED.</h1>
               <p data-aos="zoom-in" data-aos-duration="500">Healthy meals should be as delicious and affordable as traditional fast food. So we’re working on that. </p>
               <p data-aos="zoom-in" data-aos-duration="500">We're bringing healthy cuisine to the world of fast food to help you eat a little better, a little more often.</p>
               <p data-aos="zoom-in" data-aos-duration="500">It's fast.</p>
               <p data-aos="zoom-in" data-aos-duration="500">It's cheap.</p>
               <p data-aos="zoom-in" data-aos-duration="500">It's healthy.</p>
               <p data-aos="zoom-in" data-aos-duration="500">It's “OMG SO GOOD I WANNA KEEP ORDERING” good. (in the kind words of a customer)</p>
               <Link data-aos="fade-up" to="locations" target="_blank">Order Direct Online</Link>
            </div>
         </div>
         <div className="slow-roast-bowls">
            <div className="slow-bg">
               <h1 data-aos="fade-up">THE SLOW ROAST BOWLS</h1>
               <p data-aos="zoom-in">
                  every bowl includes slow roasted protein, a base of fresh greens or hearty grains (or both!), choice of signature sauce,
                  steamed cauliflower, broccoli, carrots, roasted sunflower seeds, pickled red onions, fresh cucumber, & parsley garnish
               </p>
               <div className="roast-bowls">
                  <div data-aos="fade-up">
                     <Link to="menu"><img src={img1}/></Link>
                     <h4>SLOW ROASTED PORK SHOULDER</h4>
                     <p>slow roasted until it's fall-off-the-bone melty tender. no shortcuts to get there: just gentle heat, lots of time, and simple seasoning.</p>
                  </div>
                  <div data-aos="fade-up">
                     <Link to="menu"><img src={img2}/></Link>
                     <h4>SLOW ROASTED CHICKEN</h4>
                     <p>juicy chicken slow roasted for hours with BFF seasoning until it's just perfectly succulent. this flavor only comes slowly.</p>
                  </div>
                  <div data-aos="fade-up">
                     <Link to="menu"><img src={img3}/></Link>
                     <h4>SLOW ROASTED CHICKPEA & POTATO</h4>
                     <p>protein rich organic chickpeas & potatoes slow roasted with extra virgin olive oil and BFF seasoning. fudgy perfection.</p>
                  </div>
               </div>
               <div className="allergies">
                  <p data-aos="fade-right" className="title"><b>Allergies or dietary restrictions? We got you.</b></p>
                  <p data-aos="fade-right"><b>Gluten, soy, dairy, fish allergy</b>? Rejoice! Our entire menu is gluten, dairy, soy, and fish free* (trace amounts from suppliers with cross-processing facilities may be present) </p>
                  <p data-aos="fade-right"><b>Vegan, vegetarian</b>? Eat away! Everything on our menu aside from the meat is plant based.</p>
                  <p data-aos="fade-right"><b>Low carb / keto</b>? Bon appetit! Our garden bowls are designed with you in mind - light on carbs, full on protein and healthy fats.</p>
               </div>
               <div className="roast-buttons">
                  <Link data-aos="fade-up" to="locations" target="_blank">Order Online</Link>
                  <Link data-aos="fade-up" to="menu">See the Menu</Link>
               </div>
            </div>
            <div className="home-mission">
               <div className="mission-text" data-aos="fade-right">
                  <p>WE'RE ON A MISSION TO MAKE HEALTHY FOOD </p>
                  <p className="second">THE MOST DELICIOUS, AFFORDABLE FOOD</p>
                  <p className="third">THERE IS</p>
                  <Link to="mission">Learn more</Link>
               </div>
               <div className="mission-image">
                  <img src={missionImage}/>
               </div>
            </div>
            <div className="home-our-friends">
               <div className="home-background">
                  <div className="our-friends">
                     <h1 data-aos="fade-up">FOOD FOR OUR FRIENDS AND FAMILIES</h1>
                     <p data-aos="zoom-in" data-aos-duration="500">We've got a pretty simple approach to food: </p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>erve food we'd feel proud to share with our friends and families in our own homes.</b></p>
                     <p data-aos="zoom-in" data-aos-duration="500">We're constantly sourcing the cleanest ingredients we can find, focusing on serving the simplest, freshest food out there, just like we would if we were shopping for our friends and families. Our menu is focused so we can keep our food fresh, minimize waste, and negotiate discounts for better ingredients without the premium price tags. </p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>We're obsessed with making the best meals we can, because we're serving it to our friends and families.</b></p>
                  </div>
                  <div className="our-approach">
                     <h1 data-aos="fade-up">OUR APPROACH</h1>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>cook from scratch.</b> we push all our food to be as minimally processed as possible.</p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>focus on produce.</b> everything except the meat we serve is plant-based.</p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>better, cleaner protein.</b> source only from suppliers we trust, no preservatives ever, organic where possible.</p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>keep it simple.</b> our menu is focused so our food stays fresh. it's that simple.</p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>zero refined sugars or artificial sweeteners.</b> not even stevia, honey, or agave.</p>
                     <p data-aos="zoom-in" data-aos-duration="500"><b>gluten, dairy, and soy free.</b> yep, the entire menu.</p>
                  </div>
                  <div>
                     <small data-aos="zoom-in" data-aos-duration="500">
                        While none of our ingredients themselves contain gluten, dairy, or soy, some of our suppliers process food in the same facility as those ingredients, 
                        so we cannot guarantee our food is free of trace amounts of these allergens
                  </small>
                  </div>
               </div>
               </div>
            </div>
            <div className="followthe-journey">
               <Link to="https://www.instagram.com/bensfastfood/">FOLLOW THE JOURNEY</Link>
               <div className="follow-images">
                  <ModalImage/>
               </div>
            </div>
        </div>
    )
}