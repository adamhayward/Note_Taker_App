var express = require("express");
const notes = require("../db/db");
const fs = require("fs");
const path = require("path");

var app = express();



const note = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")))

module.exports = function (app) {
    //TODO GET /api/notes - Should read the db.json file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    return res.json(note);
  });
  //TODO POST /api/notes - Should receive a new note to save on the request body, 
  //add it to the db.json file, and then return the new note to the client.
  app.post("/api/notes", function (req, res) {
    var newNote = note.push(req.body);
    return newNote;

    var updateNote = JSON.stringify(note);
    fs.writeFileSync("../db/db.json", updateNote);
    return res.json(req.body);

  });
  //TODO DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, 
  //remove the note with the given id property, and then rewrite the notes to the db.json file.
};

app.delete("/api/notes/:id", (req, res) => {
  
})
