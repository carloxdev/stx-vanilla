import ModalFilters from '../ModalFilters/index.js'

import './styles.css'

export default class ToolbarSearch {

    constructor () {
        this.btn_show = document.getElementById("toobar-search-btn-show")
        this.modal_filters = new ModalFilters()

        this.set_Events()
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
