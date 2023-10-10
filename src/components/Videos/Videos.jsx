import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import ChannelCard from '../ChannelCard/ChannelCard'

export default function Videos({videos,direction}) {
  if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2}>
      {videos.map((item,idx) => 
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channelDetails={item}/>}
      </Box>)}
    </Stack>
  )
}