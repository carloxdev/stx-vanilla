import './styles.css'

export default class Message {

    constructor (_container, _btn_close) {
        this.container = document.getElementById(_container)
        this.button = document.getElementById(_btn_close)

        if (this.container != null) {
            this.set_Events()
        }
    }

    set_Events () {
        this.button.addEventListener(
            "click",
            this.click_Button.bind(this)
        )        
    }

    click_Button (event) {
        event.preventDefault()
        this.container.classList.add('msg--close')
    }
}
