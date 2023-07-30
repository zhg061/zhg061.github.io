import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel as CarouselBootstrap } from 'react-responsive-carousel';
// import PieChart from './PieChart';
import RadarChart from './RadarChart';
import "./Skills.css"

export const Skills = () =>{
      const frontend = {
        labels: ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Material UI', 'Version Control (Git)'],
        datasets: [
          {
            label: 'Front-End Development',
            data: [95, 85, 95, 95, 90, 95, 90],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75,192,192,1)',
          },
        ],
      };
      const languages = {
        labels: ['TypeScript', 'Javascript', 'Python', 'Java', 'C++'],
        datasets: [
          {
            label: 'Programming Languages',
            data: [85, 95, 95, 90, 85],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 0, 0, 1)',
          },
        ],
      };
      const database = {
        labels: ['Data Manipulation and Analysis', 'Data Storytelling', 'Data Visualization', 'Machine Learning', 'Database and SQL', 'Business Acumen'],
        datasets: [
          {
            label: 'Business Analysis',
            data: [95, 90, 95, 85, 75, 95],
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgba(0, 255, 0, 1)',
            pointBackgroundColor: 'rgba(0, 255, 0, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 255, 0, 1)',
          },
        ],
      };
      const microsoft = {
        labels: ['Power BI (KPI)', 'Power Apps', 'Power Automate', 'SharePoint (Cloud)', 'Excel'],
        datasets: [
          {
            label: 'Microsoft 365',
            data: [95, 95, 80, 75, 95],
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgba(255, 165, 0, 1)',
            pointBackgroundColor: 'rgba(255, 165, 0, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 165, 0, 1)',
          },
        ],
      };
      return (
        <section className="skills" id="skills">
          <div style={{ display: 'flex' }}>
            <RadarChart data={frontend}/>
            <RadarChart data={database}/>
          </div>
          <div style={{ display: 'flex' }}>
            <RadarChart data={languages}/>
            <RadarChart data={microsoft}/>
          </div>
        </section>
      )
}