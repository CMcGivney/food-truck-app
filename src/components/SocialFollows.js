import React from "react"
import {Header} from "semantic-ui-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="social-container">
      <Header as="h3" className="contactHead">Let's Connect</Header>
     
      <a href="https://twitter.com/chris_mcgivney" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/nomadic_boots/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/nomadic_boots/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  )
}