import './styles.css'

class MenuApp {

    constructor () {
        this.container = document.getElementById("menu-main")
        this.button = document.getElementById("bar-main-icon")

        this.items = document.getElementsByClassName("menu-main-item")
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
            this.container.classList.remove('menu-main--close')
            this.button.classList.add('bar-main-icon--active')
        }
    }

    close () {
        this.container.classList.add('menu-main--close')
        this.button.classList.remove('bar-main-icon--active')
    }

    check_IsOpen () {
        let value = this.container.classList.contains('menu-main--close')
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
        this.container = _item_obj.getElementsByClassName("submenu-main")[0]
        this.button = _item_obj.getElementsByClassName("menu-main-item-link")[0]

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
            this.container.classList.remove('submenu-main--close')
            this.button.classList.add('menu-main-item-link--active')

            let iconito = this.button.getElementsByClassName("fa-angle-down")[0]
            iconito.classList.remove("fa-angle-down")
            iconito.classList.add("fa-angle-up")
        }
    }

    close() {
        this.container.classList.add('submenu-main--close')
        this.button.classList.remove('menu-main-item-link--active')

        let iconito = this.button.getElementsByClassName("fa-angle-up")[0]
        iconito.classList.remove("fa-angle-up")
        iconito.classList.add("fa-angle-down")
    }

    check_IsOpen () {
        let value = this.container.classList.contains("submenu-main--close")
        if (value == true) {
            return false
        }
        else {
            return true
        }
    }
}


export default MenuApp;