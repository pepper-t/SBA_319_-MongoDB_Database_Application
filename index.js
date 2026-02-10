/*
# Creating Express Server w/ MongoDB Driver


## Steps:
1.  Create `server.js`.
2.  `npm init -y` to create package.json
3.  edit package.json for `"type": "module"` & optional dev script
4.  Install packages `npm i express mongodb dotenv`
5.  Create `.gitignore` & `.env` files and populate

## Accessing .env (environmental) variables:
1.  import `dotenv` on any file that needs access
2.  invoke `dotenv.config()`.
3.  to access variables use `process.env.variableName`.


*/

// imports
import express from "express";
import { logReq, globalErr } from "./middleware/middlewares.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import dotenv from "dotenv";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || "";

// Middlewares
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/quotes", quoteRoutes);//quote routes

// Global Err MIddlewares
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});