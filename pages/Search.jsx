import React from "react"

export default function Search(){
    return(
        <form id="search">
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="search" placeholder="Type to search..."/>
        </form>
    )
}