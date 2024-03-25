import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivitiesList from "./ActivitiesList";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../App/Layouts/LoadingComponent";

const ActivitiesDashboard = () => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitiesList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivitiesDashboard);
