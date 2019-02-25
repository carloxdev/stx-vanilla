import 'normalize.css'

import Spinner from '../../Spinner/index.js'
import MenuMain from '../../MenuMain/index.js'
import MenuUser from '../../MenuUser/index.js'
import '../../Footer/index.js'

import '../../BarMain/index.js'

import './styles.css'


class AppMasterIn {

    constructor (_main, _BtnLogoutId, _MenuLogoutId ) {
        this.container = document.getElementById(_main)
        this.spinner = new Spinner(this.container)
        this.menu_main = new MenuMain()
        this.user_menu = new MenuUser()
        
        this.domain = window.location.origin
        this.button_logout = document.getElementById(_BtnLogoutId)
        this.button_logout_menu = document.getElementById(_MenuLogoutId)
    }
}


export default AppMasterIn
