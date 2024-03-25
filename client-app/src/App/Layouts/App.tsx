import { Fragment } from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../Features/home/HomePage";

function App(): JSX.Element {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <Fragment>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
}

export default observer(App);
