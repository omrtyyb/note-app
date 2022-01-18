const yargs = require('yargs')
const { addNote, removeNote, readNotes } = require('./appUtil')


yargs.command({
    describe: "Adds a note to my notes",
    command: 'add',
    builder:{
        title: {
            describe: 'The title of our note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'The body of our note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log("The title = "+argv.title+ "\nThe body = " + argv.body)
        addNote(argv.title, argv.body)
    }
})

yargs.command({
    describe: 'It removes a note from notes',
    command: 'rm',
    builder:{
        title:{
            describe: 'The title you want to remove',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }

})

yargs.command({
    describe: 'It reads the note while inserting title',
    command: 'read',
    builder:{
        title:{
            describe: 'The title you want to read the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        
        readNotes(argv.title)
        // console.log('hello')
    }
})
yargs.parse()