import React from 'react'
import {Image, Header} from "semantic-ui-react"
import ElysianMenu from "../Images/ElysianMenu.png"

const Menu = () => (
 <>
 <Header.Content as="h1" style={{textAlign: 'center'}}>Our Seasonal Offerings</Header.Content>
 <Header.Content as="p" style={{textAlign: 'center'}}>(Custom Menus Upon Request)</Header.Content>

<Image
  src={ElysianMenu}
  alt="menu"

/>

 </>
)

export default Menu;