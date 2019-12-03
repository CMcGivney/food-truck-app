import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container,} from 'semantic-ui-react'

const Twitter = () => (
  <Container>
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="chris_mcgivney"
        options={{height: "35em", width: "30em"}}
        sameSite='none'
     />
     <TwitterFollowButton
       screenName={'chris_mcgivney'}
     />
  </Container>
)

export default Twitter