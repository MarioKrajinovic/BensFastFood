import React from "react"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import arrow from "../images/arrow.png"
import cateringData from "../CateringFAQS"
import img from "../images/catering.jpg"

export default function Catering(){
    //function to toggle the answer when question is clicked on FAQ page

    const [clickedQuestion, setClickedQuestion] = React.useState([
        {
            id: 1,
            clicked: false
        },
        {
            id: 2,
            clicked: false
        },
        {
            id: 3,
            clicked: false
        },
        {
            id: 4,
            clicked: false
        },
        {
            id: 5,
            clicked: false
        },
        {
            id: 6,
            clicked: false
        },
        {
            id: 7,
            clicked: false
        },
        {
            id: 8,
            clicked: false
        },
        {
            id: 9,
            clicked: false
        }
    ])

    function getAnswer(id){
        setClickedQuestion(prevClickedQuestion => prevClickedQuestion.map(question => {
            if (question.id === id){
                return {...question, "clicked": !question.clicked}
            }
            else{
                return question
            }
        }))
    }

    const cateringInfo = cateringData.map(info => {
        return(
            <div className="info" key={info.id} data-aos="fade-up">
                <div className="question" onClick={() => getAnswer(info.id)}>
                    <div className="arrow"><img className={clickedQuestion[info.id - 1].clicked === true ? "change" : ""} src={arrow}/></div>
                    <div><h2>{info.question}</h2></div>
                </div>
                <div className={clickedQuestion[info.id - 1].clicked === true ? "show-answer" : "answer"}><p>{info.answer}</p></div>
            </div>
        )
    })

    const[formData, setFormData] = React.useState({
        name: "",
        lastName: "",
        email: "",
        message: ""
    })
    console.log(formData)

    function handleChange(event){
        setFormData(prevFormData => {
            const{name, value} = event.target
            return {...prevFormData, [name] : value}
        })
    }
    return(
        <div id="catering">
            <div className="catering-bg">
                <h1 data-aos="fade-up">BEN'S FAST FOOD CATERING EASY AS 1 2 3</h1>
                <ol data-aos="zoom-in" data-aos-duration="500">
                    <li>Check out the <Link to="https://order.online/business/catering-by-bens-fast-food-11339056">catering menu</Link></li>
                    <li>Choose pickup or delivery</li>
                    <li>Place the order directly online, up to 5 days in advance</li>
                </ol>
                <Link data-aos="fade-up" className="link" to="https://order.online/business/catering-by-bens-fast-food-11339056">Order Catering Now</Link>
                <Marquee 
                    className="marquee" 
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[231, 230, 230]}
                    gradientWidth={"20%"}
                >
                    <h4>&#9733;&#9733;&#9733;&#9733;&#9733;NEWFOUND FAVORITE, FOOD IS FRESH, FILLING BUT NOT TOO HEAVY. HAVE ORDERED MULTIPLE TIMES?&#9733;&#9733;&#9733;&#9733;&#9733;EVERYONE LOVED THEIR FOOD THE FIRST TIME, SO WE DID IT AGAIN. RAVE REVIEWS FROM THE CREW!&#9733;&#9733;&#9733;&#9733;&#9733;TEAM LOVED IT, VERY TASTY AND FILLING WITHOUT THAT SLUGGISH FOOD COMA FEELING!&#9733;&#9733;&#9733;&#9733;&#9733;PEOPLE IN MY OFFICE LOVED THESE FRESH AND TASTY BOWLS. BEN'S OFFERS A WIDE VARIETY, AND I APPRECITAED THEIR ATTENTION TO DETAL. WE WILL BE ORDERING FROM BEN'S AGAING&#9733;&#9733;&#9733;&#9733;&#9733;THE TEAM LOVED THE FOOD. THE PORTIONS WERE JUST PERFECT. ON TIME AND PROFFESSIONAL DELIVERY.HIGHLY RECOMMEND!</h4>
                </Marquee>
            </div>
            {/* <div className="background-image">
                <svg class="section-divider-svg-stroke" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="53%" stop-color="#e7e6e6" />
                          <stop offset="54%" stop-color="#e7e6e6" />
                        </linearGradient>
                    </defs>
                    <path class="section-divider-stroke" d="M-1.006, 0.906 L-1.006, 0.953 c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0" vector-effect="non-scaling-stroke" fill="url(#myGradient)"></path>
                </svg>
            </div>    */}         
            <div className="catering-team">
                <h1 data-aos="fade-up">FOR TEAMS, OFFICES, FRIENDS, AND GATHERINGS</h1>
                <ul>
                    <li data-aos="fade-up"><strong>Delicious & healthy meals:</strong> our mission is to make healthy food as delicious and crave-able as possible. Our menu is crafted to highlight fresh produce, bbq-inspired slow roasted proteins, and our signature sauces to add a unique spin on healthy cuisine.</li>
                    <li data-aos="fade-up"><strong>Groups of 5 to 500 people:</strong> we can cater for any group of 5 to 500 people. For orders of 50-100 people, we kindly request advance notice 24 hours prior to the service.  For orders of 100+, we kindly request 48 hours notice prior to the service.</li>
                    <li data-aos="fade-up"><strong>Individually packaged bowls:</strong> all our bowls are individually packaged for quick and easy service.</li>
                    <li data-aos="fade-up"><strong>Diet & allergy accommodations:</strong> our entire menu is gluten, dairy, and soy free, and we have options compatible for folks who eat low carb, vegetarian, and vegan. See our <Link to="nutrition">nutrition guide</Link> for more information.</li>
                    <li data-aos="fade-up"><strong>Portions fit for catering:</strong> our catered bowls come with larger portions and pre-set combinations to facilitate easier ordering for especially hungry people.</li>
                </ul>
            </div>
            {/* <div className="background-image">
                <svg class="section-divider-svg-stroke1" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id="myGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="53%" stop-color="#e7e6e6" />
                          <stop offset="53%" stop-color="rgba(54,66,84, 1)" />
                        </linearGradient>
                    </defs>
                    <path class="section-divider-stroke" d="M-1.006, 0.906 L-1.006, 0.953 c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0" vector-effect="non-scaling-stroke" fill="url(#myGradient1)"></path>
                </svg>
            </div>       */}
            <div className="catering-faqs">
                <h1 data-aos="fade-up">CATERING FAQS</h1>
                <div className="faqs">
                    {cateringInfo}
                </div>
            </div>
            {/* <div className="background-image">
                <svg class="section-divider-svg-stroke2" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id="myGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="53%" stop-color="rgba(54,66,84, 1)" />
                          <stop offset="53%" stop-color="#e7e6e6" />
                        </linearGradient>
                    </defs>
                    <path class="section-divider-stroke" d="M-1.006, 0.906 L-1.006, 0.953 c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0" vector-effect="non-scaling-stroke" fill="url(#myGradient2)"></path>
                </svg>
            </div>       */}
            <div className="more-questions">
                <h1 data-aos="fade-up">MORE QUESTIONS?</h1>
                <h1 data-aos="fade-up">LET'S TALK CATERING.</h1>
                <form>
                    <p>Name<small>(required)</small></p>
                    <div className="name-form">
                        <div>
                            <label htmlFor="name">First Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} required/>
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email<small>(required)</small></label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} required/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message<small>(required)</small></label>
                        <textarea id="message" name="message" onChange={handleChange} value={formData.message} required></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
           {/*  <div className="background-image">
                <svg class="section-divider-svg-stroke3" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id="myGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="53%" stop-color="#e7e6e6" />
                          <stop offset="53%" stop-color="#e7e6e6" />
                        </linearGradient>
                    </defs>
                    <path class="section-divider-stroke" d="M-1.006, 0.906 L-1.006, 0.953 c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0c0.251,0.06016 0.251,0.06016 0.502,0 s0.251,-0.06016 0.502,0" vector-effect="non-scaling-stroke" fill="url(#myGradient3)"></path>
                </svg>
            </div>      */}
        </div>
    )
}