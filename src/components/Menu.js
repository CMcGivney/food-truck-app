import React from 'react'
import {Image, Header} from "semantic-ui-react"
import ElysianMenu from "../Images/ElysianMenu.png"

const Menu = () => (
 <>
  <Header.Content as="h1" className="menuHeader">Our Seasonal Offerings</Header.Content>
  <Header.Content as="p" className="menuMeta">*Custom Menus Upon Request</Header.Content>
   <div className="imageContainer">
    <Image
     src={ElysianMenu}
     alt="menu"
     className="menuImage"
     width="80%"
    />
  </div>
 </>
)

export default Menu;