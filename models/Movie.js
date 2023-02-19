const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "Please enter a movie title"],
      maxlength: 100,
    },
    sysnopsis: {
      type: String,
      required: [true, "Please enter a brief description of the movie"],
      maxlength: 300,
    },
    year: {
      type: Date,
      required: [true, "Please enter date when the movie was released"],
      default: "2000-01-01",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
    genre: {
      type: String,
      enum: [
        "action",
        "comedy",
        "drama",
        "fantasy",
        "horror",
        "mystery",
        "romance",
        "thriller",
        "documentary",
        "history",
        "sports",
      ],
      required: [true, "Please provide a genre"],
    },
    cast: {
      type: String,
      maxlength: 500,
    },
    directors: {
      type: String,
      maxlength: 150,
    },
    writers: {
      type: String,
      maxlength: 150,
    },
    runtime: {
      type: Number,
      required: [true, "Please provide a runtime eg. 100 for (100 minutes)"],
    },
    studio: {
      type: String,
      maxlength: 200,
    },
    trailer: {
      type: String,
      maxlength: 200,
    },
    streaming: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movie", MoviesSchema);
// TODO: * add image upload support for poster
// TODO: * decide on how to store list of items eg. movie staff members and add, same for streaming services
