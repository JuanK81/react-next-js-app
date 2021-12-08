//not components, we define server side code
// /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;

         const client = await MongoClient.connect(
           "mongodb+srv://JuanKDev:Miraque22bases@cluster00.jfz97.mongodb.net/meetups?retryWrites=true&w=majority" 
           //code not to be run on client side, this is a secure space
         );
         const db = client.db();

         const meetupsCollection = db.collection("meetupsNext");

         const result = await meetupsCollection.insertOne(data);

         console.log('result', result);

         client.close();

         res.status(201).json({ message: "Meetup inserted!" });

    }
};

export default handler;

