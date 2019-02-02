import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css'
import { Spanish } from "flatpickr/dist/l10n/es.js"
import './styles.css'

var moment = require('moment')

export default class FieldDateTime {

    constructor (id) {
        this.container =flatpickr(
            '#' + id,
            {
                dateFormat: 'd/m/Y H:i',
                locale: Spanish,
                enableTime: true
            }
        )
    }

    clear() {
        this.container.clear()
    }

    get_Value () {
        var date = moment(this.container.latestSelectedDateObj)
        return date.format(
            "YYYY-MM-DD HH:mm:ss"
        )
    }    
}