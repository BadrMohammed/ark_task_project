import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Header from "../../ReusableCompnents/Header";
import * as actions from "../../Redux/Actions/index";
import { showNotificationMessage } from "../../ReusableCompnents/GeneralFunctions";
class Details extends Component {
  componentDidMount() {
    this.checkHasDetails();
  }

  checkHasDetails = () => {
    const { repo_details, history } = this.props;
    if (repo_details === null) {
      showNotificationMessage("No Details to view");
      history.push("/");
    }
  };
  renderText = (label, value) => {
    return (
      <Row>
        <Col className="mt-1">
          <span>{label} : </span>
          <span>{value}</span>
        </Col>
      </Row>
    );
  };
  render() {
    const { repo_details, history, general, queryItem, fetch_Repositries } =
      this.props;
    return (
      <div className="container_div">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} sx={12}>
            <Header
              history={history}
              general={general}
              queryItem={queryItem}
              fetch_Repositries={fetch_Repositries}
            />
          </Col>

          {repo_details !== null ? (
            <Row className="ml-5 mr-5 mt-5 mb-5">
              <Col className="text-center" xl={2}>
                <img
                  src={repo_details.owner_photo}
                  alt="logo"
                  width="200"
                  height="200"
                  className="img-thumbnail img-fluid"
                />
                <p className="mt-2">{repo_details.owner_userName}</p>
              </Col>
              <Col>
                <Row className="mt-3">
                  {this.renderText("Repository name", repo_details.name)}
                  {this.renderText(
                    "Repository description",
                    repo_details.description
                  )}
                  {this.renderText(
                    "Number of stars for the repo.",
                    repo_details.stars
                  )}
                  {this.renderText(
                    "Number of issues for the repo.",
                    repo_details.issues
                  )}
                </Row>
              </Col>
            </Row>
          ) : null}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ HomeR }) => {
  return { repo_details: HomeR.repo_details, queryItem: HomeR.queryItem };
};
export default connect(mapStateToProps, actions)(Details);
