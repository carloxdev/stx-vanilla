import 'normalize.css'

import Spinner from '../../Spinner/index.js'
import '../../BarMain/index.js'
import MenuMain from '../../MenuMain/index.js'
import MenuUser from '../../MenuUser/index.js'
import '../../Footer/index.js'
import './styles.css'


class AppMasterIn {

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


export default AppMasterIn
