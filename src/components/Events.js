import React from 'react'
import {Header,} from 'semantic-ui-react'
import Twitter from './Twitter'


const Press = () => (
  <>
    <div className="eventContainer"> 
      <div className="eventHead">
       <Header.Content as="h1">Upcoming Events</Header.Content>
      </div>
      <div className="twitter">
       <Twitter/>
      </div>
    </div>
  </>
)

export default Press;