import '../node_modules/normalize.css'

import Spinner from './Spinner.js'
import './BarMainSimple.js'
import './Footer.js'

import './styles/MasterOut.css'

export default class MasterOut {

    constructor () {
        this.container = document.getElementById("main")
        this.spinner = new Spinner(this.container)
    }
}