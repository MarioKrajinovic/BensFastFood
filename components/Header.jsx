import React, { useRef, useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import mail from "../images/mail.png"
import ben from "../images/ben.png"

export default function Header(props){

    const[clicked, setClicked] = React.useState(false)

    const [scrollPosition, setScrollPosition] = useState(0)

    const mobile = useMediaQuery({ query: '(max-width:425px)'})

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, []) 

    const {pathname} = useLocation()

    const [bgColor, setBgColor] = useState(false)

    React.useEffect(() => {

        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
        if(pathname === "/faqs" || pathname === "/contact"){
            setBgColor(true)
        }
        else{
            setBgColor(false)
        }
    }, [pathname]);
    
    const changeHeight = {
        height: "25%",
        transition: "1s"
    }
    
    const changePosition = {
        top: "42%",
        transition: "1s"
    }
    const changeNavHeight = {
        height: "80vh",
    }
    const changeOpacity = {
        backgroundColor: "rgba(231, 230, 230, 0)"
    }
    const navbar = useRef()

    const showNavbar = () => {
        navbar.current.classList.toggle("responsive_nav")
        setClicked(prevClicked => prevClicked = !prevClicked)
    }
    const navbarColor = document.getElementById("responsive-header")
    clicked ? navbarColor.style.backgroundColor = "rgba(231, 230, 230, 1)" : ""

    const active = {
        borderBottom: "1px solid #364254"
    }
    const whiteBg = {
        backgroundColor: "white"
    }
    return(
        <>
        <div id="header" style={scrollPosition < 10 ? changeOpacity : null || bgColor ? whiteBg : null}>
            <nav className="navlinks" data-aos="fade-up">
                <NavLink to="menu" style={({isActive}) => isActive ? active : null}>Menu</NavLink>
                <NavLink to="catering" style={({isActive}) => isActive ? active : null}>Catering</NavLink>
                <NavLink to="mission" style={({isActive}) => isActive ? active : null}>Mission</NavLink>
                <NavLink to="locations" style={({isActive}) => isActive ? active : null}>Locations</NavLink>
            </nav>
            <div className="ben" data-aos="fade-up"><Link to=".."><img src={ben}  alt="ben's fast food image"/></Link></div>
            <div className="links">
                <Link to="https://www.instagram.com/bensfastfood/" target="_blank"><img src={instagram} alt="instagram"/></Link>
                <Link to="https://www.facebook.com/bensfastfood" target="_blank"><img src={facebook} alt="facebook"/></Link>
                <Link to="" target="_blank"><img src={mail} alt="mail"/></Link>
                <Link to="locations" target="_blank" className="order" data-aos="fade-up">Order Online</Link>
            </div>
        </div>

        <div id="responsive-header" style={
            scrollPosition > 10 && !mobile ? changeHeight : null ||
            scrollPosition < 10 ? changeOpacity : null ||
            bgColor ? whiteBg : null          
        }>
            <div className="responsive-ben" data-aos="fade-up"><Link to=".."><img src={ben} alt="ben's fast food image" onClick={() => 
            {
                setClicked(false)
                navbar.current.classList.remove("responsive_nav")
                props.setBarIcon(true)
            }}/></Link></div>
            <div className="responsive-navbar" ref={navbar} style={scrollPosition > 10 && !mobile ? changeNavHeight : null}>
                <nav className="responsive-navlinks" data-aos="fade-up">
                    <NavLink to="menu" style={({isActive}) => isActive ? active : null} onClick={() => {
                        showNavbar()
                        props.clickBarIcon()
                        }}>Menu</NavLink>
                    <NavLink to="catering" style={({isActive}) => isActive ? active : null} onClick={() => {
                        showNavbar()
                        props.clickBarIcon()
                        }}>Catering</NavLink>
                    <NavLink to="mission" style={({isActive}) => isActive ? active : null} onClick={() => {
                        showNavbar()
                        props.clickBarIcon()
                        }}>Mission</NavLink>
                    <NavLink to="locations" style={({isActive}) => isActive ? active : null} onClick={() => {
                        showNavbar()
                        props.clickBarIcon()
                        }}>Locations</NavLink>
                </nav>
                <div className="responsive-links">
                    <div className="a">
                        <Link to="https://www.instagram.com/bensfastfood/" target="_blank"><img src={instagram} alt="instagram"/></Link>
                        <Link to="https://www.facebook.com/bensfastfood" target="_blank"><img src={facebook} alt="facebook"/></Link>
                        <Link to="*" target="_blank"><img src={mail} alt="mail"/></Link>
                    </div>
                    <Link to="locations" className="order" target="_blank">Order Online</Link>
                </div>
            </div>
            <div className="bars" onClick={() => {
                showNavbar()
                props.clickBarIcon()
            }
            } style={scrollPosition > 10 && !mobile ? changePosition : null}>
                <div className={clicked ? "bar1 change1" : "bar1"}></div>
                <div className={clicked ? "bar2 change2" : "bar2"}></div>
            </div>
        </div>
        </>
        
    )
}