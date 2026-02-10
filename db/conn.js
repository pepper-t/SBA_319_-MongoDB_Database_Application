

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "";

const client = new MongoClient(connectionStr);

let conn;
let db;

try {
  conn = await client.connect();

  console.log(`MongoDB Connected...`);

  db = conn.db("favorite_quotes");//MongoDB database at site

  await createIndexSetup();
  await createQuoteSchema();
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function createIndexSetup() {
  const quotes = db.collection("quotes");//index for the quotes collection

  await quotes.createIndex({ author: -1 });
  await quotes.createIndex({ category: 1 });//, { unique: true });
  await quotes.createIndex({ text: 1 });
}

async function createQuoteSchema() {
  await db. command({
    collMod: "quotes",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["author", "category", "text"],

        properties: {
          learner_id: {
            bsonType: "int",
          },
          class_id: {
            bsonType: "int",
          },
          scores: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["type", "score"],
              properties: {
                type: {
                  enum: ["quiz", "exam", "homework"],
                },
                score: {
                  bsonType: ["int", "double"],
                  minimum: 0,
                },
              },
            },
          },
        },
      },
    },
  });
}

export default db;
