import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css'
import { Spanish } from "flatpickr/dist/l10n/es.js"
import './styles.css'

var moment = require('moment')

export default class FieldDate {

    constructor (_id, _type) {

        let init_format = ""
        let enable_time = false
        if (_type=="date") {
            init_format = 'd/m/Y'
            enable_time = false
            this.return_format = "YYYY-MM-DD"
        }

        if(_type=="datetime") { 
            init_format = 'd/m/Y H:i'
            enable_time = true
            this.return_format = "YYYY-MM-DD HH:mm:ss"
        }

        this.container = flatpickr(
            '#' + _id,
            {
                dateFormat: init_format,
                locale: Spanish,
                enableTime: enable_time
            }
        )
    }

    clear() {
        this.container.clear()
    }

    get_Value () {
        let date = moment(this.container.latestSelectedDateObj)
        return date.format(this.return_format)
    }
}