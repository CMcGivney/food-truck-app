import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter'


const Press = () => (
  <>
    <div className="eventContainer"> 
       <Header.Content as="h1" className="eventHead">Upcoming Events</Header.Content>
        <div className="twitter">
         <Twitter/>
        </div>
    </div>
  </>
)

export default Press;