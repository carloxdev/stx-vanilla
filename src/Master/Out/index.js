import 'normalize.css' 

import Spinner from '../../Spinner/index.js'
import '../../BarMainSimple/index.js'
import '../../Footer/index.js'

import './styles.css'

export default class AppMasterOut {

    constructor () {
        this.container = document.getElementById("main")
        this.spinner = new Spinner(this.container)        
    }
}