import classes from './MeetupDetail.module.css';
const MeetupDetail = (props) => {
	return (
		<section className={classes.detail}>
			<img 
            src={props.image} 
            alt={props.title} 
            />
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
		// <Fragment>
		// 	<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Enduro_-_all_mountain.jpg" alt="Enduro MTB" />
		// 	<h1>A first meetup</h1>
		// 	<address>Ainsa, Sobarbe</address>
		// 	<p>Meetup Ainsa</p>
		// </Fragment>
	);
};

export default MeetupDetail;
