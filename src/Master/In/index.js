import 'normalize.css'

import Spinner from '../../Spinner/index.js'
import AppMenu from '../../AppMenu/index.js'
import UserMenu from '../../UserMenu/index.js'

import '../../NavBar/index.js'

import './styles.css'


export default class AppMasterIn {

    constructor (_main, _BtnLogoutId, _MenuLogoutId ) {
        this.container = document.getElementById(_main)
        this.spinner = new Spinner(this.container)
        this.app_menu = new AppMenu()
        this.user_menu = new UserMenu()
        
        this.domain = window.location.origin
        this.button_logout = document.getElementById(_BtnLogoutId)
        this.button_logout_menu = document.getElementById(_MenuLogoutId)
    }
}

