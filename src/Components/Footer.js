import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:2}}>
        <Box sx={{
            "& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:"goldenrod",
            transition:'all 500ms ease'
        }
        }}>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <WhatsAppIcon/>
        </Box>
        <Typography variant="h5"
        sx={{
            "@media (max-width:600px)":{
            fontSize:"1rem",
        }, 
        }}>
            All Rights Reserved &copy; Tushar
        </Typography>
    </Box>
    </>
  )
}

export default Footer