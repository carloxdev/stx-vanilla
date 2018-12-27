import "./styles.css"

export default class Spinner {
    constructor (_parent_obj) {
        this.parent_obj = _parent_obj
    }

    create_HtmlElement () {
        let html = '<div class="loading-wrap" id="spinner"> '
                    '    <div class="loading"></div> '
                    '</div>'
        let html_element = document.createElement("div");
        html_element.className = "loading-wrap"
        html_element.setAttribute("id", "spinner")
        html_element.innerHTML = '<div class="loading"></div>'
        return html_element
    }

    start() {
        if (document.getElementById('spinner') == null) {
            this.parent_obj.appendChild(this.create_HtmlElement())
        }
    }

    stop() {
        if (document.getElementById('spinner') != null) {
            document.getElementById('spinner').remove()
        }
    }
}