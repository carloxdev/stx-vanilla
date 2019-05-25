import Note from './Note.js'
import './ListEmpty.js'
import './styles/ListNotes.css'


export default class ListNotes {

    constructor (id) {
        this.container = document.getElementById(id)
        this.is_empty = false
    }

    clear() {
        this.container.innerHTML = ""
    }

    load(data) {
        this.clear()

        var self = this
        if (data.length != 0) {
            for (let item in data) {
                let record = data[item]
                let note = new Note()
                note.set_Status(record.status_nombre)
                note.set_Date(record.date)
                note.set_Comments(record.comments)
                note.set_Created_Date(record.created_date)
                note.set_Created_By_Desc(record.created_by_desc)
                self.add_Note(note.get_Render())
            }
        }
        else {
            self.show_EmptyMessage()
        }
    }

    show_EmptyMessage() {
        this.is_empty = true
        var html = `<div class='list-empty'>
                        No se encontraron registros
                    </div>`

        this.container.innerHTML = html
    }

    add_Note(node) {
        this.container.innerHTML += node
    }

}