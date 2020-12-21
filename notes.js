const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title, body) => {
    const notes = loadNotes();

    duplicateNote = notes.find((note) => note.title == title)

    if (!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.green.inverse("new note added"));
    } else {
        console.log(chalk.red.inverse("note is taken"));
    }

}

const removeNotes = (title) => {
    const notes = loadNotes();

    const updatedNotes = notes.filter((note) =>  note.title != title )

    if(updatedNotes.length == notes.length){
        console.log(chalk.red.inverse('Note not found'))
    } else{
        saveNotes(updatedNotes);
        console.log(chalk.green.inverse(`The note having the title ${title} is removed`))
    }
}

const listNotes = () =>{
    const notes = loadNotes();

    console.log(chalk.yellow("Your notes .."));

    notes.forEach(note => {
        console.log(chalk.yellow(note.title))
    });
}

const readNotes = (title) => {
    const notes = loadNotes();

    const requiredNote = notes.find((note) => note.title == title)

    if(requiredNote){
        console.log(chalk.green(`Here is the note ${requiredNote.title} \n ${requiredNote.body}`));
    }else{
        console.log(chalk.red('Note not found'));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString();
        const dataJson = JSON.parse(dataBuffer);
        return dataJson;
    } catch {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}