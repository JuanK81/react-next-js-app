//our-domain/
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb"; //server side, next excludes this from the client bundle atumatically.
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        {/* <meta>name="description" content="browse a list of meetups"</meta> */}
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

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
      meetups: meetups.map((meetup) => ({
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
