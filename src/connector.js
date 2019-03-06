var cookies = require('browser-cookies');

class Connector {

    contructor () {
        this.token = null
    }

    get_Cookie() {
        this.token = cookies.get('csrftoken')
        return this.token
    }

    get_Headers() {
        let headers = {
            'Content-Type': 'application/json',
            "X-CSRFToken": this.get_Cookie()
        }

        return headers
    }

    format_ResponseError(data) {

        console.log(data)

        var cadena = ""
        var is_primero = true
        for (var i in data) {
            if (is_primero) {
                cadena = data[i]
            }
            else {
                cadena = cadena + " y " + data[i]
            }
        }
        
        return cadena
    }
}

export default Connector
