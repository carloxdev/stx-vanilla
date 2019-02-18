import './styles.css'

class ModalFilters {

    constructor() {
        this.container = document.getElementById("modal-filters-id")
        this.title = document.getElementById('modal-filters-title')
        this.btn_close = document.getElementById('modal-filters-close')
        this.window = document
        this.set_Events()
    }

    set_Title(_title) {
        this.title.textContent = _title
    }

    open() {
        this.container.classList.add("modal-filters--show");
        document.body.classList.add("modal-filters--show-body")
    }

    close() {
        this.container.classList.remove("modal-filters--show");
        document.body.classList.remove("modal-filters--show-body")
    }

    set_Events() {
        this.btn_close.addEventListener(
            "click",
            this.click_BtnClose.bind(this)
        )
        this.window.addEventListener(
            "keydown",
            this.press_KeyScape.bind(this)
        )
    }

    press_KeyScape(event) {
        if (event.keyCode == 27) {
            this.close()
        }
    }

    click_BtnClose(event) {
        event.preventDefault()
        this.close()
    }

}

export default ModalFilters;