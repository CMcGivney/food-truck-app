import React from 'react'
import {Header, Menu} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {
 
  render() {
    return (
     <>
      <Menu style={{backgroundColor: "tan"}} pointing secondary>
       <Menu.Item>
        <Header.Content>
         The Elysian
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
        <a href="tel:+1-435-555-5555">1-(435)-555-5555</a>
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         business address
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         <a href="mailto:yourmailaddress@gmail.com">YourEmailAddressHere</a>
        </Header.Content>
       </Menu.Item>
       <Menu.Item>
        <Header.Content>
         <SocialFollow/>
        </Header.Content>
       </Menu.Item>
       <Menu.Item floated="right">
        <Header.Content>
         Powered by: <a href="https://chris-portfo.herokuapp.com/">84Creations</a>
        </Header.Content>
       </Menu.Item>
      </Menu>
     </>
     )
    }
  }

export default Footer