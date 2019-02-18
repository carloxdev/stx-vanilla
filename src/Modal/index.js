import './styles.css'

class Modal {

    constructor(_container_id, _title_id, _modal_close) {
        this.container = document.getElementById(_container_id)
        this.title = document.getElementById(_title_id)
        this.title_close = document.getElementById(_modal_close)
        this.btn_close = null
        this.btn_excute = null
        this.set_Events()
    }

    set_Title(_title) {
        this.title.textContent = _title
    }

    open() {
        this.container.classList.add("modal--show");
        document.body.classList.add("modal--show-body")
    }

    close() {
        this.container.classList.remove("modal--show");
        document.body.classList.remove("modal--show-body")
    }

    set_Events() {
        document.addEventListener(
            "keydown",
            this.press_KeyScape.bind(this)
        )
        this.title_close.addEventListener(
            "click",
            this.click_BtnClose.bind(this)
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

export default Modal;