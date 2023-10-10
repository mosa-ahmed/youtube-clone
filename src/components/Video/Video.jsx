import { Box, CardMedia, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import Videos from '../Videos/Videos'

import { fetchFromAPI } from '../../utilities/fetchFromAPI'
import { demoProfilePicture } from '../../utilities/constants'

export default function Video() {
  const {id} = useParams()
  const [videoDetail, setvideoDetail] = useState(null)
  const [videos, setvideos] = useState(null)

  useEffect(() => {
  fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=> setvideoDetail(data?.items[0]))
  fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setvideos(data?.items))
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'
  const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail
  console.log(videoDetail);
  
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer className='react-player' controls url={`https://www.youtube.com/watch?v=${id}`}/>
            <Typography color='#fff' fontWeight='bold' variant='h5' p={2}>{title}</Typography>
            <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{color:'#fff'}}>
              <Link to={`/channel/${channelId}`}>
                <Stack direction='row' alignItems='center'>
                  <CardMedia image={videoDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                       alt={videoDetail?.snippet?.title}
                       sx={{borderRadius:'50%',width:'30px',height:'30px',border:'1px solid #e3e3e3',mr:'10px'}}/>
                  <Typography color='#fff' variant={{sm:'subtitle1',md:'h6'}}>{channelTitle}</Typography>
                  <CheckCircle sx={{fontSize:'12px',color:'grey',ml:'5px'}}/>
                </Stack>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.7}}>{parseInt(viewCount).toLocaleString()} views</Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column'></Videos>
        </Box>
      </Stack>

    </Box>
  )
}
