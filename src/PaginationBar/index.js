import './styles.css'

class PaginationBar {

    constructor () {
        this.is_filtered = document.getElementById("pages-bar-filtered")
    }

    is_Filtered() {
        let value = false

        if(this.is_filtered.value == "True") {
            value = true
        }

        return value
    }
}

export default PaginationBar;