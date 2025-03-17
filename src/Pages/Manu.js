import React from 'react';
import Layout from '../Components/Layout';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Manulist } from '../Components/Data';

const Manu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 3,
          justifyContent: 'center',
          p: 3,
        }}
      >
        {Manulist.map((manu, index) => (
          <Card key={index} sx={{ maxWidth: 345, mx: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              image={manu.image}
              alt={manu.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {manu.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {manu.description}
              </Typography>
              <Typography sx={{ color: 'red' }} variant="h4">
                {manu.price} {manu.TK}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" variant="contained" color="primary">
                Order Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Manu;
