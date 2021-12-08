//our-domain/
import { MongoClient } from "mongodb";//server side, next excludes this from the client bundle atumatically.
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg/1024px-Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg",
//     address: "Ainsa",
//     description: "First meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg/1024px-Plaza_Mayor_de_A%C3%ADnsa_%28Huesca%29.jpg",
//     address: "Ainsa",
//     description: "Second meetup",
//   },
// ];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) { //runs on the server after deployment
// 	const req = context.req;
// 	const res = context.res;

// 	//fetch data, runs on the server

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	}
// };


export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://JuanKDev:Miraque22bases@cluster00.jfz97.mongodb.net/meetups?retryWrites=true&w=majority"
    //code not to be run on client side, this is a secure space
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetupsNext");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
	// revalidate: 10, //seconds to regerate the static page
  };
}

export default HomePage;
