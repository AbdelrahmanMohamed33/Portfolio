import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/shopping cart.png";
import projImg2 from "../assets/img/memory guide.png";
import projImg3 from "../assets/img/ecommerce3.png";
import colorSharp2 from "../assets/img/4226432_2243848.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Github } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Shopping Cart",
      description: "A shopping cart on a website allows users to select and manage the items they want to purchase. was used to make this project : ( HTML, CSS, Bootstrap, and JavaScript ) .",
      imgUrl: projImg1,
    },
    {
      title: "Memory Guide",
      description: "memory guide is a mental health website includes our emotional, psychological, and social well-being.was used to make this project:( HTML, CSS, Bootstrap, and Java script) .",
      imgUrl: projImg2,
    },
    {
      title: "Ecommerce website",
      description: "A Ecommerce website allows users to select and manage the items they want to purchase. was used to make this project (HTML, CSS, Bootstrap, and JavaScript).",
      imgUrl: projImg3,
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> let me present my most prominent projects and explain to you what I used to complete these projects .</p>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}