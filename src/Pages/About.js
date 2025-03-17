import React from 'react'
import Layout from '../Components/Layout'
import { Box ,Typography} from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center",
      "@media (max-width:600px)":{
        mt:1, 
        "& h3":{
          fontSize:"2rem"
        },
      }
      }}>
        <Typography variant='h3'>
        Welcome To 365 Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, optio soluta? Voluptatibus itaque explicabo sed neque voluptatum beatae placeat error modi quos nihil alias dolore a nisi numquam, animi enim consectetur quaerat ipsam ex eum atque. Asperiores amet quisquam totam sapiente obcaecati delectus optio quam explicabo, voluptate recusandae, eum omnis quas possimus perferendis veniam veritatis labore ipsum assumenda saepe cum voluptatibus expedita adipisci animi. Ipsa labore praesentium, debitis aliquam qui, minus alias esse delectus reiciendis fuga id dolor eius quod. Quaerat, nemo repellat, tempora iure sequi, ipsum consectetur molestiae vitae sunt corporis et illum error repellendus corrupti provident rem saepe.</p>
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi officiis doloremque consequuntur alias vel sapiente suscipit laudantium velit veritatis. Sed suscipit numquam eveniet nesciunt, illo sunt fugit mollitia in accusamus, recusandae dolorem blanditiis cupiditate obcaecati? Tempora enim nam tempore cum, nihil autem voluptates similique fuga porro in fugit ipsum, dignissimos veritatis quos vel dolor illo libero saepe eos! Tempore delectus sapiente repellat explicabo, autem minus aliquid quia quas veniam voluptatibus id ad consequatur soluta, similique fuga? Debitis quas pariatur, unde, corrupti tempora fuga facilis aliquam minus, a culpa iusto non. Autem ab aperiam esse iure eum quas ex, placeat eligendi.
      </Box>
    </Layout>
  )
}

export default About