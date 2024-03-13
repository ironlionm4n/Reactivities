import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../Models/activity";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../Features/activities/dashboard/ActivitiesDashboard";

function App(): JSX.Element {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >();
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleSetActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleEditActivityOpen = (id?: string) => {
    id ? handleSetActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleEditActivityClose = () => {
    setEditMode(false);
  };

  const openForm = () => {
    setEditMode(true);
  };

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <NavBar openForm={openForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivitiesDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSetActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleEditActivityOpen}
          closeForm={handleEditActivityClose}
        />
      </Container>
    </Fragment>
  );
}

export default App;
