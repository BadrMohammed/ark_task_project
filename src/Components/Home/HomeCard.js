import React from "react";
import {
  Card,
  Row,
  Col,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";

const HomeCard = ({ repository, key, history, general }) => {
  const onView = (e) => {
    e.preventDefault();
    general([{ prop: "repo_details", value: repository }], UPDATE_HOME_PROPS);
    history.push("/repository_detail");
  };
  return (
    <Card className="home_card ml-5 mr-5" key={key} onClick={onView}>
      <Row className="home_card_row">
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
          <img
            top
            width="200"
            height="200"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            src={repository.owner_photo}
            alt=""
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h5">{repository.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {repository.owner_userName}
            </CardSubtitle>
            <CardText>{repository.description}</CardText>

            <Button className="home_btn">{repository.stars + " stars "}</Button>

            <Button style={{ marginLeft: "5px" }} className="home_btn">
              {repository.issues + " issues "}
            </Button>

            <span style={{ marginLeft: "5px" }}>
              {"Submitted 30 days ago by " + repository.owner_userName}
            </span>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default HomeCard;
