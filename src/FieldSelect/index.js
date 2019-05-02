import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.min.css"
import './styles.css'

export default class FieldSelect {

    constructor (id) {
        this.id = id
        this.container = null

        this.init()
    }

    init() {
        this.container = new SlimSelect({
            select: '#' + this.id,
            placeholder: 'Selecciona un valor',
            searchText: 'buscar',
            searchPlaceholder: 'buscar',
        })
    }

    select_Option(_opt) {
        this.container.set(_opt)
    }    

    add_Option (id, text) {
        this.container.destroy()

        var opt = document.createElement("option")
        opt.value = id
        opt.text = text

        var select = document.getElementById(this.id)
        select.add(opt)

        this.init()
    }

    clear () {
        var select = document.getElementById(this.id)
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

    fill_Options(data) {
        var select = document.getElementById(this.id)
        let opt_empty = document.createElement('option')

        opt_empty.value = null
        opt_empty.text = '--------'

        select.add(opt_empty)

        for (let i in data) {
            let opt = document.createElement('option')
            opt.value = data[i].id
            let text = data[i].name

            if ('status' in data[i]) {
                let status = data[i].is_active ? 'Activo': 'Inactivo'
                text == `${text}- (${status})`
            }

            opt.innerHTML = text
            select.add(opt)
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