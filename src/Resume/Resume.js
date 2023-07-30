import React from 'react';
import { Box, Typography } from '@mui/material';

function Resume() {

  return (
    <div>
      <Typography 
      align="center" 
      sx={{fontSize: '2rem' }}>
        Skills
      </Typography>  
    <Box 
    display="flex"
    justifyContent="center"
    align-items="center"
    height="100vh">
      <object
        width="80%"
        height="auto"
        data="./resume.pdf" 
        type="application/pdf"
      >
      </object>
    </Box>
    <Typography 
      align="center" 
      sx={{fontSize: '2rem' }}>
        Recommendation Letter
      </Typography>  
    <Box 
    display="flex"
    justifyContent="center"
    align-items="center"
    height="100vh">
      <object
        width="80%"
        height="auto"
        data="./RecommendationLetter.pdf" 
        type="application/pdf"
      >
      </object>
    </Box>
    </div>
  );
}

export default Resume;
