import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-demo-92ac9-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history('/');
    });
  }
  return (
    <>
      <h1>FORM</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};
export default NewMeetupPage;
