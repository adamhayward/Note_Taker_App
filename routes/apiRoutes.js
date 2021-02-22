const notes = require("../db/db");
const fs = require("fs");
const path = require("path");


const note = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));

module.exports = (app) => {
  //returning Json responce form db from API links
  app.get("/api/notes", (req, res) => {
    console.log(note)
    return res.json(note);
  });
  
  //add it to the db.json file, and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    var newNote = req.body;

    console.log(newNote)
    console.log(note)
    note.push(newNote)
    res.json(newNote)

  });
  //TODO DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. 
  // This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, 
  // you'll need to read all notes from the db.json file,
  //remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes/:id", (req, res) => {
  res.send("Got a Delete route")
});


};


