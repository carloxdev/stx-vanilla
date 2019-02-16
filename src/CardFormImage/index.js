import './styles.css'

export default class CardFormImage {

    constructor (_btn_image) {
        this.button_load = _btn_image
        this.preview = document.getElementById("imagecard-body-img")
        this.file_file = document.getElementById(
            this.button_load.getAttribute("for")
        )
        this.init_Events()
    }

    init_Events() {
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