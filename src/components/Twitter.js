import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const Twitter = () => (
  <Container>
     <TwitterFollowButton
       screenName={'Elysian_Truck'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Elysian_Truck"
        options={{height: "35em", width: "30em"}}
        sameSite='none'
     />
  </Container>
)

export default Twitter