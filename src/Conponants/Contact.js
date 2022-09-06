import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div style={{ paddingTop: "10vh", margin: "auto", width: "fit-content" }}>
      <h1>This is an Contact Page</h1>
      <Link to={"/"} style={{textDecoration:'none', marginLeft:'4vw'}}>
        <Button variant="contained" sx={{backgroundColor:'#ffdb0d', color:'black'}}>Go To Blogs Page</Button>
      </Link>
    </div>
  )
}

export default Contact