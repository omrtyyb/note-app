const fs = require('fs')
const chalk = require('chalk')

const success = chalk.green.bold.inverse
const failed = chalk.red.bold.inverse

const addNote = (title, body) => {
    const noteArr = loadNote()
    
    const duplicateNote = noteArr.find((note) => note.title === title)
    if(!duplicateNote){
        noteArr.push({
            title: title,
            body: body
        })
        saveNote(noteArr)
        console.log(success('Success!! Note Saved Successfully'))
    }
    else{
        console.log(failed('Failed!! Please Enter a new note title'))
    }

}

const removeNote = (title) => {

    const noteArr = loadNote()
    const updatedNote = noteArr.filter(function(theNote){
        return theNote.title != title
    })
    saveNote(updatedNote)
    if(noteArr.length === updatedNote.length){
        console.log(failed('Failed!! No notes Deleted'))
    }else{
        console.log(success('Success!! Note deleted'))
    }
}



const readNotes = function(title) {
    debugger
    const noteArray = loadNote()
    const myNote = noteArray.find(function(note){
        return note.title === title
    })
    if(myNote){
        console.log(success('Success!! The body of the note is: '))
        console.log(myNote.body)
    }else{
        console.log(failed('Failed!! No notes found'))
    }
    
}




const loadNote = () => {
    try {
        const data = fs.readFileSync('./notes.json').toString()
        const noteArray = JSON.parse(data)
        return noteArray
    }catch{
        return []
    }
}

const saveNote = (note) => {fs.writeFileSync('./notes.json', JSON.stringify(note))}









module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes
}
