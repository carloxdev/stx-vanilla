import flatpickr from '../node_modules/flatpickr'
import '../node_modules/flatpickr/dist/flatpickr.min.css'
import { Spanish } from '../node_modules/flatpickr/dist/l10n/es.js'
import './styles/FieldDateRange.css'

import moment from 'moment'


class FieldDateRange {

    constructor(_field1, _field2, _type) {
        this.return_format = ""
        this.type = _type
        this.container1 = null
        this.container2 = null
        this.init(_field1, _field2, _type)
    }

    init(_field1, _field2) {
        let init_format = ""
        let enable_time = false

        if (this.type=="date") {
            init_format = 'd/m/Y'
            enable_time = false
            this.return_format = "YYYY-MM-DD"
        }

        if(this.type=="datetime") {
            init_format = 'd/m/Y H:i'
            enable_time = true
            this.return_format = "YYYY-MM-DD HH:mm:ss"
        }

        this.container1 = flatpickr(
            '#' + _field1,
            {
                dateFormat: init_format,
                locale: Spanish,
                enableTime: enable_time
            }
        )
        this.container2 = flatpickr(
            '#' + _field2,
            {
                dateFormat: init_format,
                locale: Spanish,
                enableTime: enable_time
            }
        )
    }

    clear() {
        this.container1.clear()
        this.container2.clear()
    }

    get_Field1Value () {
        var date = moment(this.container1.latestSelectedDateObj)
        return date.format(this.return_format)
    }

    get_Field2Value () {
        var date = moment(this.container2.latestSelectedDateObj)
        return date.format(this.return_format)
    }


}

export default FieldDateRange;