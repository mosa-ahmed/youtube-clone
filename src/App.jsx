import { Box } from '@mui/material'
import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import {Layout, Feed, Channel, SearchFeed, Video} from './components'

export default function App() {

  const router = createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Feed/>},
      {path:'video/:id',element:<Video/>},
      {path:'channel/:id',element:<Channel/>},
      {path:'search/:searchTerm',element:<SearchFeed/>},
    ]}
  ])

  return (
    <Box sx={{backgroundColor:'#000'}}>
      <RouterProvider router={router}/>
    </Box>
  )
}
