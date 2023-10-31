import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import img1 from 'src/assets/images/products/s4.jpg';
import img2 from 'src/assets/images/products/s5.jpg';
import img3 from 'src/assets/images/products/s7.jpg';
import img4 from 'src/assets/images/products/s11.jpg';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons';
import BlankCard from '../../../components/shared/BlankCard';

const ecoCard = [
    {
        title: 'ITIL Course',
         subheader: 'I applied the knowledge to optimize service delivery. We employed incident management for swift issue resolution —ensuring efficient customer service; change management in seamless menu updates; and problem management in identifying and eliminating root causes of poor product quality.',
        // photo: img1,
       // salesPrice: 375,
       // price: 285,
        //rating: 4,
    },
    {
        title: 'Agile Course',
         subheader: 'I applied this knowledge by introducing daily stand-up meetings to enhance team communication, improved product backlog management using Scrum boards, and adapted to customer feedback by swiftly adjusting our menu offerings.',
        // photo: img2,
       // salesPrice: 650,
       // price: 900,
        //rating: 5,
    },

];

const Blog = () => {
    return (
        <Grid container spacing={3}>
            {ecoCard.map((item, index) => (
                <Grid item sm={12} md={4} lg={3} key={index}>
                    <BlankCard>
                       {/*  <Typography component={Link} to="/">
                            <img src={item.photo} alt="img" width="100%" />
                        </Typography> */}

                    {/*     <Tooltip title="Add To Cart">
                            <Fab
                                size="small"
                                color="primary"
                                sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                            >
                                <IconBasket size="16" />
                            </Fab>
                        </Tooltip> */}

                        <CardContent sx={{ p: 3, pt: 2 }}>
                            <Typography variant="h6">{item.title}</Typography>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                <Stack direction="row" alignItems="center">
                                     <Typography color="textSecondary" ml={1}>
                                        {item.subheader}
                                    </Typography> 
                                </Stack>
                               {/*  <Rating name="read-only" size="small" value={item.rating} readOnly /> */}
                            </Stack>
                        </CardContent>
                    </BlankCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default Blog;
