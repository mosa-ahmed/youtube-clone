import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Videos from '../Videos/Videos'
import { fetchFromAPI } from '../../utilities/fetchFromAPI'

export default function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setvideos(data.items))

  }, [selectedCategory])
  

  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'}}}>
      <Box sx={{height:{xs:'auto',md:'92vh'},pb:{md:'20px'},borderRight:'1px solid #3d3d3d',px:{xs:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
        <Typography sx={{mt:1.5,color:'#fff',display:{xs:'none',md:'block'}}} variant='body2' className='copyright'>Copyright 2023 by Google</Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory}<span style={{color:'#FC1503'}}> videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}
