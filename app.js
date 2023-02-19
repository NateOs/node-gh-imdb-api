require("dotenv").config();
require("express-async-errors");


const express = require("express");
const app = express();

// routers


// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

const connectDB = require("./db/connect");
// const authenticateUser = require("./middleware/authentication");

// routes
// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/movies", authenticateUser, movies);
// app.use("/api/v1/tvShows", authenticateUser, tvShows);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

// start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
