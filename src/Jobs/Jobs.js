import React from 'react';
import { Box, Link } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaBook } from "react-icons/fa";
import { Skills } from '../Skills/Skills';
import { Contact } from './../Contact/Contact';
// import "./styles.css";
import axios from 'axios';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
    }
  }
  async componentDidMount(){
    await axios.get('https://lucyporfoliobackend-a266447ba206.herokuapp.com/jobs-edu').then(
      res => {
        this.setState( { jobs: res.data.filter(list => list.Type === "job")});
      }
    )
  }
  render() {
    return (
      <div
      style={{
        display: "flex",
      }}
      >
          <ul>  
            {
              this.state.jobs.map((list)=>
                <div key={list.Company}>
                  <h3>{list.Position}</h3>
                  <p><a href={list.Website}>{list.Company}</a></p>
                  <Box 
                    style={{
                      display: "flex",
                    }}
                  >
                    <Box 
                      style={{
                        display: "flex",
                        width: "80%"
                      }}
                    >
                    <p>{list.Description}</p>
                    </Box>
                    <Box 
                      style={{
                        display: "flex",
                        width: "20%"
                      }}
                    >
                      <img 
                        src={list.Picture}
                        alt={list.Company}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Box>
                </div>
              )
            } 
          </ul>                
    </div>
    );
  }
}

export default About;
