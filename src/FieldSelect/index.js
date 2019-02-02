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

    // load(data) {
    //     for (var i in data) {
    //         this.add_Option
    //     }
    // }

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

    get_Value () {
        return this.container.selected()
    }
}