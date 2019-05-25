import './node_modules/normalize.css'

import Spinner from './Spinner.js'
import './BarMain.js'
import MenuMain from './MenuMain.js'
import MenuUser from './MenuUser.js'
import './Footer.js'
import './styles/MasterIn.css'


class MasterIn {

    constructor () {
        this.container = document.getElementById('main')
        this.spinner = new Spinner(this.container)
        this.menu_main = new MenuMain()
        this.user_menu = new MenuUser()

        this.domain = window.location.origin
        this.button_logout = document.getElementById('btn-logout')
        this.button_logout_menu = document.getElementById('btn-logout-menu')
    }
}


export default MasterIn
