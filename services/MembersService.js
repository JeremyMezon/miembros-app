import { MongoClient } from "mongodb"
import Mongoose from "react-native-mongoose";
const mongoClient = new MongoClient('mongodb+srv://rafaelogando813:88Iwc8mKOsDDXlIi@cluster0.z86l93n.mongodb.net/Movil2?retryWrites=true&w=majority');

const mongoose = require('mongoose');

const GetMembers = async () => {

   const data = await mongoClient.db().collection('Members').find().toArray();
   return JSON.parse(JSON.stringify(data));

}

const CreateMember = (data) => {

}

const DeleteMember = (data) => {

    mongoClient.db().collection('Members').aggregate(data);

}

const UpdateMember = (data) => {

    mongoClient.db().collection('Members').aggregate(data);

}