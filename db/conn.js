
//ORIGINAL
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
    await quotes.createIndex({ text: 1 });
await quotes.createIndex({ category: 1 });//, { unique: true });
  }

async function createQuoteSchema() {  
  await db.command({
    collMod: "quotes",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["author", "text", "category"],

        properties: {
          author: {
            bsonType: "string",
          },
          text: {
            bsonType: "string",
          },
          category: {
            bsonType: "string",
          },
        },
      },
  } });
};



export default db;















/*

/*
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
  await db.command({
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

*/








//Conflicts
/*


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

  db = conn.db("favorite_quotes"); // MongoDB database at site

  await createIndexSetup();
  await createQuoteSchema();
  await createAuthorSchema();
  await createCategorySchema();
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function createIndexSetup() {
  // Indexes for quotes collection
  const quotes = db.collection("quotes");
  await quotes.createIndex({ author: 1 });
  await quotes.createIndex({ category: 1 });
  await quotes.createIndex({ text: 1 }, { unique: true }); // Prevent duplicate quotes

  // Indexes for authors collection
  const authors = db.collection("authors");
  await authors.createIndex({ name: 1 }, { unique: true }); // Prevent duplicate authors

  // Indexes for categories collection
  const categories = db.collection("categories");
  await categories.createIndex({ name: 1 }, { unique: true }); // Prevent duplicate categories
}

async function createQuoteSchema() {
  await db.command({
    collMod: "quotes",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["author", "category", "text"],
        properties: {
          author: {
            bsonType: "string",
            description: "Author name is required and must be a string",
          },
          category: {
            bsonType: "string",
            description: "Category is required and must be a string",
          },
          text: {
            bsonType: "string",
            description: "Quote text is required and must be a string",
          },
        },
      },
    },
  });
}

async function createAuthorSchema() {
  await db.command({
    collMod: "authors",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name"],
        properties: {
          name: {
            bsonType: "string",
            description: "Author name is required and must be a string",
          },
          bio: {
            bsonType: "string",
            description: "Optional biography of the author",
          },
          quoteCount: {
            bsonType: "int",
            minimum: 0,
            description: "Number of quotes by this author",
          },
        },
      },
    },
  });
}

async function createCategorySchema() {
  await db.command({
    collMod: "categories",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name"],
        properties: {
          name: {
            bsonType: "string",
            description: "Category name is required and must be a string",
          },
          description: {
            bsonType: "string",
            description: "Optional description of the category",
          },
          quoteCount: {
            bsonType: "int",
            minimum: 0,
            description: "Number of quotes in this category",
          },
        },
      },
    },
  });
}

export default db;
*/
