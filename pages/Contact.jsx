import React from "react"

export default function Contact(){
    const[formData, setFormData] = React.useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Subject: "",
        Message: ""
    })
    console.log(formData)

    function handleChange(event){
        setFormData(prevFormData => {
            const {name, value} = event.target

            return {...prevFormData, [name] : value }
        })
    }

    return(
        <div id="contact">
            <div className="contact-background">
                <div className="contact">
                    <h1 data-aos="fade-up">CONTACT US</h1>
                    <p data-aos="fade-up">Question? Suggestion? Special request? Get in touch and we'll reply as soon as we can.</p>
                </div>
                <form>
                    <p>Name<small>(required)</small></p>
                    <div className="name-form">
                        <div>
                            <label htmlFor="name">First Name</label>
                            <input type="text" id="name" name="FirstName" onChange={handleChange} value={formData.FirstName} required/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="LastName" onChange={handleChange} value={formData.LastName} required/>
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email<small>(required)</small></label>
                        <input type="email" id="email" name="Email" onChange={handleChange} value={formData.Email} required/>
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">Subject<small>(required)</small></label>
                        <input type="text" id="subject" name="Subject" onChange={handleChange} value={formData.Subject} required/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message<small>(required)</small></label>
                        <textarea id="message" name="Message" onChange={handleChange} value={formData.Message} required></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}