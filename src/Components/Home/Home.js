import React, { Component } from "react";
import Header from "../../ReusableCompnents/Header";
import { Row, Col } from "reactstrap";
import HomeCard from "./HomeCard";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import Loader from "../../ReusableCompnents/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";

class Home extends Component {
  componentDidMount() {
    this.props.fetch_Repositries(this.props.queryItem, 1);
  }
  renderCard = () => {
    const { repositoryObj, general, history } = this.props;

    if (repositoryObj.repositoryArray.length > 0) {
      return (
        <InfiniteScroll
          dataLength={repositoryObj.repositoryArray.length}
          next={this.fetchMoreData}
          hasMore={repositoryObj.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {repositoryObj.repositoryArray.map((repository, index) => {
            return (
              <Col xl={12} lg={12} md={12} sm={12} sx={12} className="mt-3">
                <HomeCard
                  repository={repository}
                  key={index}
                  history={history}
                  general={general}
                />
              </Col>
            );
          })}
        </InfiniteScroll>
      );
    }
  };

  fetchMoreData = () => {
    const { general, fetch_Repositries, queryItem, repositoryObj } = this.props;
    general(
      [{ prop: "repositoryObj.page", value: repositoryObj.page + 1 }],
      UPDATE_HOME_PROPS
    );
    fetch_Repositries(queryItem, repositoryObj.page + 1);
  };

  render() {
    const { repositoryObj, history, general, queryItem, fetch_Repositries } =
      this.props;
    return repositoryObj.isLoading === true ? (
      <Loader isLoading={repositoryObj.isLoading} />
    ) : (
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

          {this.renderCard()}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ HomeR }) => {
  return { repositoryObj: HomeR.repositoryObj, queryItem: HomeR.queryItem };
};
export default connect(mapStateToProps, actions)(Home);
