import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import { Row, Col, Tab, Nav, Tabs } from "react-bootstrap";

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import MyCarousel from './MyCarousel';
// import { Fitness } from './Fitness';



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
    type: 'SDE',
    link: 'https://cookingblog-lk8m.onrender.com/',
    media: 'Website'
  },
  {
    title: 'Artist Search',
    date: 'June 12 2022',
    description:
      'A user-friendly search interface that allows you to easily navigate through a vast database of artists from Artsy API. ',
    image: './artsysearch.webp',
    imageLabel: 'Image Text',
    type: 'SDE',
    link: 'https://search-artist.netlify.app/',
    media: 'Website'
  },
  {
    title: 'Gene Expression Analysis',
    date: 'March 12 2021',
    description:
      'Obtained the opioid abusers and control’s data. Cleaned the data, and performed various gene expression analysis. Presented genome-wide changes in gene expression associated with human opioid abuse.',
    image: './opioidabuse.jpeg',
    imageLabel: 'Image Text',
    type: 'DS',
    link: 'https://dsc-capstone.org/projects-2020-2021/reports/project_70.pdf',
    media: 'Paper'
  },
  {
    title: 'Movie Rating Prediction',
    date: 'March 12 2021',
    description:
    'Acquired the movie datasets from Kaggle and preprocessed the data. Employed feature engineering technique of Lasso Regression. Constructed the data model to forecast movie ratings.',
    image: './movie.jpg',
    imageLabel: 'Image Text',
    type: 'DS',
    link: 'https://github.com/zhg061/Movie-Rating-Prediction',
    media: 'Github'
  },
  {
    title: 'Data Analysis & Machine Learning',
    date: '2019-2020',
    description:
    'This GitHub folder hosts a diverse collection of projects, encompassing data analysis and machine learning, spanning topics such as Olympic Games analysis through SQL, Python-based flight delay investigations, exploration of expansive ad view features, and the implementation of machine learning models like K-Nearest Neighbors, Natural Language Processing, and Linear Regression.',
    image: './MLDA.jpg',
    imageLabel: 'Image Text',
    type: 'DS',
    link: 'https://github.com/zhg061/Data-Analysis-Machine-Learing',
    media: 'Github'
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
      {/* <Fitness/> */}
      <Container maxWidth="lg">
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
         
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}
