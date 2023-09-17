import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel as CarouselBootstrap } from 'react-responsive-carousel';
import RadarChart from './RadarChart';
import "./Skills.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Skills = (props) =>{
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios.get(
        // 'http://localhost:5000/skills'
        'https://lucyporfoliobackend-a266447ba206.herokuapp.com/skills'
        ).then(
      res=>{
        setSkills(res.data);
      }
    )
    }    
    fetchData();
  }, []); 
      return (
        <section className="skills" id="skills">
          <div style={{ display: 'flex' }}>
            {
              skills.filter(skill => skill.type === "SDE").map(skill=>
                <RadarChart data={skill.content} key={skill.name}/>)
            }
          </div>
          <div style={{ display: 'flex' }}>
            {
              skills.filter(skill => skill.type === "DS").map(skill=>
                <RadarChart data={skill.content} key={skill.name} />)
            }
          </div>
        </section>
      )
}