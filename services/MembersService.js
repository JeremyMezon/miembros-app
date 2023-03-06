import axios from "axios";
// import Mongoose from "mongoose";
// const mongoClient = new MongoClient(
//   "mongodb+srv://rafaelogando813:88Iwc8mKOsDDXlIi@cluster0.z86l93n.mongodb.net/Movil2?retryWrites=true&w=majority"
// );

// const mongoose = Mongoose;

export const GetMembers = async () => {
  //   const data = mongoClient.db().collection("Members");

  console.log(data);
  //   return JSON.parse(JSON.stringify(data));
};

export const CreateMember = async (data) => {
  try {
    const response = await axios.post("http://localhost:6060/members", data);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const DeleteMember = (data) => {
  //   mongoClient.db().collection("Members").aggregate(data);
};

const UpdateMember = (data) => {
  //   mongoClient.db().collection("Members").aggregate(data);
};
