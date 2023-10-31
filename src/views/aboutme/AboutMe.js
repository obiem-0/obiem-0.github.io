import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const aboutme = () => {
  return (
    <PageContainer title="About Me" description="Get to know me">

      <DashboardCard 
      // title="About Me"
      >

        <Typography>
          
       
        <h2 class="card-title mb-4" style={{color: "#858484", mb: "10px"}}>Hi, I'm Obi Emuwa</h2>

        
                    <p>I'm a dedicated Data Analyst with a strong background in Computer Science and IT. I've ventured into the fascinating world of data analysis, where hidden insights come to light.</p>

                    <p>But here's the twist: beyond the charts and graphs, there's a lot more to me. I've spent four delightful years running my own bakery, creating mouthwatering treats. Baking became my escape from numbers and screens, a world where flavors and aromas took center stage.
                    </p>

                    <p>Now, my focus is mainly on cracking data puzzles. Yet, my love for baking remains strong. When I'm not crunching numbers, I'm whipping up something delicious in the kitchen.</p>

                    <p>And guess what? I'm not just a data enthusiast; I'm also crazy about football. I've combined my love for the game with my data skills to create a fantastic football dashboard. It's like a one-stop-shop for everything football – cool stats, amazing visuals, and the energy of the game, all in one place.</p>

                    <p>Whether you're in the mood for a tasty treat or curious about digging into data, I invite you to join me. Let's explore this unique journey where numbers meet flavors, and where the excitement of football merges with the world of data.</p>
                    <br/>
                    <h2 style={{color: "#e4e4e4", mb: "10px"}} > Ready to see what I've cooked up?</h2>


          
          </Typography>

      </DashboardCard>
    </PageContainer>
  );
};

export default aboutme;
