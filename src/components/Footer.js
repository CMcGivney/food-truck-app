import React from 'react'
import {Header, Menu} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
     <>
      <Menu style={{backgroundColor: "tan",}} pointing secondary className="footer" >
       <Menu.Item>
        <Header.Content className="mainFooter">
         The Elysian
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
        <a className="email" href="tel:+1-385-368-3525">1-(385)-368-3525</a>
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         {/* business address here */}
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         <a className="email" href="mailto:asuntagaribay18@gmail.com">AsuntaGaribay18@gmail.com</a>
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         <SocialFollow/>
        </Header.Content>
       </Menu.Item>
       <Menu.Item position="right">
        <Header.Content>
         Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
        </Header.Content>
       </Menu.Item>
      </Menu>
     </>
     )
    }
  }

export default Footer