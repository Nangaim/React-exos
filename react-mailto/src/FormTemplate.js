import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const FormTemplate = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const formMess = document.querySelector(".form-message")

    emailjs
      .sendForm(
        "service_8q28g2a",
        "template_2dk6m9n",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text)
          form.current.reset()
          formMess.innerHTML = "<p class='success'>Message envoyé !</P>"
          setTimeout(() => {
            formMess.innerHTML = ""
          }, 2500)
        },
        (error) => {
          console.log(error.text)
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</P>"
          setTimeout(() => {
            formMess.innerHTML = ""
          }, 2500)
        }
      )
  }

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
      <div className="form-message"></div>
    </div>
  )
}

export default FormTemplate
