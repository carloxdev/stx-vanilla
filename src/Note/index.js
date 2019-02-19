var moment = require('moment');
moment.locale("es")
import './styles.css'

class Note {

    constructor () {
        this.status = ""
        this.date = ""
        this.comments = ""
        this.created_date = ""
        this.created_by_desc = ""
    }

    set_Status(_value) {
        if (_value) {
            this.status = _value
        }
    }

    set_Date(_value) {
        if (_value) {
            this.date = moment(_value).format("DD MMM YYYY")
        }
    }

    set_Comments(_value) {
        if (_value) {
            this.comments = _value
        }
    }

    set_Created_Date(_value) {
        if (_value) {
            this.created_date = moment(_value).startOf(
                'hour'
            ).fromNow()
        }
    }

    set_Created_By_Desc(_value) {
        if (_value) {
            this.created_by_desc = _value
        }
    } 

    get_Render() {
        let html = `<div class="note">
                        <div class="note-body">
                            <div class="note-body-data">
                                <span class="note-body-data-label">Estado:</span>
                                <span class="note-body-data-value">${ this.status }</span>
                            </div>
                            <div class="note-body-data">
                                <span class="note-body-data-label">Fecha:</span>
                                <span class="note-body-data-value">${ this.date }</span>
                            </div>
                            <div class="note-body-data">
                                <span class="note-body-data-label">Descripcion:</span>
                                <span class="note-body-data-value">${ this.comments }</span>
                            </div>
                        </div>
                        <div class="note-footer">
                            <div class="note-footer-created_date">
                                <i class="fas fa-calendar-alt"></i> 
                                Creada ${ this.created_date }
                            </div>             
                            <div class="note-footer-created_by">
                                <i class="fas fa-user-alt"></i> 
                                ${ this.created_by_desc }
                            </div> 
                        </div>
                    </div>`

        return html
    }
}


export default Note;