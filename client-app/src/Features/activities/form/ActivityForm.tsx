import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/activity";

interface Props {
  closeForm: () => void;
  selectedActivity: Activity | undefined;
}

const ActivityForm = ({ closeForm, selectedActivity }: Props) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={selectedActivity?.title} />
        <Form.TextArea placeholder="Description" />
        <Form.Input placeholder="Category" />
        <Form.Input type="date" placeholder="Date" />
        <Form.Input placeholder="City" />
        <Form.Input placeholder="Venue" />
        <ButtonGroup widths={2}>
          <Button positive content="Submit" />
          <Button negative content="Cancel" onClick={closeForm} />
        </ButtonGroup>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
