import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons';
import { uniqueId } from 'lodash';

const ecoCard = [
    {
         url: "https://github.com/obiem-0/Portfolio/tree/main/Python%20Snippets%20",
         title: 'Transfer Markt Scraper',
         subheader: `A basic scraper to get the player positions in (x,y) coordinates from the pitch visualisation on a the HTML lineup section for a given match.`,
         
         iframe: <iframe
         title = {uniqueId()}
         src="https://github.com/jup_demo/retro/notebooks/?path=recipe-tracker.ipybn"
         width="100%"
         height="100%"> </iframe>
       
    },
    

];

const PythonSnippets = () => {
    return (
<PageContainer>

        <Grid container spacing={3}>
            {ecoCard.map((item, index) => (
                <Grid item sm={12} md={4} lg={6} key={index}>
                 
              <DashboardCard >
         

                            <Typography variant="h6">
                                <a href={item.url}>{item.title}</a>
                                </Typography>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                <Stack direction="row" alignItems="center">
                                     <Typography color="textSecondary" ml={1}>
                                        {item.subheader}
                                        <br/>  <br/>
                                        {item.iframe}
                                    </Typography> 
                                   
                                </Stack>
                            </Stack>
                        
                    
                        </DashboardCard>

                </Grid>
            ))}
        </Grid>

       


</PageContainer>
    );
};

export default PythonSnippets;


