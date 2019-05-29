const path = require('path');

class AppController {
    constructor() {
        this.read = this.read.bind(this);
    }

    isNotEmpty(param) {
        return typeof param != 'undefined' && param != '';
    }

    renderErrorPage(res, message, code = 404) {
        let content = {
            title: 'Erro',
            content: message 
        }
        
        res.status(code).render('default.html', content);
    }
}

module.exports = AppController;