import './styles/CardFormImage.css'

export default class CardFormImage {

    constructor (_id) {
        let query_view = `[data-card-img-view='${_id}']`
        this.preview = document.querySelector(query_view)
        console.log(this.preview)

        let query_btn = `[data-card-img-btn='${_id}']`
        this.button_load = document.querySelector(query_btn)
        console.log(this.button_load)

        this.file_file = document.getElementById(
            this.button_load.getAttribute("for")
        )
        this.set_Events()
    }

    set_Events() {
        this.file_file.addEventListener(
            "change",
            this.click_ButtonLoad.bind(this)
        )
    }

    click_ButtonLoad(e) {
        if (this.file_file.files && this.file_file.files.item(0)) {

            let reader = new FileReader()

            var _this = this
            reader.onload = function (event) {
                _this.preview.setAttribute("src", event.target.result)
            }
            reader.readAsDataURL(this.file_file.files.item(0))
        }
    }
}