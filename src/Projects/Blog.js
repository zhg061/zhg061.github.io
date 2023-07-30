import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import MyCarousel from './MyCarousel';



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Access the Website',
};

const featuredPosts = [
  {
    title: 'Cooking Blog',
    date: 'June 12 2023',
    description:
      'A simple Recipe Blog that used Node.js, MongoDB, bootstrap and other NPM packages. ',
    image: './cooking_blog.png',
    imageLabel: 'Image Text',
    link: 'https://cookingblog-lk8m.onrender.com/'
  },
  {
    title: 'Artist Search',
    date: 'June 12 2022',
    description:
      'A user-friendly search interface that allows you to easily navigate through a vast database of artists from Artsy API. ',
    image: './artsysearch.webp',
    imageLabel: 'Image Text',
    link: 'https://search-artist.netlify.app/'
  },
  {
    title: 'Gene Expression Analysis',
    date: 'March 12 2021',
    description:
      'Obtained the opioid abusers and control’s data. Cleaned the data, and performed various gene expression analysis. Presented genome-wide changes in gene expression associated with human opioid abuse.',
    image: './opioidabuse.jpeg',
    imageLabel: 'Image Text',
    link: 'https://dsc-capstone.org/projects-2020-2021/reports/project_70.pdf'
  },
  {
    title: 'Movie Rating Prediction',
    date: 'March 12 2021',
    description:
      'Acquired the movie datasets from Kaggle and preprocessed the data. Employed feature engineering technique of Lasso Regression. Constructed the data model to forecast movie ratings.',
    image: './movie.jpg',
    imageLabel: 'Image Text',
    link: ''
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <MyCarousel/> 
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} />             */}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
