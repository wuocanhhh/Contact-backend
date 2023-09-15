const express = require("express");
const cors = require("cors");

const {
  resourceNotFound,
  handleError,
} = require("./controller/error.controller");

const contactsRouter = require("./routes/contacts.router");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

app.use(resourceNotFound);
app.use(handleError);

module.exports = app;
