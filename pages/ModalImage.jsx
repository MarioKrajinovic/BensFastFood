import React from "react"
import modalImages from "../ModalImages"

export default function ModalImage(){
    const[active, setActive] = React.useState(false)
    const[id, setId] = React.useState(0)
    function clickModal(id){
        setActive(true)
        setId(id)
        document.querySelector("body").style.overflow = "hidden"
    }
    const modal = modalImages.map(image => {
        return(
        <div key={image.id}>
            <div className="image" onClick={() => clickModal(image.id)}><img src={image.url}/></div>
            <div className={active && id === image.id ? "modal-image-active" : "modal-image"}>
                <img src={image.url}/>
                <div className="modal">
                   <span className="close" onClick={() => {
                    setActive(false)
                    document.querySelector("body").style.overflow = "auto"
                    }}>&times;</span>
                </div>
            </div>
        </div>
        )
    })
    return(
        <>
            {modal}
        </>
    )
}