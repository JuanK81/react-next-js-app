//our-domain/
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id          : 'm1',
		title       : 'First Meetup',
		image       :
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg/1024px-Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg',
		address     : 'Ainsa',
		description : 'First meetup'
	},
	{
		id          : 'm2',
		title       : 'First Meetup',
		image       :
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg/1024px-Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg',
		address     : 'Ainsa',
		description : 'Second meetup'
	}
];

const HomePage = () => {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
