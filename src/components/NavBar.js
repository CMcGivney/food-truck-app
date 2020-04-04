import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu,} from 'semantic-ui-react'

class Navbar extends React.Component {
 
  render() {
    return (
      <>
         <Menu fluid style={{backgroundColor:"black", boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}} inverted pointing fixed="top">
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/about'>
            <Menu.Item
              name='About'
              id='about'
              active={this.props.location.pathname === '/about'}
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
          <Link to='/Contact'>
            <Menu.Item
              name='Contact'
              id='Contact'
              active={this.props.location.pathname === '/Contact'}
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