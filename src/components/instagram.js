import React from 'react'
import axios from 'axios' 
import { Grid, Image } from 'semantic-ui-react'



class Grams extends React.Component {
  state = {
    images: [],
    isVisible: true,
  }
  
  componentDidMount() {  
    axios.get(process.env.REACT_APP_IG_URL)
    .then(res => {
      this.setState({images: res.data.data})
    })
    .catch( err => {
      console.log(err.response)
    }) 

  }
  
  


render() {
  const {images,} = this.state
  // const pictures = images.forEach((image)=>console.log(image.thumbnail.url,image.id))

  return (
    <Grid>
    <Grid.Row columns={6} style={{padding: "0px", justifyContent: "center"}} stackable="true">  
    { images.map(image => 
     <Image 
      className="image"
      data-key={image}
      src={image.images.standard_resolution.url}
      key={image.id}
      // href={image.images.standard_resolution.url}
      // size="small"
      // target="_blank"
      width="300em"
      height="300em"
   />
     )}
     
    </Grid.Row>
  </Grid>  
    )
  }
}

export default Grams