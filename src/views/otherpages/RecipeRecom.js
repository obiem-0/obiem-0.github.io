import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const reciperecom = () => {
  return (
    <PageContainer title="Recipe Recommender">

      <DashboardCard 
      // title="About Me"
      >

        <Typography>

        <h2 class="fw-semibold mb-4">Data-driven Recipe Recommender</h2><div class="card">
          <div class="card-body">
            
            <p>The Data-driven Recipe Recommender is a project that combines the power of Python, and SQL database, and React.js to provide personalized recipe recommendations based on your preferences and culinary interests.</p>

            <br/>
            <h3 style="color: darkgrey; margin-bottom: 10px;">Overview</h3>


        <p>The main goal is to create a data-driven platform that assists users in discovering exciting and delicious recipes tailored to their unique tastes. To achieve this, we have incorporated the following technologies:</p>
        <ul>
          <li> Python: Used for data processing, analysis, and generating insightful recipe recommendations.</li>

          <li>SQL Database: Stores a vast collection of recipes, user preferences, and interactions for efficient retrieval.</li>

          <li>React.js: Creates an intuitive and user-friendly front-end interface to interact with the recommendation engine.</li>
        </ul>
        
        <br/><h3 style="color: darkgrey; margin-bottom: 10px;">How It Works</h3>

        <p>The Data-driven Recipe Recommender operates in three main steps:</p>
        <ol>
          <li>Data Collection & Preprocessing: We gather a diverse range of recipes from various sources, each containing essential attributes like ingredients, cooking time, cuisine type, and difficulty level. The data is then preprocessed to ensure consistency and quality.</li>
          <li>User Interaction & Preference Capturing: Users can create accounts, providing their culinary preferences and dietary restrictions. As users explore recipes and interact with the platform, their preferences are recorded to personalize future recommendations.</li>
          <li>Recommendation Engine: Our powerful recommendation engine, built using Python's machine learning libraries, analyzes user interactions and preferences to generate personalized recipe suggestions. The engine considers factors such as user ratings, ingredient similarities, and popular trends to ensure highly relevant and enticing recommendations.</li>
        </ol>
        
        
    
</div>
 
          </div>

<h3 style="margin-bottom: 10px;">Four Parts</h3>
<div class="row">

    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Code</h5>
                <p class="card-text">We have made the code for the Data-driven Recipe Recommender project available on GitHub:
                <a href="https://github.com/obiem-0/data-driven-recipe-recommender" target="_blank">GitHub Repository</a>
            </p>
                <br/>

                  <h5 class="card-title">Recommendation Engine</h5>
                  <p class="card-text">We will demonstrate the recommendation engine's functionality using a Jupyter Notebook with Python code snippets:</p>
  
                  <div class="code_section">
  
                    <iframe
                    src="../jup_demo/retro/notebooks/?path=recipe-tracker.ipybn"
                    width="100%"
                    height="100%"> </iframe>
                  
              </div>
            
              </div>
        </div>
    </div>
    

    <div class="col-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">User Interaction & Preference Capturing</h5>
                <p class="card-text">Below is a snapshot of the React.js-based interface where users can create accounts and provide their preferences:</p>
                
            </div>
        </div>
    </div>

    <div class="col-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Data Collection & Preprocessing</h5>
                <p class="card-text">Here's a diagram representing the data flow during the collection and preprocessing phase:</p>
                Insert the diagram of data flow here
            </div>
        </div>
    </div>

</div>

<div class="card">
          
  <div class="card-body">
    <h3>Conclusion</h3>
    <p>For any questions or inquiries, please contact us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
    <p>The Data-driven Recipe Recommender brings together the best of Python, SQL database, and React.js to delight food enthusiasts with personalized recipe recommendations. Embrace this culinary adventure, and let our platform cater to your taste buds!</p>
</div>
        </div>



</Typography>

</DashboardCard>
</PageContainer>
);
};

export default reciperecom;


