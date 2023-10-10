import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utilities/constants'

export default function ChannelCard({channelDetails,marginTop}) {
  return (
    <Box sx={{boxShadow:'none',borderRadius:'20px',width:{md:'320px',xs:'356px'},display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginTop}}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',alignItems:'center',color:'#fff'}}>
          <CardMedia image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                     alt={channelDetails?.snippet?.title}
                     sx={{borderRadius:'50%',width:'180px',height:'180px',border:'1px solid #e3e3e3',mb:'10px'}}/>
          
          <Typography variant='h6'>{channelDetails?.snippet?.title} <CheckCircle fontSize='15px' color='grey' sx={{ml:'5px'}}/></Typography>
          {channelDetails?.statistics?.subscriberCount && 
          <Typography>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>}
        </CardContent>
      </Link>
    </Box>
  )
}
