import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gymm from "../../Assets/Projects/gymm.png";
import esb from "../../Assets/Projects/ESB.png";
import cse from "../../Assets/Projects/cse.png";
import gym from "../../Assets/Projects/gym.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esb}
              isBlog={false}
              title="ELECTRICITY BILLING SYSTEM"
              description="This project primarily focuses on calculating the number of units utilized by the customer and generating new Meter Information associated with a new customer.There some specific features User Registration and Authentication, Customer Management ,Electricity Consumption Tracking, Bill Generation,  Billing History and Reports ,Payment Processing ,Error Handling and Validation, User Interface,  Database Integration. using Java,JDBC,MySql"
              ghLink="https://github.com/kunalsingh04/electricity"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="D BodyGarage"
              description="Designed and developed a dynamic gym website to enhance the online presence of a fitness center. This project showcases proficiency in web development, front-end design, user experience optimization, and integration of essential features Used React‑Router to turn the application into Single Page Application."
              ghLink="https://github.com/kunalsingh04/gym-dbodygarage"
              demoLink="https://dbodygaragegym.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymm}
              isBlog={false}
              title="GYM MANAGEMENT"
              description="The main objective of the project is to develop software that facilitates the data storage, data maintenance and its retrieval for the gym in an igneous way.To store the record of the customers, the staff that has the privileges to access, modify and delete any record using Java ,JDBC, MySql"
              ghLink="https://github.com/kunalsingh04/gym-management-system"
                            
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cse}
              isBlog={false}
              title="City Search Engine"
              description="In this application user get log in and select the city for which he want to search ,the cities data are loaded previously by admin but therer is a facility such that user also become a admin at sometime so he is also able to add cities in their database and help the people who are new to the city and want to go somewhere using Java ,Android"
              ghLink="https://github.com/kunalsingh04/city_search_engine"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather forecast website"
              description="Provides the user with an easy and friendly interface Provides the user with the temperature of a particular region It will also show humidity, wind speed and cloud using Reactjs, Weather API"
              ghLink="https://github.com/kunalsingh04/Weather-Forecast-Website"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
