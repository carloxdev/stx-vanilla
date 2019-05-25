import SlimSelect from '../node_modules/slim-select'
import "../node_modules/slim-select/dist/slimselect.min.css"
import './styles/FieldSelect.css'

export default class FieldSelect {

    constructor (settings) {

        if (typeof settings !== 'undefined' || settings != {}) {
            this.id = settings["id"]
            this.container = null
            this.change_method = settings["change_method"]
            this.init()
        } else {
            throw new Error("Se debe proporcionar configuraciones")
        }
    }

    init() {
        this.container = new SlimSelect({
            select: '#' + this.id,
            placeholder: 'Selecciona un valor',
            searchText: 'buscar',
            searchPlaceholder: 'buscar',
            onChange: this.change_method
        })
    }

    select_Option(_opt) {
        this.container.set(_opt)
    }

    add_EmptyOption() {
        let select = document.getElementById(this.id)
        let opt_empty = document.createElement('option')

        opt_empty.value = null
        opt_empty.text = '--------'

        select.add(opt_empty)
    }

    add_Option (value, text) {
        let opt = document.createElement('option');
        opt.value = value
        opt.text = text

        let select = document.getElementById(this.id)
        select.add(opt)

        // this.init()
    }

    clear () {
        let select = document.getElementById(this.id)
        select.options.length = 0
    }

    restart() {
        this.clear_Options()
        this.container.destroy()

        this.init()
    }

    get_Value () {
        return this.container.selected()
    }

    clear_Options() {
        var select = document.getElementById(this.id)
        for (let i in select.options) {
            select.options[i] = null
        }
    }

    mark_Options(data) {
        var select = document.getElementById(this.id)
        for (var i = 0; i < select.options.length; i++) {
            if (data == parseInt(select.options[i].value)) {
                select.options[i].selected = true
            }
        }
    }
}