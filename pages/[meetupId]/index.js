import { Fragment } from "react";
import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    
	return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        {/* <meta>name="description" content="browse a list of meetups"</meta> */}
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
      "mongodb+srv://JuanKDev:Miraque22bases@cluster00.jfz97.mongodb.net/meetups?retryWrites=true&w=majority"
      //code not to be run on client side, this is a secure space
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetupsNext");

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); //to fetch only the id.

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() },
     })),
    }
};

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
      "mongodb+srv://JuanKDev:Miraque22bases@cluster00.jfz97.mongodb.net/meetups?retryWrites=true&w=majority"
      //code not to be run on client side, this is a secure space
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetupsNext");

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)}); //to fetch only the id.

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
};

export default MeetupDetails;
