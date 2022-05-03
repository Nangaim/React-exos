import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const formMess = document.querySelector(".formMessage")

    emailjs
      .sendForm(
        "service_8q28g2a",
        "template_2dk6m9n",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset()
          formMess.innerHTML = "<p className='success'>Message envoyé !</P>"
          setTimeout(() => {
            formMess.innerHTML = ""
          }, 2500)
        },
        (error) => {
          console.log(error.text)
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</P>"
          setTimeout(() => {
            formMess.innerHTML = ""
          }, 2500)
        }
      )
  }

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  )
}

export default ContactForm
