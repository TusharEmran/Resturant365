import React from 'react'
import Layout from '../Components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,width:"600px",ml:10}}>
        <Typography variant='h4'>Contact 365 Resturant</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti expedita necessitatibus soluta veniam libero placeat nam, quia nihil sapiente sint maiores odio numquam vero obcaecati eligendi. Cupiditate quia repellendus praesentium repellat veniam nostrum? Natus voluptate harum expedita accusantium ex, officiis aut commodi accusamus nobis. Ea quia sapiente magni dignissimos.</p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
              Contact Details
            </TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon  /> +018******886 call now
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <EmailIcon /> 365resturant@gmail.com Email Now
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell >
                <WhatsAppIcon /> +018******886 Whats App Now
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact