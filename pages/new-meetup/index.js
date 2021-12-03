//our-domain/news
import { Fragment } from 'react';
import Link from 'next/link';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewsMeetupPage = () => {
	const addMeetupHandler = (enteredMeetupData) => {
		console.log(enteredMeetupData);
	};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewsMeetupPage;
