import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    experience && (
      <Fade right duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-success">
                  <i className="ni ni-briefcase-24 text-success" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-success">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Experience;
