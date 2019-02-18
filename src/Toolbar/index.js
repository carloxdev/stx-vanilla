import Modal from '../Modal/index.js'

import './styles.css'

export default class Toolbar {

    constructor () {
        this.btn_show = document.getElementById("toolbar-search-btn-show")
        this.modal_filters = new Modal(
            "modal-filter-id",
            "modal-filter-title",
            "modal-filter-close"
        )

        this.init()
        this.set_Events()
    }

    init() {
        this.modal_filters
    }

    set_Events() {
        this.btn_show.addEventListener(
            "click",
            this.click_ShowButton.bind(this)
        )
    }

    click_ShowButton(event) {
        event.preventDefault()
        this.modal_filters.open()
    }
}
