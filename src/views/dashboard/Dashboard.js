import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import Education from './components/Education';
import Career from './components/Career';
import Blog from './components/Blog';
import MonthlyEarnings from './components/MonthlyEarnings';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <div className="card w-100">
              <div className="card-body">
                <SalesOverview />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className="card w-100">
                  <div className="card-body">
                    {/* <YearlyBreakup /> */}
                    <Education />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="card w-100">
                  <div className="card-body">
                    <MonthlyEarnings />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
         
          <Grid item xs={12} lg={12}>
            <div className="card w-100">
              <div className="card-body">
               <Career />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="card w-100">
            <h2 style={{
              color: "lightgrey",
              mb: "10px"
              }}>Other things I've done</h2>

              <div className="card-body">

                <Blog />
                
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
