import './styles.css'

export default class AppMenu {

    constructor () {
        this.container = document.getElementById("menu")
        this.button = document.getElementById("navbar-icon")

        this.items = document.getElementsByClassName("menu-item")
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

        for (let item of this.items) {
            if (item.hasAttribute("data-type")) {
                if (item.getAttribute("data-type") == "submenu") {
                    new SubMenu(item)
                }
            }
        }
    }

    click_Button (event) {
        event.preventDefault()
        this.open()
    }

    mouseleave_Container (event) {
        event.preventDefault()
        this.close()
    }

    open () {
        if (this.check_IsOpen() == true) {
            this.close()
        }
        else {
            this.container.classList.remove('menu--close')
            this.button.classList.add('main-header-icon--active')
        }
    }

    close () {
        this.container.classList.add('menu--close')
        this.button.classList.remove('main-header-icon--active')
    }

    check_IsOpen () {
        let value = this.container.classList.contains('menu--close')
        if (value == true)
        {
            return false
        }
        else {
            return true
        }
    }
}


class SubMenu {

    constructor (_item_obj) {
        this.container = _item_obj.getElementsByClassName("submenu")[0]
        this.button = _item_obj.getElementsByClassName("menu-item-link")[0]

        this.set_Events()
    }

    set_Events() {
        this.button.addEventListener(
            "click",
            this.click_Button.bind(this)
        )
    }

    click_Button (event) {
        event.preventDefault()
        this.open()
    }

    open() {
        if (this.check_IsOpen() == true) {
            this.close()
        }
        else {
            this.container.classList.remove('submenu--close')
            this.button.classList.add('menu-item-link--active')

            let iconito = this.button.getElementsByClassName("fa-angle-down")[0]
            iconito.classList.remove("fa-angle-down")
            iconito.classList.add("fa-angle-up")
        }
    }

    close() {
        this.container.classList.add('submenu--close')
        this.button.classList.remove('menu-item-link--active')

        let iconito = this.button.getElementsByClassName("fa-angle-up")[0]
        iconito.classList.remove("fa-angle-up")
        iconito.classList.add("fa-angle-down")
    }

    check_IsOpen () {
        let value = this.container.classList.contains("submenu--close")
        if (value == true) {
            return false
        }
        else {
            return true
        }
    }
}