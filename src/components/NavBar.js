import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu,} from 'semantic-ui-react'

class Navbar extends React.Component {
 
  render() {
    return (
      <>
       
         <Menu style={{backgroundColor:"black"}} inverted pointing secondary fixed="top">
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/Menu'>
            <Menu.Item
              name='Menu'
              id='menu'
              active={this.props.location.pathname === '/Menu'}
            />
            </Link>
          <Link to='/Events'>
            <Menu.Item
              name='Events'
              id='events'
              active={this.props.location.pathname === '/Events'}
            />
          </Link>
                    <Link to='/FAQ'>
            <Menu.Item
              name='FAQ'
              id='FAQ'
              active={this.props.location.pathname === '/FAQ'}
            />
            </Link>
         </Menu>
      
    </>
    )
  }
}


export default withRouter(Navbar);