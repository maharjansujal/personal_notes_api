// import required modules
const fs = require("fs");
const path = require("path");
const notesPath = path.join(__dirname, "../../assets/notes.json");
let notes = require(notesPath);

// save changes to the data made to the notes.json file
const saveToNotes = () => {
	fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));
};

// gets all notes from notes.json
const getNotes = (req, res) => {
	try {
		res.status(200).json(notes.notes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// gets specific note based on id
const getNotesById = (req, res) => {
	const notes = notes.notes.find((note) => note.id == req.params.id);

	if (notes) {
		res.status(200).json(notes);
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// adds new note to notes.json
const createNote = (req, res) => {
	const { title, content } = req.body;
	const newNote = {};
	newNote.id = Date.now();
	newNote.title = title;
	newNote.content = content;
	notes.notes.push(newNote);
	saveToNotes();
	res.status(201).json(newNote);
};

// updates an existing note based on id
const updateNote = (req, res) => {
	const noteIndex = notes.notes.findIndex((note) => note.id == req.params.id);
	const { title, content } = req.body;

	if (noteIndex !== -1) {
		const updatedNote = {
			id: notes.notes[noteIndex].id,
			title: title,
			content: content,
		};
		notes.notes[noteIndex] = updatedNote;

		saveToNotes();
		res.status(200).json(updatedNote);
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// deletes an existing note based on id
const deleteNote = (req, res) => {
	const originalLength = notes.notes.length;
	notes.notes = notes.notes.filter((note) => note.id != req.params.id);
	saveToNotes();
	if (notes.notes.length < originalLength) {
		res.status(200).json({ message: "Note deleted successfully" });
	} else {
		res.status(404).json({ message: "Note not found" });
	}
};

// exporting all the functions to use it in another file
module.exports = { getNotes, getNotesById, createNote, updateNote, deleteNote };