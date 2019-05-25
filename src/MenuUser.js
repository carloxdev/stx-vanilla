import './styles/MenuUser.css'

export default class MenuUser {

    constructor () {
        this.container = document.getElementById("menu-user")
        this.button = document.getElementById("bar-main-user")

        this.set_Events()
    }

    set_Events () {
        this.button.addEventListener(
            "click",
            this.click_Button.bind(this)
        )
        this.container.addEventListener(
            "mouseleave",
            this.mouseleave_Container.bind(this)
        )
    }

    click_Button (_event) {
        _event.preventDefault()
        this.open()
    }

    mouseleave_Container (_event) {
        _event.preventDefault()
        this.close()
    }

    open () {
        if (this.check_IsOpen() == true) {
            this.close()
        }
        else {
            this.container.classList.remove('menu-user--close')
            this.button.classList.add('bar-main-user--active')
        }
    }

    close () {
        this.container.classList.add('menu-user--close')
        this.button.classList.remove('bar-main-user--active')
    }

    check_IsOpen () {
        let value = this.container.classList.contains('menu-user--close')
        if (value == true) {
            return false
        }
        else {
            return true
        }
    }
}
