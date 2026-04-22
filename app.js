require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ROUTES
const resumeRoutes = require("./routes/resumeRoutes");
app.use("/resume", resumeRoutes);

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});