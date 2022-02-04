import mongoose from "mongoose";
import config from "config";

let database: mongoose.Connection;

export default function connect() {
  const uri: string = config.get("database.mongoURI");
  if (database) {
    return;
  }

  console.log("connecting to database");

  mongoose.connect(uri);

  database = mongoose.connection;
  database.once("open", async () => {
    console.log("connected to database");
  });

  database.on("error", () => {
    console.error("error connecting to database");
  });
}

export const disconnect = () => {
  if (!database) {
    return;
  }

  mongoose.disconnect();
};
