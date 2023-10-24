import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './Main';
import MyCarousel from './MyCarousel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedPost from './FeaturedPost';
import Jobs from '../Jobs/Jobs';


const theme = createTheme();

export default function Blog() {
  const [featuredPosts, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios.get(
        // 'http://localhost:5000/projects'
        'https://lucyporfoliobackend-a266447ba206.herokuapp.com/projects'
        ).then(
      res=>{
        setProjects(res.data);
      }
    )
    }    
    fetchData();
  }, []); 
  return (
    <ThemeProvider theme={theme}>
      {/* <MyCarousel/>  */}
      <CssBaseline />
      {/* <Tableau/> */}
      {/* <Fitness/> */}
      <Container maxWidth="lg">
        <main>
          <h2>
          Professional Experience
          </h2>
          <Jobs/>
          <h2>
          Projects Experience
          </h2>
          <Grid container style={{ marginTop: '16px' }} spacing={4}>
         
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
        </main>
      </Container>
    </ThemeProvider>
  );
}
