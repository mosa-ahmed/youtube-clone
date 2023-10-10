import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../../utilities/constants'

export default function VideoCard({video: {id: {videoId}, snippet}}) {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}>
      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}>
        </CardMedia>
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>{snippet?.title.slice(0,35) || demoVideoTitle.slice(0,35)}...</Typography>
        </Link>

        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='grey'>{snippet?.channelTitle || demoChannelTitle}
          <CheckCircle fontSize='12' color='grey' sx={{ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
