import React from "react"
import { Link } from "react-router-dom"
import locationData from "../Location"

export default function Locations(){
    const locations = locationData.map(location => {
        return(
            <div className="location" key={location.adress}>
                <iframe data-aos="fade-up" data-aos-duration="500" src={location.map} loading="eager"></iframe>
                <h3 data-aos="fade-up" data-aos-duration="300">{location.name}</h3>
                <Link data-aos="fade-up" data-aos-duration="300" to={location.buttonLink} className="button" target="_blank">Order Online</Link>
                <Link data-aos="fade-up" data-aos-duration="300" to={location.linkAdress}>{location.adress}</Link>
                <Link data-aos="fade-up" data-aos-duration="300" to={location.linkCity}>{location.city}</Link>
                <h4 data-aos="fade-up" data-aos-duration="300">Hours</h4>
                <p data-aos="fade-up" data-aos-duration="300">{location.hours1}</p>
                <p data-aos="fade-up" data-aos-duration="300">{location.hours2}</p>
            </div>
        )
    })
    return(
        <div id="locations">
            <h1 data-aos="fade-up" data-aos-duration="200">LOCATIONS</h1>
            <div className="locations-data">{locations}</div>
        </div>
    )
}