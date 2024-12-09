import mongoose from "mongoose";

const DATABASE_URI = process?.env?.DATABASE_URI;
const DATABASE_NAME = process?.env?.DATABASE_NAME;

export const connectDB = async () => {
  try {
    await mongoose?.connect(`${DATABASE_URI}/${DATABASE_NAME}`);
  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);
  }
};
