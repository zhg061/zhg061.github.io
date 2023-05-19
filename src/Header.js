import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery, useTheme, Box } from '@mui/material';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiFilePaperLine } from "react-icons/ri";
import './styles.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"  sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#3d3d3d' }}>
      <Toolbar>
      <Box height={100}></Box>
        {isSmallScreen ? (
          <>
            <Typography 
            align="left" 
            component="div" 
            sx={{ flexGrow: 1, fontSize: '2.2rem' }}
            onClick={()=>{window.location.href = '/';}}>
              Lucy Guo
            </Typography>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} onClick={()=>{window.location.href = '/';}}><AiOutlineHome/>&nbsp;Home</MenuItem>
              {/* <MenuItem onClick={handleClose} onClick={()=>{window.location.href = '/project';}}><GrProjects/>&nbsp;Projects</MenuItem> */}
              <MenuItem onClick={handleClose} onClick={()=>{window.location.href = '/resume';}}><RiFilePaperLine/>&nbsp;Resume</MenuItem>
              <MenuItem onClick={handleClose} onClick={()=>{window.location.href = '/about';}}><MdOutlinePersonOutline/>&nbsp;About</MenuItem>
            </Menu>
          </>
        ) : (
          <>   
            <Typography 
            align="left" 
            sx={{fontSize: '2.2rem' }}
            onClick={()=>{window.location.href = '/';}}>
              Lucy Guo
            </Typography>       
            <Box width="70%" display='flex' justifyContent='center'>
              <MenuItem 
              align="center" 
              onClick={()=>{window.location.href = '/';}}
              >
                <Box display="flex" flexDirection="column">
                  <span><AiOutlineHome/></span>
                  <span>Home</span>
                </Box>
              </MenuItem >               
              {/* <MenuItem align="center" onClick={()=>{window.location.href = '/project';}}>
                <Box display="flex" flexDirection="column">
                  <span><GrProjects/></span>
                  <span>Projects</span>
                </Box>
              </MenuItem> */}
              <MenuItem align="center" onClick={()=>{window.location.href = '/resume';}}>
                <Box display="flex" flexDirection="column">
                  <span><RiFilePaperLine/></span>
                  <span>Resume</span>
                </Box>
              </MenuItem>
              <MenuItem align="center" onClick={()=>{window.location.href = '/about';}}>
                <Box display="flex" flexDirection="column">
                  <span><MdOutlinePersonOutline/></span>
                  <span>About</span>
                </Box>
              </MenuItem>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
