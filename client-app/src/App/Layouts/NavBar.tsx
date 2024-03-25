import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={NavLink} to="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" as={NavLink} to="/activities" />
        <Menu.Item>
          <Button
            positive
            className="ui button"
            as={NavLink}
            to="/createActivity"
          >
            Create Activity
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
