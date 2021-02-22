// const notes = require("../db/db");
const fs = require("fs");
const path = require("path");

const note = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));

module.exports = (app) => {
  // returning Json responce form db from API links
  app.get("/api/notes", (req, res) => {
    console.log(note);
    return res.json(note);
  });

  // writting new note to the db
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;

    console.log(newNote);

    note.push(newNote);
    res.json(newNote);
  });

  // deleting note from the db
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    let index = note.findIndex( element => {
      if (element.id === id) return true;
    });
    note.splice(index, 1);

    let notes = JSON.stringify(note);
    fs.writeFileSync("./db/db.json", notes);
    res.send("delete successful")
  });
};
