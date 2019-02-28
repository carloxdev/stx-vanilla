class Form {

    disable_Autocapitalize_InSelect() {
        let elements = document.querySelectorAll("[type='search']")

        elements.forEach( (item, index) => {
            item.setAttribute("autocapitalize", "off");
            item.setAttribute("autocorrect", "off");
            item.setAttribute("spellcheck", "false");
            item.setAttribute("autocomplete", "off");
        })
    }
}

export default Form