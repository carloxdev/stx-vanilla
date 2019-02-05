import './styles.css'

export default class Message {

    constructor () {
        this.container = document.getElementById("msg")
        this.button = document.getElementById("msg-btn-close")

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

