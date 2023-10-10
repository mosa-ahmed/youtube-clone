import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import { fetchFromAPI } from '../../utilities/fetchFromAPI'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

  const [videos, setvideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setvideos(data.items))

  }, [searchTerm])
  

  return (
  <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
      Search Results for:<span style={{color:'#FC1503'}}> {searchTerm}</span> videos
    </Typography>

    <Videos videos={videos}/>
  </Box>
  )
}
