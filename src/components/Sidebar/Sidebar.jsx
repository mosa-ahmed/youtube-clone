import React from 'react'
import {categories} from '../../utilities/constants'
import { Stack } from '@mui/material'

export default function Sidebar({selectedCategory,setselectedCategory}) {

  return (
    <Stack direction='row' sx={{overflowY:'auto',height:{xs:'auto',md:'95%'},flexDirection:{md:'column'}}}>
      {categories.map((category)=> 
        <button className='category-btn' 
                style={{color:'white',background:category.name === selectedCategory && '#FC1503'}}
                key={category.name}
                onClick={()=> setselectedCategory(category.name)}>
          <span style={{color:category.name === selectedCategory? 'white':'red',marginRight:'15px'}}>{category.icon}</span>
          <span style={{opacity:category.name === selectedCategory? 1 : .8}}>{category.name}</span>
        </button>
      )}
    </Stack>
  )
}
