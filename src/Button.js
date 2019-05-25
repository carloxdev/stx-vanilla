import './styles/Buttons.css'

class Button {

    constructor (_id) {
        this.container = document.getElementById(_id)
    }

    disable() {
        this.container.classList.add('btn-disabled')
    }

    enable() {
        this.container.classList.remove('btn-disabled')
    }
}

export default Button