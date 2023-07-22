import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <div className="join-to-family">
                <div className="join-background">
                    <div className="join">
                        <h2 data-aos="fade-up">JOIN THE BFFAMILY</h2>
                        <p data-aos="fade-up">Be the first to know about all things BFF.</p>
                    </div>
                    <div className="join-form" data-aos="fade-up">
                        <p>Name<small>(required)</small></p>
                        <form>
                            <div className="join-form-name">
                                <div className="first-name">
                                    <label htmlFor="first-name">First Name</label>
                                    <input id="first-name" type="text" name="first-name"/>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input id="last-name" type="text" name="last-name"/>
                                </div>
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email<small>(required)</small></label>
                                <input id="email" type="email" name="email" placeholder="hello@hello.com"/>
                            </div>
                            <div><button type="submit">Join</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-links">
                    <div className="category" data-aos="fade-up" data-aos-duration="500">
                        <p>Eat</p>
                        <div>
                            <Link to="menu">Menu</Link>
                            <Link to="catering">Catering</Link>
                            <Link to="locations">Locations</Link>
                        </div>
                    </div>
                    <div className="category" data-aos="fade-up" data-aos-duration="800">
                        <p>Connect</p>
                        <div>
                            <Link to="contact">Contact</Link>
                            <Link to="https://www.instagram.com/bensfastfood/" target="_blank">Instagram</Link>
                            <Link to="https://www.facebook.com/bensfastfood" target="_blank">Facebook</Link>
                        </div>
                    </div>
                    <div className="category" data-aos="fade-up" data-aos-duration="1000">
                        <p>Learn</p>
                        <div>
                            <Link to="mission">Mission</Link>
                            <Link to="nutrition">Nutrition</Link>
                            <Link to="faqs">FAQs</Link>
                        </div>
                    </div>
                </div>
                <div className="signature" data-aos="fade-up">Ben's Fast Food</div>
            </div>
        </footer>
    )
}