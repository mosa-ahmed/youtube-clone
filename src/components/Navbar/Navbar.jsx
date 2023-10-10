import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../utilities/constants'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <Stack direction={'row'} 
           alignItems={'center'} 
           sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}} 
           p={2}>
          <Link to={'/'} style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo" height={45}/>
          </Link>
          <SearchBar/>
    </Stack>
  )
}
