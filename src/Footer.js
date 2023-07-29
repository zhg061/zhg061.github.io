import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"© "+ new Date().getFullYear() + " Zhaoyi(Lucy) Guo. All rights reserved."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">      
          <Link color="inherit" href="https://linkedin.com/in/zhaoyi-guo/">
          <FaLinkedin />LinkedIn
          </Link>{' '}
          <Link color="inherit" href="https://github.com/zhaoyilucyguo">
          <FaGithub />2021-2023
          </Link>{' '}
          <Link color="inherit" href="https://github.com/zhg061">
          <FaGithub />2017-2021
          </Link>{' '}
          <Link color="inherit" 
          href="mailto:zhaoyilucyguo@gmail.com"
          onClick={()=>{window.open("mailto:lucyguo0803@gmail.com");}}>
          <FaEnvelope /> Email
          </Link>{' '}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
