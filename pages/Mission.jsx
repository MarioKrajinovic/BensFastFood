import React from "react"
import image1 from "../images/mission.image.jpeg"
import image2 from "../images/ben-image.jpeg"

export default function Mission(){
    return(
        <div id="mission">
            <div className="mission">
                <div className="mission-text">
                    <h1 data-aos="zoom-in" data-aos-duration="500">WE'RE ON A MISSION.</h1>
                    <p data-aos="zoom-in" data-aos-duration="500">From the very beginning, we wanted to do fast food differently. We anchored ourselves on a single mission:</p>
                    <h4 data-aos="zoom-in" data-aos-duration="500">Make nutritious food the most delicious, affordable food there is.</h4>
                    <p data-aos="zoom-in" data-aos-duration="500">We're not serious about a lot of things, but we are about our mission. So we salted it, bottled it up, and preserved it… legally. </p>
                    <h4 data-aos="zoom-in" data-aos-duration="500">We incorporated as a Benefit Corporation, sealing our mission for good in the founding charter of the company.</h4>
                    <p data-aos="zoom-in" data-aos-duration="500">Our dream is to share our food with every community hoping to find affordable, honest-to-goodness eats.</p>
                </div>
                <div className="image-mission" data-aos="fade-up"><img src={image1}/></div>
            </div>
            <div className="story">
                <h1 data-aos="fade-up" data-aos-duration="500">BEN AND THE BFF STORY</h1>
                <div className="story-info">
                    <div className="story-image" data-aos="fade-up" data-aos-duration="800"><img src={image2}/></div>
                    <div className="story-text">
                        <p data-aos="fade-up">Ben's Fast Food was inspired by my childhood growing up in California's central valley. My hometown, Bakersfield, is surrounded by the most productive farms in America. Yet even here, so close to some of the freshest, cheapest produce in the country, the most affordable restaurants around are still traditional fast food joints.</p>
                        <h4 data-aos="fade-up">This is the reality most of us face: if you want to eat an affordable, nutritious meal, you've got to make it yourself.</h4>
                        <p data-aos="fade-up">I started Ben's Fast Food with a dream of changing that story: serving healthy meals as affordable and delicious as traditional fast food. For three years, I experimented with hundreds of recipes, searched for suppliers offering clean label ingredients, and fed a few thousand friends, family, and neighbors at dinner tastings in my small apartment. BFF came to life through these tastings.</p>
                        <p data-aos="fade-up">Healthy fast food should be a thing. It's possible - maybe even likely - that you've had this same thought too. Well, this restaurant is for you.</p>
                        <h4 data-aos="fade-up">Ben's Fast Food exists because of the thousands of folks who wished healthy fast food existed, tried the food, shared with friends, and helped bring to life something we all wish were possible. </h4>
                        <p data-aos="fade-up">I hope you try our food. I hope you'll share with friends.  Most of all, I hope you love it.  </p>
                        <p data-aos="fade-up">-Ben</p>
                    </div>
                </div>
            </div>
        </div>
    )
}