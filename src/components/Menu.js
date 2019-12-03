import React from 'react'
import {Image, Container, Header} from "semantic-ui-react"
import MenuImg from "../Images/Menu.jpeg"
import Grams from './Instagram'

const Menu = () => (
 <Container>
 <Header.Content as="h1">Ever-Changing Menus</Header.Content>
 <Header.Content as="p">We can make a slide show of menu images or hard code menus, I suggest starting a instagram account just for menus and then run them here. That way you can always have the most up to date menus.</Header.Content>
   <Image
    src={MenuImg}
    width="100%"
   />
   <br/>
   <div className="gramViews">
   <Grams/>
   </div>
 </Container>
)

export default Menu;