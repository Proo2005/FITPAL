// lib/mongodb.js
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://prochak1922_db_user:Xan7TQKMDGKihwlS@cluster0.5zmri3m.mongodb.net/fitness";

if (!MONGO_URI) throw new Error("Please define the MONGO_URI environment variable");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
