import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../Videos/Videos'
import { fetchFromAPI } from '../../utilities/fetchFromAPI'
import { Box } from '@mui/material'
import ChannelCard from '../ChannelCard/ChannelCard'

export default function Channel() {
  const {id} = useParams()
  const [channelDetails, setchannelDetails] = useState(null)
  const [videos, setvideos] = useState([])

  useEffect(() => {

  fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setchannelDetails(data?.items[0]))
  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setvideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%)',zIndex:10,height:'300px'}}/>
        <ChannelCard channelDetails={channelDetails} marginTop={'-110px'}/>
      </Box>
      <Box display='flex' p='2'>
        {/* <Box sx={{mr:{sm:'100px'}}}/> */}
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}
