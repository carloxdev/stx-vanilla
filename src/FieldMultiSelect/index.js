import './styles.css'

class FieldMultiSelect {

    constructor (settings) {

        if (typeof settings !== 'undefined' || settings != {} ) {
            this.select = document.getElementById(settings["id"])
            this.placeholder = settings["placeholder"]
            
            this.init()
        }
        else {
            throw new Error("Se debe proporcionar configuraciones")
        }

    }

    create_SearchInput() {
        var search_input = document.createElement("input")
        search_input.className = "search-input"
        search_input.type = "text"
        search_input.setAttribute("placeholder", this.placeholder)

        search_input.addEventListener(
            "input",
            this.execute_Search.bind(this)
        )

        return search_input
    }

    clear_SearchInput() {
        this.select.wrapper.header.search_input.value = ""
        this.select.wrapper.header.btn_clear.innerHTML = ''
    }

    click_SearchBtnClear(event) {
        event.preventDefault()

        this.clear_SearchInput()
        this.clear_Columns()
        this.load_Items()
        this.select.wrapper.header.search_input.focus()
    }

    create_BtnClearSearchInput() {
        let btn_clear = document.createElement("button")
        btn_clear.className = "btn-clear"
        btn_clear.type = "button"

        btn_clear.addEventListener(
            "click",
            this.click_SearchBtnClear.bind(this)
        )

        return btn_clear
    }    

    create_BtnSelect() {
        let btn_select = document.createElement("button")
        btn_select.className = "btn-select"
        btn_select.type = "button"
        btn_select.innerHTML = '<i class="fas fa-check-circle"></i> Seleccionar'

        btn_select.addEventListener(
            "click",
            this.select_Items.bind(this)
        )

        return btn_select
    }

    clear_Options() {
        for (let i in this.select.options) {
            this.select.options[i] = null
        }
    }

    get_SelectedOptions() {
        let selected_values = []
        for (var i = 0; i < this.select.options.length; i++) {
            if (this.select.options[i].selected) {
                selected_values.push(parseInt(this.select.options[i].value))
            }
        }

        return selected_values
    }

    fill_Options(data) {
        for (let i in data) {
            let opt = document.createElement('option')
            opt.value = data[i].id
            let text = `${data[i].day_desc}: ${data[i].from_hour} - ${data[i].to_hour}`
            opt.innerHTML = text
            this.select.appendChild(opt)
        }
    }

    mark_Options(data) {
        for (var i = 0; i < this.select.options.length; i++) { 
            if (data.includes(parseInt(this.select.options[i].value))) {
                this.select.options[i].selected = true
            }
        }
    }

    select_Items(event) {

        // Get search value
        var query = this.select.wrapper.header.search_input.value;

        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i]
            var label = option.textContent || option.innerText;

            if (!query || query && label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                option.selected = true
            }

        }

        this.clear_Columns()
        this.load_Items()
    }

    deselect_Items(event) {

        this.clear_SearchInput()

        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i]
            option.selected = false;
        }

        this.clear_Columns()
        this.load_Items()
    }

    create_BtnDeselect() {
        let btn_deselect = document.createElement("button")
        btn_deselect.className = "btn-deselect"
        btn_deselect.type = "button"
        btn_deselect.innerHTML = '<i class="fas fa-backspace"></i> Desmarcar Todo'

        btn_deselect.addEventListener(
            "click",
            this.deselect_Items.bind(this)
        )

        return btn_deselect
    }

    create_SelectedColumn() {
        let selected = document.createElement("div")
        selected.className = "list-selected"

        return selected
    }

    create_NonSelectedColumn() {
        let non_selected = document.createElement("div")
        non_selected.className = "list-non-selected"

        return non_selected
    }

    clear_Columns() {
        this.select.wrapper.lists.selected.innerHTML = ""
        this.select.wrapper.lists.non_selected.innerHTML = ""
    }

    execute_Search(event) {

        let value = this.select.wrapper.header.search_input.value
        if (value) {
            this.select.wrapper.header.btn_clear.innerHTML = '<i class="fas fa-times-circle"></i>'
        } else {
            this.select.wrapper.header.btn_clear.innerHTML = ''
        }
        
        this.clear_Columns()
        this.load_Items()
    }

    load_Items() {

        // Get search value
        if (this.select.wrapper.header.search_input) {
            var query = this.select.wrapper.header.search_input.value;
        }

        var item_group = null;
        var current_optgroup = null;

        // Loop over select options and add to the non-selected and selected columns
        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i]

            var value = option.value;
            var label = option.textContent || option.innerText;

            var row = document.createElement("a")
            row.tabIndex = 0;
            row.className = "item"
            row.innerHTML = label;
            row.setAttribute("role", "button")
            row.setAttribute("data-value", value)
            row.setAttribute("multi-index", i)

            if (option.disabled) {
                row.className += " disabled"
            }

            // Add row to selected column if option selected
            if (option.selected) {
                row.className += " selected"
                var clone = row.cloneNode(true)

                this.select.wrapper.lists.selected.appendChild(clone)
            }

            // Create group if entering a new optgroup
            if (option.parentNode.nodeName == "OPTGROUP" && option.parentNode != current_optgroup) {
                current_optgroup = option.parentNode
                item_group = document.createElement("div")
                item_group.className = "item-group"

                if (option.parentNode.label) {
                    var groupLabel = document.createElement("span")
                    groupLabel.innerHTML = option.parentNode.label;
                    groupLabel.className = "group-label"
                    item_group.appendChild(groupLabel)
                }

                this.select.wrapper.lists.non_selected.appendChild(item_group)
            }

            // Clear group if not inside optgroup
            if (option.parentNode == this.select) {
                item_group = null;
                current_optgroup = null;
            }

            // Apply search filtering
            if (!query || query && label.toLowerCase().indexOf(query.toLowerCase()) > -1) {

                // Append to group if one exists, else just append to wrapper
                if (item_group != null) {
                    item_group.appendChild(row)
                } else {
                    this.select.wrapper.lists.non_selected.appendChild(row)
                }
            }
        }
    }

    save_OptionsCurrentState() {

        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i]
            option.setAttribute("data-origin-disabled", option.disabled)
        }
    }

    click_Option(event) {
        if (event.target.getAttribute("multi-index")) {
            this.toggle_Option(event)
        }
    }

    trigger_Event(type) {
        var e = document.createEvent("HTMLEvents")
        e.initEvent(type, false, true)
        this.select.dispatchEvent(e)
    }

    toggle_Option(event) {
        var option = this.select.options[event.target.getAttribute("multi-index")]

        if (option.disabled) {
            return;
        }

        option.selected = !option.selected;

        // Count current selected
        var selected_count = 0
        for (var i = 0; i < this.select.options.length; i++) {
            if (this.select.options[i].selected) {
                selected_count++;
            }
        }

        // console.log(`Seleccionados: ${selected_count}`)
        // console.log(option)

        this.clear_Columns()
        this.load_Items()
    
    }

    init() {
        // Hide component
        this.select.style.display = "none"

        // Start constructing selector
        var wrapper = document.createElement("div")
        wrapper.className = "select-wrapper"

        var select_header = document.createElement("div")
        select_header.className = "select-header"
        wrapper.appendChild(select_header)

        var select_lists = document.createElement("div")
        select_lists.className = "select-lists"
        wrapper.appendChild(select_lists)

        var select_footer = document.createElement("div")
        select_footer.className = "select-footer"
        wrapper.appendChild(select_footer)        

        // Add search input
        let search_input = this.create_SearchInput()
        select_header.appendChild(search_input)
        select_header.search_input = search_input

        // Add Button clear search input
        let btn_clear = this.create_BtnClearSearchInput()
        select_header.appendChild(btn_clear)
        select_header.btn_clear = btn_clear

        wrapper.header = select_header

        // Add columns
        let non_selected = this.create_NonSelectedColumn()
        select_lists.appendChild(non_selected)
        select_lists.non_selected = non_selected

        let selected = this.create_SelectedColumn()
        select_lists.appendChild(selected)
        select_lists.selected = selected

        wrapper.lists = select_lists

        // Add Button Select
        let btn_select = this.create_BtnSelect()
        select_footer.appendChild(btn_select)
        select_footer.btn_select = btn_select

        // Add Button Deselect
        let btn_deselect = this.create_BtnDeselect()
        select_footer.appendChild(btn_deselect)
        select_footer.btn_deselect = btn_deselect

        wrapper.footer = select_footer

        // Add click handler to toggle the selected status
        wrapper.addEventListener("click", this.click_Option.bind(this))

        // Save current state
        this.save_OptionsCurrentState()

        // Add multi.js wrapper after select element
        this.select.wrapper = wrapper
        this.select.parentNode.insertBefore(wrapper, this.select.nextSibling)

        this.load_Items()

        // Refresh selector when select values change
        // this.select.addEventListener("change", this.execute_Search.bind(this))
    }

}

export default FieldMultiSelect