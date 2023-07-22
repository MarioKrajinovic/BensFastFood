import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MenuLayout from "./components/MenuLayout"
import Catering from "./pages/Catering"
import Mission from "./pages/Mission"
import Locations from "./pages/Locations"
import NoutFound from "./pages/NotFound"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Nutrition from "./pages/Nutrition"
import FAQS from "./pages/FAQS"
import SignatureBowls from "./pages/Menu/SignatureBowls"
import OunceSides from "./pages/Menu/OunceSides"
import Smoothies from "./pages/Menu/Smoothies"
import SweetThings from "./pages/Menu/SweetThings"
import AOS from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="menu" element={<MenuLayout />}>
            <Route index element={<SignatureBowls/>}/>
            <Route path="8-ounce-sides" element={<OunceSides/>}/>
            <Route path="smoothies" element={<Smoothies/>}/>
            <Route path="sweet-things" element={<SweetThings/>}/>
        </Route>
        <Route path="catering" element={<Catering />}/>
        <Route path="mission" element={<Mission />}/>
        <Route path="locations" element={<Locations />}/>
        <Route path="*" element={<NoutFound />}/>
        <Route path="search" element={<Search />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="nutrition" element={<Nutrition />}/>
        <Route path="faqs" element={<FAQS />}/>
    </Route>
))

function App(){
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return( 
        <RouterProvider router={router}/>        
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />)