import React from 'react'
import {Image, Container, Header} from "semantic-ui-react"
import MenuImg from "../Images/Menu.jpeg"
import Grams from './instagram'

const Menu = () => (
 <Container>
 <Header as="h1">Ever-Changing Menus</Header>
 <Header as="p">We can make a slide show of menu images or hard code menus, I suggest starting a instagram account just for menus and then run them here. That way you can always have the most up to date menus.</Header>
   <Image
    src={MenuImg}
    width="100%"
   />
   <br/>
   <Grams/>
 </Container>
)

export default Menu;