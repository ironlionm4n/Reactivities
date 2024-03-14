import { Fragment, useEffect } from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../Features/activities/dashboard/ActivitiesDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App(): JSX.Element {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  return (
    <Fragment>
      <NavBar />
      {activityStore.loadingInitial ? (
        <LoadingComponent />
      ) : (
        <Container style={{ marginTop: "7em" }}>
          <ActivitiesDashboard />
        </Container>
      )}
    </Fragment>
  );
}

export default observer(App);
