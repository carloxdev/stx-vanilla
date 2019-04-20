import './styles.css'

class FieldMultiSelect {

    constructor (id) {
        this.select = document.getElementById(id)
        
        this.init()
    }

    create_SearchBar() {
        var search = document.createElement("input")
        search.className = "search-input"
        search.type = "text"
        search.setAttribute("placeholder", "Buscar alimento...")

        search.addEventListener(
            "input",
            this.search_Value.bind(this)
        )

        return search
    }

    create_ButtonClearSearch() {
        let btn_clear = document.createElement("button")
        btn_clear.className = "btn-clear"
        btn_clear.type = "button"
        // btn_clear.innerHTML = '<i class="fas fa-times-circle"></i>'

        btn_clear.addEventListener(
            "click",
            this.clear_SearchBar.bind(this)
        )

        return btn_clear
    }    

    create_ButtonSelect() {
        let btn_select = document.createElement("button")
        btn_select.className = "btn-select"
        btn_select.type = "button"
        btn_select.innerHTML = '<i class="fas fa-check-circle"></i>'

        btn_select.addEventListener(
            "click",
            this.select_Items.bind(this)
        )

        return btn_select
    }

    restart_SearchBar() {
        this.select.wrapper.select_header.search.value = ""
        this.select.wrapper.select_header.btn_clear.innerHTML = ''
    }

    clear_SearchBar(event) {
        event.preventDefault()
        this.restart_SearchBar()
        this.clear_Columns()
        this.load_Items()
        this.select.wrapper.select_header.search.focus()
    }

    select_Items(event) {

        // Get search value
        var query = this.select.wrapper.select_header.search.value;

        if (query) {
            
            var item_group = null;
            var current_optgroup = null;
    
            // Loop over select options and add to the non-selected and selected columns
            for (var i = 0; i < this.select.options.length; i++) {
                var option = this.select.options[i];
                var label = option.textContent || option.innerText;

                if (!query || query && label.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    option.selected = true;
                }

            }

            this.clear_Columns()
            this.load_Items()
        }
    }

    deselect_Items(event) {

        this.restart_SearchBar()

        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i];
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

    search_Value(event) {
        this.select.wrapper.select_header.btn_clear.innerHTML = '<i class="fas fa-times-circle"></i>'
        this.clear_Columns()
        this.load_Items()
    }

    load_Items() {

        // Get search value
        if (this.select.wrapper.select_header.search) {
            var query = this.select.wrapper.select_header.search.value;
        }

        var item_group = null;
        var current_optgroup = null;

        // Loop over select options and add to the non-selected and selected columns
        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i];

            var value = option.value;
            var label = option.textContent || option.innerText;

            var row = document.createElement("a");
            row.tabIndex = 0;
            row.className = "item";
            row.innerHTML = label;
            row.setAttribute("role", "button");
            row.setAttribute("data-value", value);
            row.setAttribute("multi-index", i);

            if (option.disabled) {
                row.className += " disabled";
            }

            // Add row to selected column if option selected
            if (option.selected) {
                row.className += " selected";
                var clone = row.cloneNode(true);
                this.select.wrapper.lists.selected.appendChild(clone);
            }

            // Create group if entering a new optgroup
            if (option.parentNode.nodeName == "OPTGROUP" && option.parentNode != current_optgroup) {
                current_optgroup = option.parentNode
                item_group = document.createElement("div");
                item_group.className = "item-group";

                if (option.parentNode.label) {
                    var groupLabel = document.createElement("span");
                    groupLabel.innerHTML = option.parentNode.label;
                    groupLabel.className = "group-label"
                    item_group.appendChild(groupLabel);
                }

                this.select.wrapper.lists.non_selected.appendChild(item_group);
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
                    item_group.appendChild(row);
                } else {
                    this.select.wrapper.lists.non_selected.appendChild(row);
                }
            }
        }
    }

    save_OptionsCurrentState() {

        for (var i = 0; i < this.select.options.length; i++) {
            var option = this.select.options[i];
            option.setAttribute("data-origin-disabled", option.disabled);
        }
    }

    click_Option(event) {
        if (event.target.getAttribute("multi-index")) {
            this.toggle_Option(event)
        }
    }

    trigger_Event(type) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(type, false, true);
        this.select.dispatchEvent(e);
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

        console.log(`Seleccionados: ${selected_count}`)
        console.log(option)

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

        var lists = document.createElement("div")
        lists.className = "lists"
        wrapper.appendChild(lists)

        // Add search bar
        let search_bar = this.create_SearchBar()
        select_header.appendChild(search_bar)
        select_header.search = search_bar

        // Add clear search bar
        let btn_clear = this.create_ButtonClearSearch()
        select_header.appendChild(btn_clear)
        select_header.btn_clear = btn_clear

        // Add Button Select
        let btn_select = this.create_ButtonSelect()
        select_header.appendChild(btn_select)
        select_header.btn_select = btn_select

        wrapper.select_header = select_header

        // Add columns
        let non_selected = this.create_NonSelectedColumn()
        lists.appendChild(non_selected)
        lists.non_selected = non_selected

        let selected = this.create_SelectedColumn()
        lists.appendChild(selected)
        lists.selected = selected

        wrapper.lists = lists

        // Add Button Deselect
        let btn_deselect = this.create_BtnDeselect()
        wrapper.appendChild(btn_deselect)
        wrapper.btn_deselect = btn_deselect

        // Add click handler to toggle the selected status
        wrapper.addEventListener("click", this.click_Option.bind(this))

        // Save current state
        this.save_OptionsCurrentState()

        // Add multi.js wrapper after select element
        this.select.wrapper = wrapper
        this.select.parentNode.insertBefore(wrapper, this.select.nextSibling)

        this.load_Items()

        // Refresh selector when select values change
        // this.select.addEventListener("change", this.search_Value.bind(this))
    }
}

export default FieldMultiSelect