import React from 'react';
import { Box, Link } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaBook } from "react-icons/fa";




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
            <p><FaMapMarkerAlt/> &nbsp;Pasadena, CA</p>
            <p color="inherit" ><FaBook/> &nbsp;University of Southern California</p>
            <p><FaEnvelope/> &nbsp;<Link color="inherit" href="mailto: zhaoyigu@usc.edu" className="email">Email</Link></p>	
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
              <p>
              Hello, my name is Lucy. I am excited to have the opportunity to share a bit about myself. 
              I believe that each person's journey is unique and shaped by various experiences and passions. 
              Allow me to take you on a brief tour of my life and interests.
              </p>
            </ul>
            <h2>Background</h2>
            <ul>
              <p>
              I was born and raised in Qingdao, China. At age of 15, I went to America for education. 
              Away from family, I learned to be independent like studying without supervision and doing my own chores. 
              Also, growing up in different communities has greatly influenced my 
              perspective on life. It has taught me the values of inclusivity, open-mindedness, 
              and the importance of embracing different cultures and ideas. 
              </p>
            </ul>
            <h2>Education and Career</h2>
            <Box display="flex">
            
            <Box>
            
            
            <ul>
              <p>I pursued my undergraduate degree at University of California, San Diego where I studied Data Science.
              Now, I'm at University of Southern California where I studied Computer Science. 
              Throughout my academic journey, I’m constantly pushing my limits as I delve into the worlds of hard web application problems, 
              refining my knowledge in JavaScript, React, React Native, and GraphicQL. 
              It has revealed to me how complex the role of a software engineer is, 
              and I realize that is so much more I need to explore within this realm.
              Thus, the culmination of these projects and work experiences have given me a strong passion for web application. 
                This led me to work in the related fields. 
                I have had the privilege of working at Interactive Neurorehabilitation Lab for a year, 
                where I have gained valuable experience and honed my skills in UI/UX and data management.</p> 
            </ul>
            <h2>
            Passions and Hobbies
            </h2>
            <ul>        
              <p> Outside of my professional life, I have a variety of passions and hobbies that bring me joy and fulfillment. 
                One of my greatest passions is cooking. Whether it's learning a new recipe, improvising a new dish, or cooking for friends and family, 
                I find immense satisfaction in dedicating time to this pursuit. 
                Additionally, I enjoy exercising such as pilates, weight training, and boxing. These activities help me unwind, explore my creativity, 
                and maintain a balanced lifestyle.
              </p>
            </ul>
            </Box>
            <Box>
            <img 
            src="./graduation.jpg" 
            alt="Picture"
            style={{ width: "80%", height: "auto" }}
             />
            </Box>
            </Box>
            
            <h2>
              Personal Values
            </h2>
            <ul>
              <p>            
                My core values are deeply rooted in balance, attitude, and perseverance. 
                I value balance in all aspects of life. I strive to maintain a harmonious equilibrium between work, family, personal pursuits, and self-care. I believe that balance fosters well-being, productivity, and overall satisfaction.
                I prioritize maintaining a positive and optimistic attitude in all situations. I believe that a positive mindset can greatly influence outcomes and inspire others. I approach challenges with a solution-oriented mindset, seeking opportunities for growth and learning.
                Lastly, I believe in the power of perseverance and the ability to overcome challenges. 
                I am committed to pushing through obstacles, staying resilient, and continuously striving for personal and 
                professional growth.
              </p>
            </ul>
          <h2>
          Goals and Aspirations
          </h2>
            <ul>
              <p>
Looking ahead, my goal is to find a job that aligns with my skills, passions, and values. 
I am learning new things, preparing my job application and connecting with people in order to achieve this objective. 
I believe that continuous learning and personal growth are essential for success and I am committed to pursuing opportunities that challenge me to evolve both personally and professionally.</p>
            </ul>
          </Box>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    </Box>
    </div>
    );
  }
}

export default About;
