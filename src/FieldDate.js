import flatpickr from "../node_modules/flatpickr"
import '../node_modules/flatpickr/dist/flatpickr.min.css'
import { Spanish } from "../node_modules/flatpickr/dist/l10n/es.js.js.js"
import './styles/FieldDate.css'

var moment = require('../node_modules/moment')

export default class FieldDate {

    constructor (_id, _type) {
        this.id = _id

        let init_format = ""
        let enable_time = false
        let no_calendar = false

        if (_type=="date") {
            init_format = 'd/m/Y'
            enable_time = false
            no_calendar = false
            this.return_format = "YYYY-MM-DD"
        }

        if(_type=="datetime") {
            init_format = 'd/m/Y H:i'
            enable_time = true
            no_calendar = false
            this.return_format = "YYYY-MM-DD HH:mm:ss"
        }

        if(_type=="onlytime") {
            init_format = "H:i"
            enable_time = true
            no_calendar = true
        }

        this.container = flatpickr(
            '#' + this.id, {
                dateFormat: init_format,
                locale: Spanish,
                enableTime: enable_time,
                noCalendar: no_calendar,
            }
        )
    }

    clear() {
        this.container.clear()
    }

    set_Value(value) {
        let input = document.getElementById(this.id)
        input.value = value
    }

    get_Value () {
        let date = moment(this.container.latestSelectedDateObj)
        return date.format(this.return_format)
    }
}