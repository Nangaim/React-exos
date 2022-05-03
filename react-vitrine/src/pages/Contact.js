import ContactForm from "../components/ContactForm"
import Logo from "../components/Logo"
import Mouse from "../components/Mouse"
import Navigation from "../components/Navigation"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SocialNetwork from "../components/SocialNetwork"
import Button from "../components/Button"

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0642844284" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("copié")}
                >
                  06 42 84 42 84
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("copié")}
                >
                  fsagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>From scratch - 2022</p>
          </div>
        </div>
        <Button left="/projet-4" />
      </div>
    </main>
  )
}

export default Contact
