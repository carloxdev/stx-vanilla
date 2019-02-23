import 'normalize.css' 

import Spinner from '../../Spinner/index.js'
import '../../BarMainSimple/index.js'

import './styles.css'

export default class AppMasterOut {

    constructor (_main) {
        this.container = document.getElementById(_main)
        this.spinner = new Spinner(this.container)        
    }
}