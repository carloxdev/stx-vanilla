import './styles.css'

export default class UserMenu {

    constructor () {
        this.container = document.getElementById("user-menu")
        this.button = document.getElementById("navbar-user")

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
            this.container.classList.remove('user-menu--close')
            this.button.classList.add('navbar-user--active')
        }
    }

    close () {
        this.container.classList.add('user-menu--close')
        this.button.classList.remove('navbar-user--active')
    }

    check_IsOpen () {
        let value = this.container.classList.contains('user-menu--close')
        if (value == true) {
            return false
        }
        else {
            return true
        }
    }
}
