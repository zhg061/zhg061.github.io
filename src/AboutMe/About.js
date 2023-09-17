import React from 'react';
import { Box, Link } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaBook } from "react-icons/fa";
import { Skills } from '../Skills/Skills';
import { Contact } from './../Contact/Contact';
import "./styles.css";
import axios from 'axios';
import Jobs from '../Jobs/Jobs';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
      edu: []
    }
  }
  async componentDidMount(){
    await axios.get(
      // 'http://localhost:5000/jobs-edu'
      'https://lucyporfoliobackend-a266447ba206.herokuapp.com/jobs-edu'
      ).then(
      res => {
        this.setState( { jobs: res.data.filter(list => list.Type === "job")});
        this.setState( { edu: res.data.filter(list => list.Type === "education")});
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
        <Box 
          style={{
            display: "flex",
            width: "5%"
          }}
        >
        </Box>
        <Box 
          style={{
            display: "flex",
            width: "90%"
          }}
        >
          <Box
            style={{ 
            width: "20%"
          }}
          >
          <img 
          src="./picture.png" 
          alt="Picture"
          style={{ width: "80%", height: "auto" }}
            />
          <p>Research Assistant & Master Student</p>
          <p><FaMapMarkerAlt/> &nbsp;New York</p>
          <p color="inherit" ><FaBook/> &nbsp;UCSD, USC</p>
          <p><FaEnvelope/> &nbsp;<Link color="inherit" href="mailto: zhaoyilucyguo@gmail.com" className="email">Email</Link></p>	
          <p><FaGithub/> &nbsp;<Link color="inherit" href="https://github.com/zhg061" className="github" target="_blank">UCSD</Link></p>
          <p><FaGithub/> &nbsp;<Link color="inherit" href="https://github.com/zhaoyilucyguo" className="github" target="_blank">USC</Link></p>
  
          <p><FaLinkedin/> &nbsp;<Link color="inherit" href="https://www.linkedin.com/in/zhaoyi-guo/" className="linkedin" target="_blank">LinkedIn</Link></p>
  
        </Box>
        <Box
        style={{ 
          width: "80%"
        }}
        >
          <h2>Welcome to Lucy's Homepage!</h2>
          <ul>
            <b>Proficient Frontend Engineer</b> and <b>Web Developer</b> with more than 3 years of experience building complex, responsive web designs, creating simple and engaging user interfaces, optimizing frontend code for top performance and scalability, and building reusable codes, components and libraries for future use.
          </ul>
          <ul>
            Accomplished <b>Data Analyst</b> with over 5 years of experience in data mining, creating visualizations to support data explainability and predictive statistical analysis
          </ul>
          <ul>
            Excellent communicator and collaborator, adept at bridging engineering technology information and full spectrum of specialized engineering staff including: designers, frontend and backend engineers, and AI engineers, with customer and project goals for best outcomes
          </ul>
         
          <h2>Education</h2>
          <ul>
            {
              this.state.edu.map((list)=>
                <div key={list.School}>
                  <h3>{list.Degree}, {list.Major} {list.Year}</h3>
                  <p>{list.School}</p>
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
                      <p><b>Courses: </b>{list.Description}</p>
                    </Box>
                    <Box 
                      style={{
                        display: "flex",
                        width: "20%"
                      }}
                    >
                      <img 
                        src={list.Picture}
                        alt={list.School}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Box>
                </div>
              )
            }
          </ul>
          <h2>Core Competencies & Skills</h2>  
          <Skills/> 
          <h2>
          Professional Experience
          </h2>
          <Jobs/>              
        </Box>
      </Box>
    </div>
    );
  }
}

export default About;
