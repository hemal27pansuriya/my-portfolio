import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets, link }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle style={{ color: "#144e35" }} tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle style={{ color: "#1d734b" }} tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left pr-4 pl-4">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
            {link ? (
              <Button
                className="btn-icon"
                color="success"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">Link</span>
              </Button>
            ) : null}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
