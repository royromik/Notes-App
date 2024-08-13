const notes = require("./notes");
const yargs = require("yargs");


// customize yargs version
yargs.version("1.1.0");

// add a note command

yargs.command({
    command: 'add',
    describe: 'To add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note info',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

// remove a note command

yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

// list a note command

yargs.command({
    command: 'list',
    describe: 'To list a note',
    handler() {
        listNotes();
    }
})

// read a note command

yargs.command({
    command: 'read',
    describe: 'To read a note',
    builder: {
        title:{
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse();