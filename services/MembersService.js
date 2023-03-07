import axios from "axios";
import client from "../app/api/client";
// import Mongoose from "mongoose";
// const mongoClient = new MongoClient(
//   "mongodb+srv://rafaelogando813:88Iwc8mKOsDDXlIi@cluster0.z86l93n.mongodb.net/Movil2?retryWrites=true&w=majority"
// );

// const mongoose = Mongoose;

export const GetMembers = async () => {
  const {data} = await client.get("/members");
    console.log("members: ",data);
    return data;
};


export const GetMembersById = async (id=1) => {
  const {data} = await client.get(`/members/${id}`);
    console.log("members: ",data);
    return data;
};

export const CreateMember = async (member) => {
  try {
    const {data} = await client.post("/members",member);
    console.log("oye",data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteMember = async (id) => {
  const {data} = await client.delete(`/members/${id}`);
    console.log("members: ",data);
    return true;
};

export const UpdateMember = async (id,member) => {
  const {data} = await client.put(`/members/${id}`,member);
    console.log("members: ",data);
    return data;
};
