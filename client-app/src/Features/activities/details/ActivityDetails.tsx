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
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const ActivityDetails = () => {
  const { id } = useParams();

  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

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
            as={Link}
            to={`/editActivity/${activity.id}`}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            as={Link}
            to="/activities"
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
