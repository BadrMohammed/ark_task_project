import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  NavbarText,
} from "reactstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { UPDATE_HOME_PROPS } from "../Redux/Actions/types";
const Header = ({ history, general, queryItem, fetch_Repositries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onChangeDate = (date) => {
    let value = "created:>" + date.toISOString().split("T")[0];
    general(
      [
        {
          prop: "queryItem.q",
          value: value,
        },

        {
          prop: "repositoryObj.page",
          value: 1,
        },
      ],
      UPDATE_HOME_PROPS
    );
    fetch_Repositries(queryItem, 1, value);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Github Repository</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink onClick={(e) => history.push("/")}>Home</NavLink>
            </NavItem>
          </Nav>

          <NavbarText>
            <Row>
              <Col xl={12}>
                <DatePicker
                  locale="en"
                  className="form-control"
                  selected={new Date(queryItem.q)}
                  onChange={(date) => onChangeDate(date)}
                />
              </Col>
            </Row>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
