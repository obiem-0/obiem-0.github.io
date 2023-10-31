import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Socialify = () => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        // Fetch the raw content of the README.md from GitHub
        const response = await axios.get('https://raw.githubusercontent.com/obiem-0/Portfolio/main/Socialify/README.md');
        setReadmeContent(response.data);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <PageContainer title="Socialify">
      <DashboardCard>
        <Typography>
          <ReactMarkdown>
            {readmeContent}
          </ReactMarkdown>
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Socialify;
