import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/activity";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import { useParams, useNavigate, Link } from "react-router-dom";
import LoadingComponent from "../../../App/Layouts/LoadingComponent";
import { v4 as uuid } from "uuid";

const ActivityForm = () => {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadingInitial,
    loadActivity,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => {
        if (activity === undefined) return;
        setActivity(activity);
      });
    }
  }, [id, loadActivity]);

  const handleSubmit = () => {
    if (activity.id) {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          type="date"
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <ButtonGroup widths={2}>
          <Button loading={loading} positive content="Submit" />
          <Button negative content="Cancel" as={Link} to="/activities" />
        </ButtonGroup>
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
