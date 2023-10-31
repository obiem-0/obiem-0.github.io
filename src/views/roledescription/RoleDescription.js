import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const roledescription = () => {
  return (
    <PageContainer title="Role Description">

      <DashboardCard 
      // title="About Me"
      >

        <Typography>
          
       
        <div class="card">


<div class="card-body">
<h5 class="card-title fw-semibold mb-4">Being a Founder & Data Lead at Obi Bakes It</h5>
<p class="mb-0">
I started up my small outfit bakery in 2008, whilst search for Java developer roles with a decent pay in Nigeria. I enjoyed running as it provided an optimal utility of my skills, with a decent ROI. As we were a small team, I wore many hats and quckly upskilled, as time went on I was able to outsource. 
I oversaw daily operations and baked 80% of the goods. 
- Resdesigned my wordpress website using Javascript and PHP as part of our Valentine's days marketing campaign; streamlined the ordering process by creating a tracking tool in Google Sheets making use of google scripts to sync the order details to our Odoo SQL database
- Centralised multiple sales channels (website, instagram, whatsapp and text) using APIs and SMS gateway
- Explored Jira as a management solutions and customised the system with groovy scripts - this worked well for scheduling manufacturing orders as an alternative to Odoo
- Created Odoo modules to address issues with processing product variants and schedule deliveries with Uber and GoKadal built a PowerBi report to provide insights on our finances
- Due to my experience with these solutions, I was able to provide consultation services to other small food businesses like mine - through this I got the chance to work with dirty data, and learned to use Tableau (this presented faster data visualisations over the other options)</p>
</div>

</div>
          
          </Typography>

      </DashboardCard>
    </PageContainer>
  );
};

export default roledescription;




