import {
  Button,
  ButtonGroup,
  Card,
  CardMeta,
  Icon,
  Image,
} from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import LoadingComponent from "../../../App/Layouts/LoadingComponent";

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const { selectedActivity: activity } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <Card>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <CardMeta>
          {activity.venue}, {activity.city}
          <Icon name="map marker alternate" />
        </CardMeta>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>{activity.category}</p>

        <ButtonGroup widths={2}>
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => activityStore.openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={() => activityStore.setSelectedActivity(undefined)}
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
