import React from 'react';
import { Box, Link } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaBook } from "react-icons/fa";
import { Skills } from '../Home/Skills';
import "./styles.css";




class About extends React.Component {
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
              <h3>Master of Science, Computer Science (August 2023)</h3>
              <p>
              University of Southern California
              Los Angeles, CA
              </p>
              <img 
                src="./USC_logo.jpeg" 
                alt="USC"
                style={{ width: "10%", height: "auto" }}
              />
              <h3>Bachelor of Science, Data Science (June2021)</h3>
              <p>
              University of California, San Diego
              San Diego, CA
              </p>
              <img 
                src="./UCSD_logo.png" 
                alt="UCSD"
                style={{ width: "10%", height: "auto" }}
              />
            </ul>
            <h2>Core Competencies & Skills</h2>  
            <Skills/>       
            <h2>
            Professional Experience
            </h2>
            <ul>   
              <h3>Web Development and Data Analysis Specialist 	
(Research Assistant)</h3>  
              <p><a href="https://sites.usc.edu/inr/">Interactive Neuro Rehabilitation Lab, USC
(2022-2023), Los Angeles, CA</a></p>
              <p> 						 							
Developed web applications at INR for human-centric, explainable artificial intelligence system for evaluating stroke rehabilitation. Communicated closely with expert clinical therapists and team members to understand their unique requirements in order to capture high-quality data. 
Developed responsive web applications using React and Material UI allowing users to segment and rate patients’ movements. Improved performance of web application by creating reusable components
Developed a RESTful API using Node.js and Express, connected to Swagger API and Microsoft SQL Management Studio database. API retrieved and processed data from database and displayed it to the front end. Implemented a caching mechanism to improve response time and reduce load on the database.
Maintained and optimized Microsoft SQL Management Studio databases for both segmentation and rating. Analyzed and extracted insights from database using SQL and Python libraries including Pandas and NumPy. Pushed and retrieved data in batches and developed custom scripts to automate data analysis on user behavior.


              </p>
              <h3>Web Designer and Data Analysis Specialist (Intern)	
</h3> 
              <p>Bosch Automotive Products Co. (2021), Suzhou, China</p>
              <p>								
              Scraped data from Bosch’s internal website, and used data to build PowerBI KPI reports. With these reports, Product Managers visualize projects and status of issues, as well as oversee unusual trends   All reports remain up-to-date, and well-organized in MSTeams to promote easy access.
              Solved pain points of Bosch’s long training process by building online training system using PowerApps and PowerAutomate, enabling more functionalities and saving time compared to original training process. This online training system has been in use since Sept 2022.
              
              </p>
              <img 
                src="./Bosch_logo.jpg" 
                alt="Bosch"
                style={{ width: "10%", height: "auto" }}
              />
              <h3>Data Analysis and Machine Learning Specialist	 (Intern)
              </h3>   
              <p>The Coca Cola Company (2019), Shanghai, China</p>
              <p>						
              Collaborated with team of six on FSE (Flawless Segmented Execution), a business framework that equips teams with data processing tools needed to identify optimal sales points in Beijing to maximize profitability.
              Gathered and preprocessed large-scale datasets including geographical data, customer demographics and sales records. Utilized techniques such as feature engineering, dimensionality reduction, and model evaluation to enhance the accuracy and effectiveness of predictive model. Collaborated with domain experts, and business stakeholders to interpret and validate potential impact on revenue growth and cost optimization.
              </p>
              <img 
                src="./Cocacola_logo.jpg" 
                alt="Cocacola"
                style={{ width: "10%", height: "auto" }}
              />
            </ul>
            </Box>
            {/* <Box>
            <img 
            src="./graduation.jpg" 
            alt="Picture"
            style={{ width: "80%", height: "auto" }}
             />
            </Box> */}
      </Box>
    </div>
    );
  }
}

export default About;
